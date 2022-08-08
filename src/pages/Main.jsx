import React from 'react';
import styled from "styled-components";
import banner from '../img/banner.png';
import Product from "../components/Product";
import { IoLocationSharp, IoSparkles } from "react-icons/io5";

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
    // 특정위치 공구 상품 4개
    const MainLocationInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '상품이름1',
            time: '24:00:00',
            percent: '90'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '상품이름2',
            time: '10:04:58',
            percent: '70'
        },
        {
            id: '3',
            image: '상품이미지',
            name: '상품이름3',
            time: '19:48:34',
            percent: '40'
        },
        {
            id: '4',
            image: '상품이미지',
            name: '상품이름4',
            time: '06:00:00',
            percent: '10'
        }
    ]
    // 신규 공구 상품
    const MainNewInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '상품이름1',
            time: '24:00:00',
            percent: '100'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '상품이름2',
            time: '10:04:58',
            percent: '50'
        },
        {
            id: '3',
            image: '상품이미지',
            name: '상품이름3',
            time: '19:48:34',
            percent: '80'
        },
        {
            id: '4',
            image: '상품이미지',
            name: '상품이름4',
            time: '06:00:00',
            percent: '20'
        },
        {
            id: '5',
            image: '상품이미지',
            name: '상품이름5',
            time: '22:40:28',
            percent: '90'
        },
        {
            id: '6',
            image: '상품이미지',
            name: '상품이름6',
            time: '10:40:00',
            percent: '30'
        }
    ]
    return(
        <>
            <Banner>
                <img src={banner} style={{width: '100%'}}/>
                
                <BannerTitle>주변 사람들과 함께 아껴보세요</BannerTitle>
                <BannerSubTitle>지구를 살리는 힘, 아!끼자</BannerSubTitle>
                <BannerBtn>공구하기</BannerBtn>
                
            </Banner>

            <ProductTitle>
                <IoLocationSharp size='40' color='rgba(36, 176, 255, 1)'/>
                &nbsp;{/*나중에 주소 변수 추가하기!*/}에서 공구중인 상품
            </ProductTitle>
            <ProductList>
                {MainLocationInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </ProductList>
            <ProductTitle>
                <IoSparkles size='40' color='rgba(36, 176, 255, 1)'/>
                &nbsp;신규 공구! NEW~
            </ProductTitle>
            <ProductList>
                {MainNewInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </ProductList>
        </>
    );
}

export default Main;
