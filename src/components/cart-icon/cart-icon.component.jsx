import { useContext } from 'react'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import './cart-icon.styles.scss'


export const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount, fadeProp, setFadeProp } = useContext(CartContext)

    const fadeOut = () => {
        if (fadeProp.fade === "fade-in") {
            setFadeProp({fade:"fade-out"})
        } else {
            setFadeProp({fade:"fade-in"})
        }    
}


    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
        fadeOut()};
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingCartIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount} </span>
        </div>
    )
}

export const Cart= () => {
    return (
        <div className='cart-container'>
            <ShoppingCartIcon className='cart-icon'/>
        </div>
    )
}

