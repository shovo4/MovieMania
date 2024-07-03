import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {

    const nonSelectedGenres: genreDTO[] = [{id: 1, name: "Comedy"}, {id: 3, name: "Drama"}];
    const selectedGenres: genreDTO[] = [{id: 2, name: "Action"}];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: "Cineplex"}];
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: "Bolaka"}];

    return (
        <>
        <h3>Edit Movie</h3>
        <MovieForm model={{ title: "Toy Story", inTheaters: true, trailer: "url", releaseDate: new Date('2019-01-01T00:00:00') }} onSubmit={values => console.log(values)}
        nonSelectedGenres={nonSelectedGenres} selectedGenres={selectedGenres} 
        nonSelectedMovieTheaters={nonSelectedMovieTheaters} selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={[]}/>
        </>
    );
  }