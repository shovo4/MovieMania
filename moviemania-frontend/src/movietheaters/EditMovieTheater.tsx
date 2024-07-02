import MovieTheaterForm from "./movieTheaterForm";

export default function EditMovieTheater() {
    return (
        <>
        <h3>Edit Movie Theater</h3>
        <MovieTheaterForm model={{name: 'Balaka', latitude: 53.48541670653012, longitude: -113.53831529617311 }} onSubmit={values => console.log(values)}/>
        </>
    );
  }