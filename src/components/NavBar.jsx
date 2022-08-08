import React from 'react';
import styled from "styled-components";
import "../icon.css";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlinePlusCircle } from "react-icons/ai";

const Bar = styled.nav`
    width: 100%;
    height: 45px;
    border-top: 1.5px solid #d3d3d3;
    border-bottom: 2px solid #d3d3d3;
    align-items: stretch;
    display: flex;
    grid-template-columns: 1fr 11fr;
`;

const Making = styled.div`
    display: flex;
    align-items: center;
    background: #8DD6FF;
    padding-right: 10px;
    padding-left: 10px;
    float: left;
    margin-right: 20px;
`;

const MakeText = styled.div`
    line-height: 45px;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
`;

const Menu = styled.ul`
    display: inline-block;
    margin: auto;
`;

const Category = styled.li`
    list-style: none;
    float: left;
    line-height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    &:hover{
        color: #24b0ff;
    }
`;

const CategoryLink = styled(Link)`
    text-decoration: none;
    &:link{
        color: black;
    }
    &:hover{
        color: rgba(36, 176, 255, 1);
    }
    &:active{
        font-weight: bold;
        color: rgba(36, 176, 255, 1);
    }
    color: ${(props) => (props.current ? "rgba(36, 176, 255, 1)" : "black")};
    font-weight: ${(props) => (props.current ? "bold" : "normal")};
`;

function NavBar({}) {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <Bar>
                <Menu>
                    <Making>
                        <AiOutlinePlusCircle size='30' color='#fff' className='plus' />
                        <MakeText>공구하기</MakeText>
                    </Making>
                    <Category>
                        <CategoryLink current={pathname === '/beauty'} to='/beauty'>의류⋅잡화⋅뷰티</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/food'} to='/food'>식품</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/stationery'} to='/stationery'>취미⋅문구</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/book'} to='/book'>도서⋅교육⋅음반</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/life'} to='/life'>생활⋅주방용품</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/interior'} to='/interior'>가구⋅인테리어</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/pet'} to='/pet'>반려동물</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/digital'} to='/digital'>디지털 기기</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/sport'} to='/sport'>스포츠⋅레저</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/etc'} to='/etc'>기타</CategoryLink>
                    </Category>
                </Menu>
            </Bar>
        </>
    );
}

export default NavBar;
