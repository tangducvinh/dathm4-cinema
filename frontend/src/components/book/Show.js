import MenuTitle from "../home/MenuTitle";
import NavBarDate from "./NavBarDate";


const listCities = [
{
  name: 'Đà Nẵng',
  id: 1,
},
{
  name: 'Hà Nội',
  id: 2,
}
]

const Show = ({ movieId }) => {

  return (
    <div className="mt-8">
      <MenuTitle title="Lịch Chiếu" size="small" />

      <NavBarDate movieId={movieId} listCities={listCities || []} />
    </div>
  );
};

export default Show;