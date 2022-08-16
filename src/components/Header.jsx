import React from 'react';
import styled from "styled-components";
import logo from '../img/logo.png';
import "../icon.css";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Top = styled.ul`
    float: right;
    margin-right: 80px;
    margin-top: 15px;
    padding-bottom: 20px;
`;

const TopMenu = styled.li`
    font-size: 12px;
    list-style: none;
    float: left;
    padding-right: 10px;
    padding-left: 10px;
`;

const Main = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 2fr 5fr 2fr;
    margin-bottom: 30px;
    margin-top: 80px;
`;

const Logo = styled.img`
    margin-top: 13px;
    margin-left: 100px;
    width: 250px;
`;

const Search = styled.div`
    width: 700px;
    height: 45px;
    margin-left: 50px;
    margin-top: 15px;
    border: 3px solid #8DD6FF;
    border-radius: 30px;
    display: flex;
`;

const SearchText = styled.input`
    width: 86%;
    height: 100%;
    border: none;
    margin-left: 20px;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 0;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
`;

const My = styled.ul`
    margin-top: 30px;
    float: right;
    position: relative;
`;

const MyBoxMenu = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    text-align: center;
    padding: 5px;
`;


function Header() {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    const onClickLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userAddress');
    }

    return (
        <>
            {token ? (
                <Top>
                    <TopMenu>{userName}님</TopMenu>
                    {/* onClick localStorage token userName 지우는 함수 */}
                    <TopMenu onClick = {onClickLogout}><Link to='/' style={{textDecoration : 'none', color: 'black'}}>로그아웃</Link></TopMenu>
                    <TopMenu>고객센터</TopMenu>
                </Top>)
             : (
                <Top>
                    <TopMenu><Link to='/login' style={{textDecoration : 'none', color: 'black'}}>로그인</Link></TopMenu>
                    <TopMenu><Link to='/account' style={{textDecoration : 'none', color: 'black'}}>회원가입</Link></TopMenu>
                    <TopMenu>고객센터</TopMenu>
                </Top>
             )}

            <Main>
                <Link to='/'><Logo src={logo} /></Link>
                <Search>
                    <SearchText type = "text" />
                    <IoSearch size='48' className='searchIcon' />
                </Search>
                <My>
                    <>
                        <BsPerson size='40' className='myPage' />
                        <span className='myBox'>
                            <Link to='/wishlist' style={{textDecoration : 'none', color: 'black'}}>
                                <MyBoxMenu>위시리스트</MyBoxMenu>
                            </Link>
                            <Link to='/joinlist' style={{textDecoration : 'none', color: 'black'}}>
                                <MyBoxMenu>나의 공구함</MyBoxMenu>
                            </Link>
                        </span>
                    </>
                    <Link to='/alarm'>
                        <AiOutlineBell size='40' className='myAlarm' style={{textDecoration : 'none', color: 'black'}} />
                    </Link>
                </My>
            </Main>
            <NavBar />
        </>
    );
}

export default Header;
