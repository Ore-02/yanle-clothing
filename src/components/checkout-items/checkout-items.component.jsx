import './checkout-items.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckOutItems = (props) => {
    const {name, imageUrl, quantity, price} = props.checkoutItem
    const {addItemsToCart, removeItemsFromCart, removeItemsFromCheckout } = useContext(CartContext)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <div className='quantity'>
                    <div className='arrow' onClick={() => removeItemsFromCart(props.checkoutItem)}>
                        &#10094;
                    </div>
                    <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={() => addItemsToCart(props.checkoutItem)}>
                        &#10095;
                    </div>
                </div>
                <span className='price'>${price}</span>
                <div className='remove-button' onClick={() => removeItemsFromCheckout (props.checkoutItem)} >&#10008;</div>
            </div>
            
        </div>
    )
} 

export default CheckOutItems;