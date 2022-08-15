import React from 'react';
import * as JoinModal from "./JoinModal";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CreateModal = (props) => {
    const {open, close} = props;
    return(
        <>
        {open ? (
            <JoinModal.ModalWrap>
                <JoinModal.ModalContainer>
                    <BsFillCheckCircleFill size='90' color='rgba(36, 176, 255, 1)'/>
                    <JoinModal.ModalBox>
                        <JoinModal.ModalText style={{color:'rgba(36, 176, 255, 1)', fontWeight:'bold'}}>COMPLETE!</JoinModal.ModalText>
                        <JoinModal.ModalText>공구 생성 완료되었습니다</JoinModal.ModalText>
                    </JoinModal.ModalBox>
                    <JoinModal.CloseBtn onClick={close}>CLOSE</JoinModal.CloseBtn>
                </JoinModal.ModalContainer>
            </JoinModal.ModalWrap>
        ) : null}
        </>
    );
}

export default CreateModal;
