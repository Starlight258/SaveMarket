import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Beauty from './pages/Beauty';
import Food from './pages/Food';
import Stationery from './pages/Stationery';
import Book from './pages/Book';
import Interior from './pages/Interior';
import Pet from './pages/Pet';
import Digital from './pages/Digital';
import Sport from './pages/Sport';
import Etc from './pages/Etc';
import Life from './pages/Life';
import Category from './components/Category';
import Account from './pages/Account';
import Alarm from './pages/Alarm';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element={<Main />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path = "/account" element={<Account />}></Route>
        <Route path = "/wishlist" element={<Wishlist />}></Route>
        <Route path = "/alarm" element={<Alarm />}></Route>
        <Route path = "/beauty" element={<Beauty />}></Route>
        <Route path = "/food" element={<Food />}></Route>
        <Route path = "/stationery" element={<Stationery />}></Route>
        <Route path = "/book" element={<Book />}></Route>
        <Route path = "/life" element={<Life />}></Route>
        <Route path = "/interior" element={<Interior />}></Route>
        <Route path = "/pet" element={<Pet />}></Route>
        <Route path = "/digital" element={<Digital />}></Route>
        <Route path = "/sport" element={<Sport />}></Route>
        <Route path = "/etc" element={<Etc />}></Route>
      </Routes>
    </div>
  );
}

export default App;
