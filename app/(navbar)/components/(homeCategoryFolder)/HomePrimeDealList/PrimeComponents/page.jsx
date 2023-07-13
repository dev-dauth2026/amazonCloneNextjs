import Link from "next/link";
import PrimeProductCard from "../primeProductCard/page";
const PrimeComponents = ({
  title,
  linkTitle,
  EarlyPrimeDealProducts,
  FreePrimeDealProducts,
}) => {
  return (
    <>
      <div className="card  bg-white p-5 flex flex-col justify-between  gap-2 order-last">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-row flex-wrap justify-center  gap-2">
          {/* Product card starts  */}
          {EarlyPrimeDealProducts ? (
            <>
              {EarlyPrimeDealProducts.map((earlyPrimeItem, index) => {
                const { id, name, image, discountedPrice } = earlyPrimeItem;

                return (
                  <>{index < 4 && <PrimeProductCard {...earlyPrimeItem} />}</>
                );
              })}
            </>
          ) : FreePrimeDealProducts ? ( //Early Prime Deal Product starts
            <>
              {FreePrimeDealProducts.map((freeItem, index) => {
                const { id, name, image, discountedPrice } = freeItem;
                return <>{index < 4 && <PrimeProductCard {...freeItem} />}</>;
              })}
            </> // Early Prime Deal Product starts
          ) : null}
        </div>
        {/* Product card ends  */}
        <Link href="/" className="text-xs text-blue-400 ">
          {linkTitle}
        </Link>
      </div>
    </>
  );
};
export default PrimeComponents;
