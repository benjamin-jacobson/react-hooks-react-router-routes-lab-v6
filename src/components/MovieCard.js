import {Link} from 'react-router-dom';
// import { useParams } from "react-router-dom";

function MovieCard({data}) {

  // const params = useParams();
  // const userId = params.id;
  
  return (
    <article>
        <h2>{data.title}</h2>
        <h3>Time: {data.time} minutes</h3>
        <Link to={`/Movie/${data.id}`}> View Movie</Link>
    </article>
  );
};

export default MovieCard;