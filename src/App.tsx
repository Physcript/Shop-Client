import React , { useContext,useReducer }from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'

import './App.css';
import cartContext, { CartContextProvider } from "./Context/Cart/cart";
import reducer from "./Context/Cart/reducer";
import {initialAuth} from "./interfaces/auth";

function App() {
    const [ cartState,cartDispatch ] = useReducer(reducer,initialAuth)

    const CartContextValue = {
        cartState,
        cartDispatch
    }

  return (
    <BrowserRouter>
        <CartContextProvider value = { CartContextValue }>
            <Navigation />
            <Routes>
                { routes.map((val) => {
                    return (
                        <Route path = { val.path } element = { <val.element props = { val?.props } /> } />
                    )
                }) }
            </Routes>
        </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
