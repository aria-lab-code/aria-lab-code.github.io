import { Title, Button } from '@/components'
import { people } from '@/data';

const Thumbnail = ({ id, path }) => {
    const placeholder = '/images/people/placeholder.png';
    const src = path || placeholder;

    return (
        <img
            src={src}
            alt={`person-image-${id}`}
            className="w-1/2 mx-auto md:mx-0 md:w-40 md:h-40 aspect-square object-cover rounded-xl"
            onError={e => {
                e.currentTarget.onError = null;
                e.currentTarget.src = placeholder;
            }}
        />
    );
}


const People = () => {

    return (
        <div className="pages">
            <Title name="People" />

            {/* Faculty Members & PhD, Graduate, Undergraduate Students */}
            {people.map(group => (
                <section key={group.role}>
                    {/* Role */}
                    <h2>{group.role}</h2>
                    {/* Groups */}
                    <ul className="space-y-md">
                        {/* People */}
                        {group.items.map(item => (
                            <li key={item.Id} className="flex flex-col md:flex-row gap-md">
                                {/* Thumbnail */}
                                <Thumbnail id={item.Id} path={item.Image} />
                                {/* Content */}
                                <div className="space-y-xs">
                                    {/* Name */}
                                    <h3 className="text-ured">{item.Name}</h3>
                                    {/* {item.Alumni && <p className="font-bold">{item.Role}</p>} */}
                                    {/* Bio */}
                                    <p>{item.Bio}</p>
                                    {/* Links */}
                                    <div className="flex gap-sm">
                                        {Object.entries(item.Links).map(([key, value]) =>
                                            value && <Button key={key} title={key} link={value} />
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}

export default People;