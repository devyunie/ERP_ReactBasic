
export function getImageUrl(imageId: string, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

function Profile({ name, imageId, profession, awardsCount, awards, Discovered }: Props) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awardsCount} </b>
                    ({awards})
                </li>
                <li>
                    <b>Discovered: </b>
                    {Discovered}
                </li>
            </ul>
        </section>
    );
}

interface Props {
    name: string,
    imageId: string,
    profession: string,
    awardsCount: number
    awards: string,
    Discovered: string
}
export default function Gallery() {

    const profile1 = {
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG',
        profession:'physicist and chemist',
        awardsCount:4,
        awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        Discovered:'polonium (chemical element)'
    }
    const profile2 = {
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2',
        profession:'geochemist',
        awardsCount:2,
        awards:'Miyake Prize for geochemistry, Tanaka Prize',
        Discovered:'a method for measuring carbon dioxide in seawater'
    }

    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile {...profile1}/>
            <Profile {...profile2}/>
        </div>
    );
}