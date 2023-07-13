import ProductSlider from "../productSlider/page"
import ProductList from "../../productList/page"
const HomeFreePrimeDealSlider=()=>{

    const SelectedProductList =ProductList.filter((product)=>product.freePrimeDeal)
    return(
        <ProductSlider SelectedProductList={SelectedProductList} title="Free Prime Deal"/>
    )
}
export default HomeFreePrimeDealSlider;