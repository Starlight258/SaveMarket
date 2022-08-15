import React, {useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import Product from "../components/Product";
import * as Main from "./Main";
import JoinModal from "../components/JoinModal";
import WishModal from "../components/WishModal";
import { HiCursorClick } from "react-icons/hi";

export const DetailInfo = styled.div`
    width: 75%;
    height: 500px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 15px;
    display: flex;
`;

const DetailImg = styled.img`
    width: 50%;
    background-color: #d3d3d3;
    object-fit: cover;
    margin-right: 5%;
    border-radius: 5px;
`;

export const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

const DetailName = styled.h1`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 33px;
    line-height: 20%;
    margin-top: 10px;
`;

export const DetailBox = styled.div`
    height: 100%;
    width: 100%;
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 5px;
    box-sizing: border-box;
    word-break: break-all;
`;

const DetailText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 27px;
    margin: 20px 15px 20px 15px;
`;

const AddProductBtn = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 27px;
    font-weight: bold;
    background-color: rgba(36, 176, 255, 1);
    color: #fff;
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 20px;
    cursor: pointer;
    &:disabled{
        opacity: 0.5;
    }
`;

const AddWishListBtn = styled(AddProductBtn)`
    background-color: #fff;
    color: rgba(36, 176, 255, 1);
`;

export const AddProductText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 22px;
    font-weight: bold;
`;

function ProductDetail(props) {
    let {id} = useParams();
    let findProduct = props.data.find(function(item){
        return item.id = id;
    });

    const [Jmodal, setJModal] = useState(false);
    const openJModal =() => {
        setJModal(true);
    }
    const closeJModal =() => {
        setJModal(false);
    }

    const [Wmodal, setWModal] = useState(false);
    const openWModal =() => {
        setWModal(true);
    }
    const closeWModal =() => {
        setWModal(false);
    }

    return(
        <>
        <DetailInfo>
            <DetailImg src={findProduct.product_image} />

            <DetailContent>
                <DetailName>{findProduct.name}</DetailName>
                <DetailBox>
                    <DetailText>진행률: {findProduct.percent}% 달성</DetailText>
                    <DetailText>목표 인원: {findProduct.target}명</DetailText>
                    <DetailText>상품 금액: {findProduct.price}원</DetailText>
                    <DetailText>수령 장소: {findProduct.place}</DetailText>
                    <DetailText style={{display: 'flex', alignItems: 'center'}}>구매페이지로 이동하기&nbsp;&nbsp;
                        <a href={findProduct.buy_link} title='더 자세한 내용이 보고싶다면?' target="_blank">
                            <HiCursorClick size='40' color='rgba(36, 176, 255, 1)'/>
                        </a>
                    </DetailText>
                    <DetailText>하고 싶은 말: {findProduct.description}</DetailText>
                </DetailBox>
            </DetailContent>

        </DetailInfo>

        <div style={{width: '75%', margin: 'auto', marginBottom: '50px', display:'flex',  justifyContent: 'flex-end'}}>
            <AddWishListBtn onClick={openWModal}>위시리스트</AddWishListBtn>
            <WishModal open={Wmodal} close={closeWModal} />
            <AddProductBtn onClick={openJModal}>공구 참여</AddProductBtn>
            <JoinModal open={Jmodal} close={closeJModal} />
        </div>

        <div style={{width: '73%', margin: 'auto', marginTop: '10px'}}>
            <AddProductText>위 상품과 동일한 장소에서 공구중인 상품</AddProductText>
        </div>
        <Main.ProductList style={{marginTop: '0px'}}>
            {/* 동일한 장소 상품 4개 */}
        </Main.ProductList>

        <div style={{width: '73%', margin: 'auto', marginTop: '10px'}}>
            <AddProductText>이런 상품은 어떠세요?</AddProductText>
        </div>
        <Main.ProductList style={{marginTop: '0px'}}>
            {/* 동일한 카테고리 상품 4개 */}
        </Main.ProductList>
        </>
    );
}

export default ProductDetail;
