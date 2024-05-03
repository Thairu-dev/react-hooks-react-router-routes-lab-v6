import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
       <MovieCard />
      </main>
    </>
  );
};

export default Home;
