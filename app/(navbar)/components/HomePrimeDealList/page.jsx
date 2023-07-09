import Link from "next/link";
import ProductList from "../productList/page";
const HomePrimeDealList = ({ title }) => {
  return (
    <div className="card  bg-white p-5 flex flex-col  gap-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-row flex-wrap justify-evenly  gap-2">
        {ProductList.map((item, index) => {
          // const { id, title, image, discountedPrice, primeDeal } = item;

          return (
            item.primeDeal && (
              <div className="flex flex-col max-w-[120px]" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover  h-auto"
                />
                <p className="text-[10px]">
                  {item.name} {item.discountedPrice} %
                </p>
              </div>
            )
          );
        })}
      </div>

      <Link href="/" className="text-xs text-blue-400 ">
        See all deals
      </Link>
    </div>
  );
};
export default HomePrimeDealList;
