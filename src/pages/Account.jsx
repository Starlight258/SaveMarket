import React, {useState, useNavigate} from 'react';
import styled from "styled-components";
import "../icon.css";
import * as Login from "./Login";
import { BsPeopleFill, BsPerson, BsPersonCircle } from "react-icons/bs";
import { AiOutlineLock, AiOutlineIdcard } from "react-icons/ai";
import { MdSmartphone, MdOutlineHome } from "react-icons/md";
import { TiSortNumericallyOutline } from "react-icons/ti";
import axios from 'axios';

const AccountContainer = styled.div`
    width: 75%;
    height: 600px;
    border: 1px solid #3F3F3F;
    border-radius: 20px;
    margin: 70px auto;
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
    padding: 2px 7px 2px 7px;
    margin-top: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 22px;
    color: #fff;
    border-radius: 10px;
    border: 3px solid rgba(36, 176, 255, 1);
    background-color: rgba(36, 176, 255, 1);
    cursor: pointer;
`;

function Account() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }

    const inputPassword = (e) => {
        setPassword(e.target.value);
    }

    const inputName = (e) => {
        setName(e.target.value);
    }

    const inputPhone = (e) => {
        setPhone(e.target.value);
    }

    const inputAddress = (e) => {
        setAddress(e.target.value);
    }

    const user = {
        email : email,
        password: password,
        name: name,
        phone: phone,
        address: address
    }

    const onClickAccount = () => {
        axios.post("http://127.0.0.1:8000/api/account/", user)
            .then((res) => {
                alert("성공");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div style={{background: '#f9f9f9', height: '100%', display: 'flex'}}>
            <AccountContainer>
                <AccountTop>
                    <BsPeopleFill size='40' color='rgba(36, 176, 255, 1)' />
                    <h1 style={{fontFamily: "'Noto Sans KR', sans-serif", fontSize: 30}}>&nbsp;회원가입</h1>
                </AccountTop>
                <AccountInfoTop>
                    <BsPerson size='35' className='accountIcon'/>
                    <AccountText type = "email" placeholder="이메일" value={email} onChange={inputEmail} />
                </AccountInfoTop>
                <AccountInfo>
                    <AiOutlineLock size='35' className='accountIcon'/>
                    <AccountText type = "password" placeholder="비밀번호" value={password} onChange={inputPassword} />
                </AccountInfo>
                <AccountInfo>
                    <AiOutlineIdcard size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="이름" value={name} onChange={inputName} />
                </AccountInfo>
                <AccountInfo>
                    <TiSortNumericallyOutline size='35' className='accountIcon'/>
                    <AccountText type = "tel" placeholder="휴대폰 번호" value={phone} onChange={inputPhone} />
                </AccountInfo>
                <AccountInfoBot>
                    <MdOutlineHome size='35' className='accountIcon'/>
                    <AccountText type = "text" placeholder="주소" value={address} onChange={inputAddress} />
                </AccountInfoBot>
                <AccountBtn onClick= {onClickAccount}>회원가입</AccountBtn>
            </AccountContainer>
        </div>
    );
}

export default Account;
