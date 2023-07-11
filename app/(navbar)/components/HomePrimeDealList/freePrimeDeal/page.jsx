import PrimeComponents from "../PrimeComponents/page";
import ProductListForPrimeDeal from "../../productList/page";
const FreePrimeDeal = () => {
  const FreePrimeDealProducts = ProductListForPrimeDeal.filter(
    (product) => product.freePrimeDeal === true
  );
  console.log("Free Prime Deal Products list");
  console.log(FreePrimeDealProducts.length);
  return (
    <>
      <PrimeComponents
        title="Free Prime Deal for 30 Days"
        linkTitle="Prime renews at $9.99/month. Learn more."
        FreePrimeDealProducts={FreePrimeDealProducts}
      />
    </>
  );
};
export default FreePrimeDeal;
