import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])


  useEffect(() =>{
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      // .then(data => console.log(data))
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const movieArray = movies.map((x) => {
    return (
      <MovieCard data={x} />
    )
  }
  )

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        
        <h1>Home Page</h1>
        <p> I am bens test home page. Heres some movies:</p>
        {movieArray}
      </main>
    </>
  );
};

export default Home;
