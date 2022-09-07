import { Routes, Route, Outlet} from 'react-router-dom'

import { Fragment } from 'react';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home.component";
import SignIn from './routes/sign-in/sign-in.component';
import SignUpForm from './components/sign-up-form/sign-up-form.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './components/checkout/checkout.component';
import GlobalStyle from './routes/global';


const App = () => {
  return (
    <Fragment>
       <Routes>
          <Route path='/' element = {<Navigation />}>
            <Route index={true} element = {<Home />}/>
            <Route path='shop/*' element = {<Shop />}/>
            <Route path='sign-In' element = {<SignIn />}/>
            <Route path='sign-Up' element={<SignUpForm/>}/>
            <Route path='checkout' element={<CheckOut/>}/>
          </Route>
      </Routes>
    </Fragment>
   
  )
}

export default App;
