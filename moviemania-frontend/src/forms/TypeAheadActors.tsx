import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: TypeAheadActorsProps) {

    const actors: actorMovieDTO[] = [
        {
            id: 1,
            name: "Tom Holland",
            character: "Spiderman",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg"
        },
        {
            id: 2,
            name: "Robert Downey Jr.",
            character: "Ironman",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
        },
        {
            id: 3,
            name: "Chris Evans",
            character: "Captain America",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/220px-ChrisEvans2023.jpg"
        }
    ];

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor);
                }}
                options={actors}
                labelKey="name"
                filterBy={["name"]}
                placeholder="Choose actors..."
                minLength={1}
                renderMenuItemChildren={(option, props) => {
                    const actor = option as actorMovieDTO;
                    return (
                        <div>
                            <img
                                src={actor.picture}
                                alt={actor.name}
                                style={{
                                    height: '24px',
                                    marginRight: '10px',
                                    borderRadius: '50%'
                                }}
                            />
                            <span>{actor.name}</span>
                        </div>
                    );
                }}
            />
        </div>
    );
}

interface TypeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
}
