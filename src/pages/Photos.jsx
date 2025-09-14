import { useState, useEffect } from 'react';
import { Title } from '@/components';
import { photos } from '@/data';

const data = photos.reverse();

const Image = ({ id, path }) => {
    const placeholder = '/images/placeholder.png';
    const src = path || placeholder;

    return (
        <img
            src={src}
            alt={`photo-image-${id}`}
            className="aspect-video object-cover rounded-xl"
            onError={e => {
                e.currentTarget.onError = null;
                e.currentTarget.src = "/images/placeholder.png";
            }}
        />
    );
}

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    const hasDay = dateStr.match(/\d{4}-\d{2}-\d{2}/);
    const options = hasDay
        ? { year: 'numeric', month: 'long', day: 'numeric' }
        : { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
};

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="pages">
            <Title name='Photos' />
            {/* Photos */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {data.map((item, index) => (
                    <li key={`photos-${index}`} className="text-sm flex flex-col space-y-sm">
                        <div onClick={() => setSelectedImage(item.Image)} className="cursor-pointer">
                            <Image id={item.Id} path={item.Image} />
                        </div>
                        {item.Description && <p>{item.Description}</p>}
                        {item.Date && <p className="italic">{formatDate(item.Date)}</p>}
                    </li>
                ))}
            </ul>
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="selected" className="max-h-6/10 max-w-6/10 rounded-xl" />
                </div>
            )}
        </div>
    );
};

export default Photos;
