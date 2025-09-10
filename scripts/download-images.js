import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const streamPipeline = promisify(pipeline);
const DRIVE_BASE = 'https://drive.google.com/uc?export=download';
const USER_AGENT = process.env.GDRIVE_UA || 'aria-gdrive-downloader/1.0';

function defaultHeaders() {
  return {
    'user-agent': USER_AGENT,
    'accept': '*/*',
  };
}

/** Read config from env or local file */
function parseConfig() {
  // Try image-archive.json in the same folder as this script
  const localArchive = path.resolve(__dirname, 'image-archive.json');
  if (fs.existsSync(localArchive)) {
    try {
      return JSON.parse(fs.readFileSync(localArchive, 'utf8'));
    } catch (e) {
      console.error('Failed to read/parse image-archive.json');
      throw e;
    }
  }
  return [];
}

/** Ensure directory exists for file */
function ensureDirFor(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/** Extract file ID from link */
function extractIdFromLink(href) {
  if (!href) return null;

  let m = href.match(/\/file\/d\/([0-9A-Za-z_-]+)/);
  if (m) return m[1];

  m = href.match(/[?&]id=([0-9A-Za-z_-]+)/);
  if (m) return m[1];

  m = href.match(/\/uc\?id=([0-9A-Za-z_-]+)/);
  if (m) return m[1];

  m = href.match(/\/d\/([0-9A-Za-z_-]+)/);
  if (m) return m[1];

  return null;
}

/** Collect cookies from headers */
function collectCookies(headers) {
  if (typeof headers.getSetCookie === 'function') {
    const arr = headers.getSetCookie();
    if (arr && arr.length) {
      return arr.map((c) => c.split(';')[0]).join('; ');
    }
  }
  const raw = headers.raw ? headers.raw()['set-cookie'] : headers.get('set-cookie');
  if (!raw) return '';
  return (Array.isArray(raw) ? raw : [raw]).map((c) => c.split(';')[0]).join('; ');
}

async function fetchWithConfirm(link) {
    if (typeof link !== 'string' || !/^https?:\/\//i.test(link)) {
        throw new Error('fetchWithConfirm: a valid HTTP(S) Google Drive link is required.');
    }

    let res = await fetch(link, { redirect: 'manual', headers: defaultHeaders() });

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (!loc) throw new Error('Redirect without Location header.');
      res = await fetch(loc, { redirect: 'follow', headers: defaultHeaders() });
    }

    const disp = res.headers.get('content-disposition');
    if (disp && /attachment/i.test(disp)) return res;

    const id = extractIdFromLink(link);
    if (!id) {
        throw new Error('Could not extract file id from link');
    }

    const cookie = collectCookies(res.headers);
    const confirmUrl = `${DRIVE_BASE}&id=${encodeURIComponent(id)}`;
    return await fetch(confirmUrl, {
      headers: cookie ? { ...defaultHeaders(), Cookie: cookie } : defaultHeaders(),
      redirect: 'follow',
    });
}

/** Download one file */
async function downloadOne({ link, out: dir }) {
  const out = path.join("public", dir);
  if (!link || !out) {
    throw new Error('Each entry must have either link and out.');
  }

  ensureDirFor(out);

  console.log(`Downloading ${link} → ${out}`);

  const res = await fetchWithConfirm(link);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for link=${link}`);
  }

  await streamPipeline(res.body, fs.createWriteStream(out));
  console.log(`Saved: ${out}`);
  return out;
}

/** Main entry */
async function main() {
  const list = parseConfig();
  if (!Array.isArray(list) || list.length === 0) {
    console.log('No files to download. Skipping.');
    return;
  }

  for (const entry of list) {
    await downloadOne(entry);
  }

  console.log(`All ${list.length} file(s) downloaded successfully.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});