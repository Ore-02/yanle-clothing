import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 25px;
    box-shadow: 0px -5px 15px black;
    padding: 0px 1rem 0px 0px;
    background-color: white;

`

export const  LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`
export const NavLinksContainer = styled.div`
       width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media (max-width: 63.9375em) {
        display: none;
      }

      &.for-mobile {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          @media (min-width:64em) {
            display: none;
          }
     }


`

export const NavLink = styled(Link)`
cursor: pointer;
margin-top: 30px;
margin-right: 20px;
position: relative;
display: inline-block;
font-weight: 700;



&.nav-link:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  
  bottom: -3px;
  left: 0;
  background-color:black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

&.nav-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`

  