
import MovieItem from "./MovieItem";

const MovieContainer = ({data}) => {

  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((item, index) => (
        <MovieItem
          key={item.id}
          name={item.name}
          poster={item.poster}
          keyVideo={item.video}
          slug={item.slug}
        ></MovieItem>
      ))}
    </div>
  );
};

export default MovieContainer;