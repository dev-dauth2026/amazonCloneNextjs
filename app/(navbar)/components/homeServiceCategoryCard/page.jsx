import Link from "next/link";
const HomeServiceCategoryCard = ({ title, image, linkTitle }) => {
  return (
    <>
      <div className="card w-full bg-white p-5 flex flex-col justify-between gap-2">
        <h3 className="text-xl font-bold ">{title}</h3>

        <img
          src={image}
          alt={title}
          className="w-full object-cover self-center "
        />

        <Link href="/" className="text-xs text-blue-400 ">
          {linkTitle}
        </Link>
      </div>
    </>
  );
};
export default HomeServiceCategoryCard;
