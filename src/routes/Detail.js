import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedMovie from "./../components/DetailedMovie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <DetailedMovie
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          desc={movie.description_full}
          genres={movie.genres}
          coverImg={movie.medium_cover_image}
          url={movie.url}
        />
      )}
    </div>
  );
}

export default Detail;
