import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import banner from '../img/banner.png';
import Product from "../components/Product";
import { IoLocationSharp, IoSparkles } from "react-icons/io5";
import * as Data from '../Data.jsx';

const Banner = styled.div`
    width: 100wh;
    marginBottom: 50px;
    position: relative;
`;

const BannerTitle = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const BannerSubTitle = styled(BannerTitle)`
    font-size: 25px;
    font-weight: normal;
    top: 240px;
`;

const BannerBtn = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    width: 200px;
    height: 65px;
    border-radius: 30px;
    border: none;
    background: rgba(36, 176, 255, 1);
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translate(-50%, 0%);
    cursor: pointer;
`;

export const ProductTitle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-left: 12%;
    margin-right: 12%;
    border-bottom: 3px solid;
    border-image: linear-gradient(to right, rgba(36, 176, 255, 1) 0%, #fff 100%);
    border-image-slice: 1;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: bold;
`;

export const ProductList = styled.div`
    margin-top: 10px;
    margin-left: 12%;
    margin-right: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
`;

function Main() {
    const productData = Data.GetProducts();

    return(
        <>
            <Banner>
                <img src={banner} style={{width: '100%'}}/>    
                <BannerTitle>주변 사람들과 함께 아껴보세요</BannerTitle>
                <BannerSubTitle>지구를 살리는 힘, 아!끼자</BannerSubTitle>
                <Link to='/create' style={{textDecoration : 'none'}}><BannerBtn>공구하기</BannerBtn></Link>
            </Banner>

            <ProductTitle>
                <IoLocationSharp size='40' color='rgba(36, 176, 255, 1)'/>
                &nbsp;{/*특정 위치*/}에서 공구중인 상품
            </ProductTitle>
            <ProductList>
                {/* 특정 위치 공구 상품 4개 */}
            </ProductList>

            <ProductTitle>
                <IoSparkles size='40' color='rgba(36, 176, 255, 1)'/>
                &nbsp;신규 공구! NEW~
            </ProductTitle>
            <ProductList>
                {productData.map(item => <Product key={item.id} item={item} />)}
            </ProductList>

            <div style={{height: '70px', backgroundColor: '#fff'}}></div>
        </>
    );
}

export default Main;
