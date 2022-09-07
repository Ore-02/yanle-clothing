import { useContext, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import Footer from "../footer/footer";

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState()
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>
            <div>
            <h2 className="cat-title">{category}</h2>
            {products && <h3 className="products-length">{`${products.length} products`}</h3>}
            <div className='cat-con'>
            {products &&
                products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product}/>)}
                )
                
            }
            </div>
            <br></br>
            </div>
            <Footer/>
        </Fragment>
        
    )

}

export default Category;