import ProductList from "../../productList/page";
import Link from "next/link";
import PrimeComponents from "../PrimeComponents/page";
import ProductListForEarlyPrimeDeal from "../../productList/page";
const EarlyPrimeDeal = () => {
  const EarlyPrimeDealProducts = ProductListForEarlyPrimeDeal.filter(
    (product) => product.earlyPrimeDeal === true
  );
  console.log(EarlyPrimeDealProducts);
  return (
    <>
      <PrimeComponents
        EarlyPrimeDealProducts={EarlyPrimeDealProducts}
        title="Early Prime Deal "
        linkTitle="Learn More"
      />
    </>
  );
};
export default EarlyPrimeDeal;
