import React from 'react';
import styled from "styled-components";

export const CategoryTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-left: 12%;
    margin-right: 12%;
    border-top: 3px solid #9e9e9e;
    font-weight: bold;
    padding-top: 3px;
`;

export const CategoryList = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 26px;
    display: flex;
    align-items: center;
`;


export const SelectSort = styled.ul`
    float: left;
    text-align: right;
    margin-top: 0;
    margin-bottom: 0;
`;

export const Sort = styled.li`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    list-style: none;
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
`;
