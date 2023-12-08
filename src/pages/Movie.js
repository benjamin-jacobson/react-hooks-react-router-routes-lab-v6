import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { mockComponent } from "react-dom/test-utils";



function Movie() {

const [movieData, setMovieData] = useState(null)
const params = useParams();
const movieIddd = params.id;

  console.log(params);

  useEffect(() => {
    const url = `http://localhost:4000/movies/${movieIddd}`
    fetch(url)
    .then(r => r.json())
    .then(data => setMovieData(data))
    .catch(error => console.log(error))
  }, [movieIddd]);

  
  if (!movieData){
    return <h1>Loading Ben...</h1>;
  };

  function ifMovieData(){
  if (movieData ===null) {
    const movieDataDisplay = <div></div>;
    return movieDataDisplay
  } else {
     const movieDataDisplay = `For ${movieData.id} called ${movieData.title}, these are the genres: ${movieData.genres}`
    return movieDataDisplay
    };}

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>

        {ifMovieData()}
        <h1> Movie Page!</h1>
      </main>
    </>
  );
};

export default Movie;
