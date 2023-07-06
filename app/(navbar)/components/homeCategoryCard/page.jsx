import Link from "next/link";
import homeCategoryList from "./homeCategoryList";
import Footer from "../footer/page";

const HomeCategoryCard = ({ title, product }) => {
  const { id, name, image, discountedPrice, price, description } = product;
  const discountedAmount = ((discountedPrice / 100) * price).toFixed(2);
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <>
      {/* {homeCategoryList.map((product, index) => {
        const { id, title, image, link, linkTitle, deal, dealType } = product;
        return (
          <div
            className="card  bg-white p-5 flex flex-col justify-between gap-5"
            key={id}
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <img
              src={image}
              alt={title}
              className="md:w-full max-w-[180px] object-contain self-center "
            />
            {deal && (
              <div>
                <span className="bg-red-600 p-2 rounded text-white w-fit text-[11px] font-bold mr-2">
                  {deal}
                </span>
                <small className="text-[11px] text-red-600 font-bold">
                  {" "}
                  {dealType}
                </small>
              </div>
            )}
            <Link href={link} className="text-xs text-blue-400 ">
              {linkTitle}
            </Link>
          </div>
        );
      })} */}

      <div
        className="card  bg-white p-5 flex flex-col justify-between gap-5"
        key={id}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <img
          src={image}
          alt={title}
          className="md:w-full max-w-[180px] object-contain self-center "
        />

        <div>
          <span className="bg-red-600 p-2 rounded text-white w-fit text-[11px] font-bold mr-2">
            {discountedPrice} % off
          </span>
          <small className="text-[11px] text-red-600 font-bold">Top deal</small>
        </div>
        <p>
          ${discountedAmount}
          <small>
            <strike>${price}</strike>
          </small>
        </p>
        <p className="text-[12px]">
          {name}. {truncateDescription(description, 20)}
        </p>

        <Link href="/" className="text-xs text-blue-400 ">
          See all deals
        </Link>
      </div>
    </>
  );
};
export default HomeCategoryCard;
