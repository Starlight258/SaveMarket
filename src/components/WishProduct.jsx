import React from 'react';
import styled from "styled-components";
import * as Product from '../components/Product';
import productImg from '../img/productImg.png';
import "../icon.css";

function WishProduct(name) {
    return(
        <>
        <Product.ProductInfo>
            <Product.ProductImg src = {productImg} />
            <Product.ProductName>상품이름</Product.ProductName>
        </Product.ProductInfo></>
    );
}

export default WishProduct;
