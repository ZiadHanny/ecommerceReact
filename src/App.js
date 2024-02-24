import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import { Fragment } from 'react';
import HomeComponent from './Router/HomeComponent';
import ProductComponent from './Router/ProductComponent';
import ContactComponent from './Router/ContactComponent';
import Cart from './Components/cart/Cart';
import SingelProduct from './Components/SingelProduct/SingelProduct';
import Login from './Components/Login&Sinup/Login';
import Signup from './Components/Login&Sinup/Signup';

function App() {
  return (
    
    <div className='App'>
    <Routes>
      <Route path='/' element = {<HomeComponent/>}/>
      <Route path='/home' element = {<HomeComponent/>}/>
      <Route path='/product' element = {<ProductComponent/>}/>
      <Route path='/Contact' element = {<ContactComponent/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/product/:id' element = {<SingelProduct/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='login/signup' element = {<Signup/>}/>






    </Routes>

    </div>

  );
}

export default App;
