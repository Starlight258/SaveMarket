import React, { useState } from 'react';
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaHourglassStart } from "react-icons/fa";
import "../icon.css";
import productImg from '../img/productImg.png';
import ProgressBar from "@ramonak/react-progress-bar";


export const ProductInfo = styled.div`
    margin-top: 10px;
    margin-left: 12%;
    margin-right: 12%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImg = styled.img`
    width: 250px;
    height: 200px;
    border: 1px solid black;
    border-radius: 40px;
    position: relative;
    z-index: 1;
`;

const ProductProgress = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 200px;
    height: 7px;
    border: 1px solid #fff;
    border-radius: 20px;
    position: absolute;
    z-index: 3;
    margin-top: 180px;
`;

const Value = styled.div`
    background-color: rgba(66, 196, 237, 1);
    height: 100%;
    transition: width 1s;
    border-radius: 20px;
`;

export const ProductName = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
`;

const ProductTime = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    display: flex;
    align-items: center;
`;


function Product({id, image, name, time, percent}) {
    const [like, setLike] = useState(true);
    const likeClick = () => {
        if(like) {
            setLike(false)
        } else {
            setLike(true)
        }
    }
    return(
        <ProductInfo>
            <ProductImg src = {productImg} />
            {like ? (<AiOutlineHeart className='heart' size='50' onClick={likeClick} />)
             : (<AiFillHeart className='heart' size='50' onClick={likeClick} />)}
            <ProgressBar completed={percent} maxCompleted={100} className='progressWrap' labelClassName='progressName'
               bgColor="rgba(66, 196, 237, 1)" baseBgColor="transparent" height="7px" width="200px" />
            <ProductName>{name}</ProductName>
            <ProductTime>
                <FaHourglassStart className='productTime' />
                {time}
            </ProductTime>
        </ProductInfo>
    );
}

export default Product;
