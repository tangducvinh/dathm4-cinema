import clsx from "clsx";

const ItemTime = ({ title, slug, onClick, checked }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "text-[16px] hover:bg-forcus hover:text-white transition-all rounded-sm hover:cursor-pointer text-overlay py-2 px-8 border-[1px] border-gray-200",
        { "bg-forcus text-white": checked }
      )}
    >
      {title}
    </div>
  );
};

export default ItemTime;