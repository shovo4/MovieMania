import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {

  const nonSelectedGenres: genreDTO[] = [{id: 1, name: "Comedy"}, {id: 2, name: "Action"}, {id: 3, name: "Drama"}];
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: "Cineplex"}, {id: 2, name: "Bolaka"}];


  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm model={{ title: "", inTheaters: false, trailer: "", releaseDate: new Date() }} onSubmit={values => console.log(values)}
      nonSelectedGenres={nonSelectedGenres} selectedGenres={[]}
      nonSelectedMovieTheaters={nonSelectedMovieTheaters}
      selectedMovieTheaters={[]} 
      selectedActors={[]}/>
    </>
  );
}