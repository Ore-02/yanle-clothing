import './product-card.styles.scss'
import Button from '../button/button.component';
import {Cart} from '../cart-icon/cart-icon.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const ProductCard = ({ product }) => {


    const { name, price, imageUrl, id} = product;
    const { addItemsToCart } = useContext(CartContext)
    const addProductToCart = () => addItemsToCart(product)

    return (
        <div key={id} className='product-card-container'>
            <span onClick={addProductToCart}><Cart /></span>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='card-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
        </div>
    )

}

export default ProductCard;