import MenuTitle from "../home/MenuTitle";
import MovieItemBig from "./MovieItemBig";

const ShowingMovie = ({ data }) => {
  return (
    <div className="mt-8">
      <MenuTitle title="PHIM ĐANG CHIẾU" />

      {data
        ?.filter((movie, index) => index < 3)
        ?.map((item) => (
          <MovieItemBig
            key={item.id}
            backdrop={item.backDrop}
            slug={item.slug}
            name={item.name}
          />
        ))}
    </div>
  );
};

export default ShowingMovie;
