import PropTypes from "prop-types";

function DetailedMovie({ title, year, rating, desc, genres, coverImg }) {
  return (
    <div>
      <h2>
        {title}({year})
      </h2>
      <img src={coverImg} alt={title} />
      <h3>Rating: {rating}</h3>
      <p>{desc.replaceAll("&#39;", "'")}</p>
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
};

export default DetailedMovie;
