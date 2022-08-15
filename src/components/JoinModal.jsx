import React from 'react';
import styled from "styled-components";
import { BsCartCheckFill } from "react-icons/bs";

export const ModalWrap = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    display: grid;
    place-content: center;
`;

export const ModalContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalBox = styled.div`
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 5px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 10px 30px 15px 30px;
    background-color: #fff;
`;

export const ModalText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
`;

export const CloseBtn = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 22px;
    background-color: rgba(36, 176, 255, 1);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 3px 5px 3px 5px;
    cursor: pointer;
`;

const JoinModal = (props) => {
    const {open, close} = props;
    return(
        <>
        {open ? (
            <ModalWrap>
                <ModalContainer>
                    <BsCartCheckFill size='90' color='rgba(36, 176, 255, 1)'/>
                    <ModalBox>
                        <ModalText style={{color:'rgba(36, 176, 255, 1)', fontWeight:'bold'}}>JOIN!</ModalText>
                        <ModalText>공구에 참여하였습니다</ModalText>
                    </ModalBox>
                    <CloseBtn onClick={close}>CLOSE</CloseBtn>
                </ModalContainer>
            </ModalWrap>
        ) : null}
        </>
    );
}

export default JoinModal;
