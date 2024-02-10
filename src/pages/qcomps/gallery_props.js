function Profile(props) {
    return (
        <section className="profile">
            <h2>{props.name}</h2>
            <img
                className="avatar"
                src={props.image_src}
                alt={props.image_alt}
                width={props.image_width}
                height={props.image_height}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {props.profession}
                </li>
                <li>
                    <b>Awards: {props.award_count} </b>({props.awards})
                </li>
                <li>
                    <b>Discovered: </b>
                    {props.discovery}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                name={"Maria Skłodowska-Curie"}
                image_src={"https://i.imgur.com/szV5sdGs.jpg"}
                image_alt={"Maria Skłodowska-Curie"}
                image_width={70}
                image_height={80}
                profession={"physicist and chemist"}
                award_count={4}
                awards={
                    "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
                }
                discovery={"polonium (element)"}
            />
            <Profile
                name={"Katsuko Saruhashi"}
                image_src={"https://i.imgur.com/YfeOqp2s.jpg"}
                image_alt={"Katsuko Saruhashi"}
                image_width={70}
                image_height={70}
                profession={"geochemist"}
                award_count={2}
                awards={"Miyake Prize for geochemistry, Tanaka Prize"}
                discovery={"a method for measuring carbon dioxide in seawater"}
            />
            {/* <section className="profile">
                <h2>Maria Skłodowska-Curie</h2>
                <img
                    className="avatar"
                    src="https://i.imgur.com/szV5sdGs.jpg"
                    alt="Maria Skłodowska-Curie"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        physicist and chemist
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy
                        Medal, Matteucci Medal)
                    </li>
                    <li>
                        <b>Discovered: </b>
                        polonium (element)
                    </li>
                </ul>
            </section>
            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src="https://i.imgur.com/YfeOqp2s.jpg"
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        geochemist
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        (Miyake Prize for geochemistry, Tanaka Prize)
                    </li>
                    <li>
                        <b>Discovered: </b>a method for measuring carbon dioxide
                        in seawater
                    </li>
                </ul>
            </section> */}
        </div>
    );
}
