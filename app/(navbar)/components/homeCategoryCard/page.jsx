import Link from "next/link";
import homeCategoryList from "./homeCategoryList";
import Footer from "../footer/page";

const HomeCategoryCard = () => {
  return (
    <>
      {homeCategoryList.map((product, index) => {
        const { id, title, image, link, linkTitle } = product;
        return (
          <div
            className="card max-w-[700px] h-auto  bg-white p-5 flex flex-col justify-between border-2 border-red-500"
            key={id}
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <img
              src={image}
              alt={title}
              className="md:w-full max-w-[180px] object-contain self-center "
            />
            <Link href={link} className="text-xs text-blue-400 ">
              {linkTitle}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default HomeCategoryCard;
