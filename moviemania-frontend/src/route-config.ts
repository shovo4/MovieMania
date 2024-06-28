import path from "path";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import CreateMovie from "./movies/CreateMovie";
import FilterMovies from "./movies/FilterMovies";
import EditMovie from "./movies/EditMovie";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit/:id', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}

];

export default routes;