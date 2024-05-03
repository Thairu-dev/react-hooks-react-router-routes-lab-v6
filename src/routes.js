import MovieCard from "./components/MovieCard";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage"
import Movie from "./pages/Movie";


const routes = [
    {
      path: "/",
      element: <Home />
    },
    
    {
      path: "/directors",
      element: <Directors />
    },
    {
      path: "/actors",
      element: <Actors />
    },
    {
      path: "/movie",
      element: <Movie />
    },
    {
      path: "/erropage",
      element: <ErrorPage />
    }


   
  ];

export default routes;