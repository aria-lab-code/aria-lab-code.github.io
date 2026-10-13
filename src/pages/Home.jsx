import { home, news } from '@/data';
import { Carousel } from '@/components';

// News items are plain text from the sheet, so split out any URLs and render
// them as real anchors instead of leaving them as unclickable text.
const URL_SPLIT = /(https?:\/\/[^\s]+)/g;

const Linkify = ({ text }) => (
    <>
        {String(text).split(URL_SPLIT).map((part, index) => {
            if (!part.startsWith('http')) return part;
            // Keep sentence punctuation that trails a URL out of the href.
            const [, url, trailing] = part.match(/^(.*?)([.,;:!?]*)$/);
            return (
                <span key={`link-${index}`}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ured underline break-words hover:text-blue-500"
                    >
                        {url}
                    </a>
                    {trailing}
                </span>
            );
        })}
    </>
);

const Home = () => {
    // Slice to show only the top 3 items
    const topNews = [...news].reverse().slice(0, home.numNews);

    return (
        <div className="pages">
            {/* Banner */}
            <section>
                <h1 className="text-center" >{home.Title}</h1>
                <Carousel imgList={home.BannerImages} />
            </section>

            {/* About Us */}
            <section>
                <h2>About Us</h2>
                <p>{home.Description}</p>
            </section>

            {/* News */}
            <section>
                <h2>Recent News</h2>
                <ul className="space-y-sm ml-8 list-disc">
                    {topNews.map((item, index) => (
                        <li key={`news-${index}`}>
                            <Linkify text={item.Content} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
