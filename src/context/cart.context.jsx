import { createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, productsToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productsToAdd.id
    );
    // if found, increment quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) =>(
           
            cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem))
            }
    

    // return new array wit modified cartItem/ new cart item
    
    return [...cartItems, {...productsToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemsToRemove) => {
    //find the card item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemsToRemove.id
    );
    // check if quantity is equal to 1, if it is remove that item from the cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
    }
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>(
           
        cartItem.id === cartItemsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem))
    
}

const removeCheckoutItem = (cartItems, checkoutItemsToRemove) => {
    //filter out all the cartItem that the id is not equal to the item i want to remove
   return cartItems.filter(cartItem => cartItem.id !== checkoutItemsToRemove.id)
}


export const CartContext = createContext({
    isCartOpen: false,
    fadeProp: {fade: "fade-out"},
    setFadeProp: () => {},
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
    totalPrice: 0,
    removeItemsFromCart: () => {},
    removeCheckoutItem: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
    const [fadeProp, setFadeProp] = useState({
        fade: "fade-out"
    })
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount)

        const newTotalPrice = cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price),0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])

    

   const addItemsToCart = (productsToAdd) => {
        setCartItems(addCartItem(cartItems, productsToAdd))

   }

   const removeItemsFromCart = (cartItemsToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemsToRemove))

}

const removeItemsFromCheckout = (productsToRemove) => {
    setCartItems(removeCheckoutItem(cartItems, productsToRemove))

}

   
   
    const value = { 
        isCartOpen, setIsCartOpen,
        fadeProp, setFadeProp, 
        addItemsToCart, cartItems,
        cartCount, totalPrice,
        removeItemsFromCart,
        removeItemsFromCheckout};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
