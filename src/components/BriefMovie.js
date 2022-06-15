import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./BriefMovie.module.css";

function BreifMovie({ id, title, year, coverImg, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p>
          {summary.replaceAll("&#39;", "'").length > 303
            ? `${summary.replaceAll("&#39;", "'").slice(0, 303)}...`
            : summary.replaceAll("&#39;", "'")}
        </p>
        <ul className={styles.movie_genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

BreifMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BreifMovie;
