import React from 'react';
import Todo from './component/Todo/Todo';
import CounterBtn from './component/CounterBtn';
import NavBar from './Shopping/NavBar';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Shopping/ProductList';
import ViewShoppingCart from './Shopping/ViewShoppingCart';

const App = () => {
  return (
    <div>
      {/* <Todo/> */}
{/* <CounterBtn/> */}

<NavBar/>
<Routes>
  <Route path='/' element={<ProductList/>}/>
  <Route path='/view-cart' element={<ViewShoppingCart/>}/>
</Routes>
    </div>
  )
}

export default App