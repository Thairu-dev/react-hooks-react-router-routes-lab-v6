import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie]=useState({});
  // const params = useParams();
  // const movieId = params.id
  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then(data => setMovie(data))
  },[])
  console.log(movie);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* <h1>{movie.title}</h1> */}
        {/* <p>{movie.time}</p> */}
        <span></span>
      </main>
    </>
  );
};

export default Movie;
