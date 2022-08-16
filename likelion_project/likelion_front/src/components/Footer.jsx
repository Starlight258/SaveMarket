import React from 'react';
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import "../icon.css";

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
`;

function Footer() {
    return(
        <>
        <FooterContainer>
            <pre style ={{fontFamily: "'Noto Sans KR', sans-serif", fontSize: '18px', color: '#d3d3d3'}}>    © 2022 SoftPower    |   visit our github!  </pre>
            <a href='https://github.com/Starlight258/SaveMarket' target="_blank" className='githubIcon'>
                <AiFillGithub size='30'/>
            </a>
        </FooterContainer>
        </>
    );
}

export default Footer;
