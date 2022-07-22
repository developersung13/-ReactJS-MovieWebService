import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./DetailedMovie.module.css";

function DetailedMovie({ title, year, rating, desc, genres, coverImg, url }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie`}>
        <i className="fa-solid fa-chevron-left" id={styles.prevPageBtn}></i>
      </Link>
      <h2 className={styles.movie_title}>{title}</h2>
      <h3 className={styles.movie_year}>{year}</h3>
      <img className={styles.movie_img} src={coverImg} alt={title} />
      <h3>Rating: {rating} ⭐️</h3>
      <ul className={styles.movie_genres}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p className={styles.movie_desc}>{desc.replaceAll("&#39;", "'")}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.movie_moreInfo}
      >
        More
      </a>
    </div>
  );
}

DetailedMovie.prototypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DetailedMovie;
