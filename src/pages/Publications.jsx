import { ButtonR, Title } from '@/components'
import { publications } from '@/data';

const data = [...publications].reverse().map(({ ArXiv, PDF, Website, Code, BibTeX, ...rest }) => ({
    ...rest,
    Links: { ArXiv, PDF, Website, Code, BibTeX }
}));

const Thumbnail = ({ id, path }) => {
    const placeholder = '/images/placeholder.png';
    const src = path || placeholder;

    return (
        <img
            src={src}
            alt={`publication-image-${id}`}
            className="h-50 aspect-[4/3] object-contain rounded-xl"
            onError={e => {
                e.currentTarget.onError = null;
                e.currentTarget.src = "/images/placeholder.png";
            }}
        />
    );
}


const Publications = () => {
    return (
        <div className="pages">
            <Title name="Publications" />

            {/* Publication */}
            <section className="space-y-md">
                {data.map(item => (
                    <ul key={`publication-${item.Id}`} className="flex flex-col md:flex-row gap-md">
                        {/* Thumbnail */}
                        <Thumbnail id={item.Id} path={item.Image} />
                        {/* Content */}
                        <li className="space-y-xs md:space-y-sm">
                            {/* Title */}
                            <h3>{item.Title}</h3>
                            {/* Authors */}
                            <p className="font-bold">
                                {Array.isArray(item.Authors)
                                    ? item.Authors.join(', ')
                                    : item.Authors}
                            </p>
                            {/* Conference, Month Year. */}
                            {item.Conference && <p className="italic">
                                {item.Workshop && `${item.Workshop} on `}
                                <span>{item.Conference && item.Conference}</span>
                                <span>
                                    {item.Year
                                        ? item.Month
                                            ? `, ${item.Month} ${item.Year}.`
                                            : `, ${item.Year}.`
                                        : `.`}
                                </span>
                            </p>}
                            {/* Links */}
                            {Object.values(item.Links).some(value => value) && (
                                <div className="flex gap-2">
                                    {Object.entries(item.Links).map(([key, value]) =>
                                        value && <ButtonR key={key} title={key} link={value} />
                                    )}
                                </div>
                            )}
                            {/* Note */}
                            {item.Note && (
                                Array.isArray(item.Note) ? (
                                    item.Note.map((note, index) => (
                                        <p key={index} className="text-xs text-gray-600">{note}</p>
                                    ))
                                ) : (
                                    <p className="text-xs text-gray-600">{item.Note}</p>
                                )
                            )}
                        </li>
                    </ul>

                ))}
            </section>
        </div>
    );
};

export default Publications;
