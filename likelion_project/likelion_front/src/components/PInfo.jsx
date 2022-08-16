import React from 'react';
import styled from "styled-components";
import "../icon.css";
import productImg from '../img/productImg.png';
import { BsBookmarkDash } from "react-icons/bs";

export const ListInfo = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
`;

export const ListBtn = styled.button`
    height: 130px;
    width: 130px;
    border: 2px solid rgba(36, 176, 255, 1);
    border-radius: 7px;
    background-color: #fff;
    color: rgba(36, 176, 255, 1);
    padding: 15px;
    margin: auto;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: rgba(36, 176, 255, 1);
    }
`;

export const ListImg = styled.img`
    width: 275px;
    height: 220px;
    border: 1px solid black;
    border-radius: 40px;
    margin: auto 15px;
    margin-top: 13px;
`;

export const ListName = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ListContent = styled(ListName)`
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 3px;
`;

function PInfo() {
    return(
        <ListInfo>
            <ListImg src = {productImg} />
            <div style={{marginTop: '17px'}}>
                <ListName>상품이름</ListName>
                <ListContent> 명 참여중 /  % 달성</ListContent>
                <ListContent>공구자: </ListContent>
                <ListContent>수령장소: </ListContent>
                <ListContent>구매페이지: </ListContent>
            </div>
            <ListBtn><BsBookmarkDash size='100'/></ListBtn>
        </ListInfo>
    );
}

export default PInfo;
