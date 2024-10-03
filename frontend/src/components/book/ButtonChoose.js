import { Link } from "react-router-dom";

const ButtonChoose = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="px-3 py-1 hover:border-main text-[14px] border-2 transition-all rounded-lg border-gray-300"
    >
      {title}
    </Link>
  );
};

export default ButtonChoose;
