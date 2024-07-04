import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import { ReactElement, useState } from "react";

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

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO) {
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO) {
        if (!draggedElement) {
            return;
        }
        if (actor.id !== draggedElement.id) {
            const draggedElementIndex = props.actors.findIndex(a => a.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(a => a.id === actor.id);
            const actors = [...props.actors];
            actors[draggedElementIndex] = actor;
            actors[actorIndex] = draggedElement;
            props.onAdd(actors);
        }
    }

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={(selected) => {
                    if (selected.length > 0) {
                        const selectedActor = selected[0] as actorMovieDTO;
                        if (props.actors.findIndex(a => a.id === selectedActor.id) === -1) {
                            props.onAdd([...props.actors, selectedActor]);
                        }
                    }
                }}
                options={actors}
                labelKey="name"
                filterBy={["name"]}
                placeholder="Choose actors..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={(option, props) => {
                    const actor = option as actorMovieDTO;
                    return (
                        <div>
                            <img
                                src={actor.picture}
                                alt={actor.name}
                                style={{
                                    height: '64px',
                                    marginRight: '10px',
                                    borderRadius: '50%'
                                }}
                            />
                            <span>{actor.name}</span>
                        </div>
                    );
                }}
            />
            <ul className="list-group">
                {props.actors.map(actor => (
                    <li key={actor.id} draggable={true} onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        {props.listUI(actor)}
                        <span className="badge badge-primary badge-pill pointer text-dark" style={{cursor: 'pointer'}} onClick={() => props.onRemove(actor)}>×</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface TypeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}
