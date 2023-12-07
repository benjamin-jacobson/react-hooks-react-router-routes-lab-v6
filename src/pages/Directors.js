import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
const [directorData, setDirectorData] = useState(null)

  useEffect(() => {
    const urlDirector = `http://localhost:4000/directors`
    fetch(urlDirector)
    .then(r => r.json())
    .then(data => setDirectorData(data))
    .catch(error => console.log(error))
  }, [])

if (!directorData){
  return <h1>No director data yet</h1>
};

const newData = directorData.map((d) => {
  const myArray = d.movies
  return (
    <div>
      <h2>{d.name}</h2>
      <ul>
      {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

);


  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        {newData}
      </main>
    </>
  );
};

export default Directors;