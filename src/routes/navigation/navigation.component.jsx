import { Fragment , useContext } from "react";
import { Outlet} from "react-router-dom"

import { ReactComponent as Logo} from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utilitys/firebase/firebase.utilis";
import {CartIcon} from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavContainer,
        LogoContainer,
        NavLinksContainer,
        NavLink} from './navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    
    return (
      <Fragment>
        <NavContainer className="hide-for-mobile">
            <LogoContainer className="logo-container" to='/'>
                <Logo className= 'logo' />
            </LogoContainer>
    
            <NavLinksContainer className='nav-links-container for-desktop'>
                <NavLink className="nav-link" to='/'>
                    HOME
                </NavLink>
                <NavLink className="nav-link " to='/shop'>
                    SHOP
                </NavLink> 
                {
                    currentUser ? (
                       <NavLink as='span' className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>) 
                       : 
                       (  <NavLink className="nav-link" to='/sign-In'>
                       SIGN IN
                   </NavLink>)
                } 
                <span className="link"><CartIcon /> </span>        
            </NavLinksContainer>
            <NavLinksContainer className='nav-links-container for-mobile'>
                

                <NavLink className="nav-link" to='/'>
                    HOME
                </NavLink>
                <NavLink className="nav-link " to='/shop'>
                    SHOP
                </NavLink> 
                {
                    currentUser ? (
                       <NavLink as="span" className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>) 
                       : 
                       (  <NavLink className="nav-link" to='/sign-In'>
                       SIGN-IN
                   </NavLink>)
                } 
                <span className="link"><CartIcon /> </span>        
            </NavLinksContainer>
            {isCartOpen && <CartDropDown />}   
        </NavContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;