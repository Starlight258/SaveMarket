import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Account from './pages/Account';
import Alarm from './pages/Alarm';
import Wishlist from './pages/Wishlist';
import Joinlist from './pages/Joinlist';
import ProductDetail from './pages/ProductDetail';
import Create from './pages/Create';
import Footer from './components/Footer';
import Beauty from './pages/Beauty';
import Food from './pages/Food';
import Stationery from './pages/Stationery';
import Book from './pages/Book';
import Life from './pages/Life';
import Interior from './pages/Interior';
import Pet from './pages/Pet';
import Etc from './pages/Etc';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element={<Main />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path = "/account" element={<Account />}></Route>
        <Route path = "/wishlist" element={<Wishlist />}></Route>
        <Route path = "/joinlist" element={<Joinlist />}></Route>
        <Route path = "/alarm" element={<Alarm />}></Route>
        <Route path = "/create" element={<Create />}></Route>

        <Route path = "/beauty" element={<Beauty />}></Route>
          <Route path = "/beauty/:id" element={<ProductDetail/>}></Route>
        <Route path = "/food" element={<Food />}></Route>
          <Route path = "/food/:id" element={<ProductDetail/>}></Route>
        <Route path = "/stationery" element={<Stationery />}></Route>
          <Route path = "/stationery/:id" element={<ProductDetail/>}></Route>
        <Route path = "/book" element={<Book />}></Route>
          <Route path = "/book/:id" element={<ProductDetail/>}></Route>
        <Route path = "/life" element={<Life />}></Route>
          <Route path = "/life/:id" element={<ProductDetail/>}></Route>
        <Route path = "/interior" element={<Interior />}></Route>
          <Route path = "/interior/:id" element={<ProductDetail/>}></Route>
        <Route path = "/pet" element={<Pet />}></Route>
          <Route path = "/pet/:id" element={<ProductDetail/>}></Route>
        <Route path = "/etc" element={<Etc />}></Route>
          <Route path = "/etc/:id" element={<ProductDetail/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
