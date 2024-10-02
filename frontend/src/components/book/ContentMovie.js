import MenuTitle from "../home/MenuTitle";

const ContentMovie = ({ overview }) => {
  return (
    <div className="mt-[100px]">
      <MenuTitle title="Nội Dung Phim" size="small" />

      <p className="mt-4 text-[15px] text-normal">{overview}</p>
    </div>
  );
};

export default ContentMovie;