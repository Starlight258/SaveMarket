import React from 'react';
import styled from "styled-components";
import "../icon.css";
import * as Login from "./Login";
import { BsPeopleFill, BsPerson, BsPersonCircle } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { MdSmartphone, MdOutlineHome } from "react-icons/md";
import { TiSortNumericallyOutline } from "react-icons/ti";

const AccountContainer = styled.div`
    width: 75%;
    height: 650px;
    border: 1px solid #3F3F3F;
    border-radius: 20px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const AccountTop = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`;

const AccountInfoTop = styled(Login.LoginId)`
    width: 650px;
    height: 57px;
`;

const AccountInfo = styled(Login.LoginPw)`
    width: 650px;
    height: 57px;
    border-radius: 0;
`;

const AccountInfoBot = styled(Login.LoginPw)`
    width: 650px;
    height: 57px;
`;

const AccountText = styled(Login.LoginText)`
    font-size: 20px;
`;

const AccountBtn = styled.button`
    padding: 5px 10px 5px 10px;
    margin-top: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 22px;
    color: #fff;
    border-radius: 10px;
    border: none;
    background-color: rgba(36, 176, 255, 1);
`;

function Account() {
    return(
        <div style={{background: '#f9f9f9', height: '100%', display: 'flex'}}>
            <AccountContainer>
                <AccountTop>
                    <BsPeopleFill size='40' color='rgba(36, 176, 255, 1)' />
                    <h1 style={{fontFamily: "'Noto Sans KR', sans-serif", fontSize: 30}}>&nbsp;회원가입</h1>
                </AccountTop>
                <AccountInfoTop>
                    <BsPerson size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="이메일" />
                </AccountInfoTop>
                <AccountInfo>
                    <TiSortNumericallyOutline size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="비밀번호" />
                </AccountInfo>
                <AccountInfo>
                    <AiOutlineLock size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="비밀번호 재입력" />
                </AccountInfo>
                <AccountInfo>
                    <BsPersonCircle size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="이름" />
                </AccountInfo>
                <AccountInfo>
                    <MdSmartphone size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="휴대폰 번호" />
                </AccountInfo>
                <AccountInfoBot>
                    <MdOutlineHome size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="주소" />
                </AccountInfoBot>
                <AccountBtn>회원가입</AccountBtn>
            </AccountContainer>
        </div>
    );
}

export default Account;
