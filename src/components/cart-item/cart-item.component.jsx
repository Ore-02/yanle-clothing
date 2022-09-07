import './cart-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartItem = (props) => {
    const { name, quantity, imageUrl, price } = props.cartItem;
    const {removeItemsFromCheckout} = useContext(CartContext)
    
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div className='remove-button' onClick={() => removeItemsFromCheckout (props.cartItem)} >&#10008;</div>
        </div>

    )
}

export default CartItem;