import React from 'react';
import styled from "styled-components";
import * as JoinModal from "./JoinModal";
import { IoHeartCircle } from "react-icons/io5";

const WishModal = (props) => {
    const {open, close} = props;
    return(
        <>
        {open ? (
            <JoinModal.ModalWrap>
                <JoinModal.ModalContainer>
                    <IoHeartCircle size='90' color='rgba(36, 176, 255, 1)'/>
                    <JoinModal.ModalBox>
                        <JoinModal.ModalText style={{color:'rgba(36, 176, 255, 1)', fontWeight:'bold'}}>LIKE!</JoinModal.ModalText>
                        <JoinModal.ModalText>위시리스트에 추가되었습니다</JoinModal.ModalText>
                    </JoinModal.ModalBox>
                    <JoinModal.CloseBtn onClick={close}>CLOSE</JoinModal.CloseBtn>
                </JoinModal.ModalContainer>
            </JoinModal.ModalWrap>
        ) : null}
        </>
    );
}

export default WishModal;