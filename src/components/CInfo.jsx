import React from 'react';
import styled from "styled-components";
import "../icon.css";
import productImg from '../img/productImg.png';
import { BsBookmarkCheck } from "react-icons/bs";
import * as PInfo from './PInfo';

const CListImg = styled(PInfo.ListImg)`
    opacity: 0.5;
`;

const CListName = styled(PInfo.ListName)`
    color: #9e9e9e;
`;

const CListContent = styled(PInfo.ListContent)`
    color: #9e9e9e;
`;

function CInfo() {
    return(
        <PInfo.ListInfo>
            <CListImg src = {productImg} />
            <div style={{marginTop: '17px'}}>
                <CListName>상품이름</CListName>
                <CListContent> 명 참여중 /  % 달성</CListContent>
                <CListContent>공구자: </CListContent>
                <CListContent>수령장소: </CListContent>
                <CListContent>구매페이지: </CListContent>
            </div>
            <PInfo.ListBtn><BsBookmarkCheck size='100' className='listChatIcon'/></PInfo.ListBtn>
        </PInfo.ListInfo>
    );
}

export default CInfo;
