import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss'

const CategoryPreview =({title, products}) => {
    return (
        <div className='category-preview-container'>
            <h2 >{title.toUpperCase()}</h2>
            <div className='preview'>
            {
               products.filter((_, idx) => idx < 4)
               .map((product) => 
               <ProductCard key ={product.id} product={product}/>)
            }
            </div>
            <div className='preview for-mobile'>
            {
               products.filter((_, idx) => idx < 2)
               .map((product) => 
               <ProductCard key ={product.id} product={product}/>)
            }
            </div>
            
            <Link  to={title}><div className='more'>See More...</div></Link>
        </div>
   
    )
}

export default CategoryPreview;