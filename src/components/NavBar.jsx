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
    justify-content: space-evenly;
`;

const Making = styled.div`
    display: flex;
    align-items: center;
    background: #8DD6FF;
    padding-right: 10px;
    padding-left: 10px;
    float: left;
    margin-right: 30px;
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
    padding-left: 0;
`;

const Category = styled.li`
    list-style: none;
    float: left;
    line-height: 45px;
    padding-left: 30px;
    padding-right: 30px;
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
                    <Link to='/create' style={{textDecoration : 'none'}}>
                        <Making>
                            <AiOutlinePlusCircle size='30' color='#fff' className='plus' />
                            <MakeText>공구하기</MakeText>
                        </Making>
                    </Link>
                    <Category>
                        <CategoryLink current={pathname === '/beauty' ? 1 : 0} to='/beauty'>의류⋅잡화⋅뷰티</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/food' ? 1 : 0} to='/food'>식품</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/stationery' ? 1 : 0} to='/stationery'>취미⋅문구</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/book' ? 1 : 0} to='/book'>도서⋅교육⋅음반</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/life' ? 1 : 0} to='/life'>생활⋅주방용품</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/interior' ? 1 : 0} to='/interior'>가구⋅인테리어</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/pet' ? 1 : 0} to='/pet'>반려동물</CategoryLink>
                    </Category>
                    <Category>
                        <CategoryLink current={pathname === '/etc' ? 1 : 0} to='/etc'>기타</CategoryLink>
                    </Category>
                </Menu>
            </Bar>
        </>
    );
}

export default NavBar;
