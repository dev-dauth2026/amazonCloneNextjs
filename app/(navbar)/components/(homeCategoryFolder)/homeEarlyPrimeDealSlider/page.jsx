import ProductSlider from "../productSlider/page"
import ProductList from "../../productList/page"
const HomeEarlyPrimeDealSlider=()=>{

    const SelectedProductList =ProductList.filter((product)=>product.earlyPrimeDeal)
    return(
        <ProductSlider SelectedProductList={SelectedProductList} title="Early Prime Deal"/>
    )
}
export default HomeEarlyPrimeDealSlider;