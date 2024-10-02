import clsx from "clsx";

const MenuTitle = ({title, size}) => {
  return (
    <h1
      className={clsx(
        "border-l-[5px] border-forcus px-3 leading-6 mr-8 text-normal font-bold",
        { "text-[16px]": size === "small" },
        { "text-[22px]": size === undefined }
      )}
    >
      {title}
    </h1>
  );
};

export default MenuTitle;