import './App.css';
import MoviesList from './movies/MoviesList';
import { movieDTO, landingPageDTO } from './movies/movies.model';
import { useEffect, useState } from 'react';


function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://thewaltdisneycompany.com/app/uploads/2021/04/042821_Luca-trailer_02-415x614.jpg'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
          }
        ]
    })
    }, 1000);
    return () => clearTimeout(timerId);
  });
      


  return (
    <>
    <h3>In Theaters</h3>
    <MoviesList movies={movies.inTheaters} />

    <h3>Upcoming Releases</h3>
    <MoviesList movies={movies.upcomingReleases} />
    </>

  );
}

export default App;
