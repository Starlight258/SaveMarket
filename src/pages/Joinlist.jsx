import React, {useState} from 'react';
import styled from "styled-components";
import * as Alarm from './Alarm';
import PInfo from './../components/PInfo';
import CInfo from '../components/CInfo';
import { BsPerson } from "react-icons/bs";

const Lists = styled.div`
    display: flex;
    justify-content: center;
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 10px 10px 0 0;
    border-bottom: none;
`;

const PList = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    height: 55px;
    width: 50%;
    border: none;
    background-color: transparent;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    border-bottom: 3px solid rgba(36, 176, 255, 1);
    &:hover{
        font-weight: bold;
    }
    &:active{
        font-weight: bold;
        border: none;
    }
    &:focus{
        font-weight: bold;
        border: none;
    }
`;

const CList = styled(PList)`

`;

const ListDivide = styled.div`
    width: 3px;
    height: 55px;
    background-color: rgba(36, 176, 255, 1);
`;

const ListBox = styled.div`
    height: 250px;
    border: 3px solid rgba(36, 176, 255, 1);
    border-top: none;
`;

const ListDefault = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    color: #9E9E9E;
    line-height: 250px;
    text-align: center;
`;

function Joinlist() {
    const [ListState, setListState] = useState(0);

    const JoinLists = {
        0: <>
            <ListBox><PInfo /></ListBox>
            <ListBox><ListDefault>공구함이 비어있습니다</ListDefault></ListBox>
            <ListBox><ListDefault>공구함이 비어있습니다</ListDefault></ListBox>
            <ListBox><ListDefault>공구함이 비어있습니다</ListDefault></ListBox>
            <ListBox><ListDefault>공구함이 비어있습니다</ListDefault></ListBox>
        </>,
        1: <>
            <ListBox><CInfo /></ListBox>
            <ListBox><ListDefault>완료된 공구가 없습니다</ListDefault></ListBox>
            <ListBox><ListDefault>완료된 공구가 없습니다</ListDefault></ListBox>
            <ListBox><ListDefault>완료된 공구가 없습니다</ListDefault></ListBox>
            <ListBox><ListDefault>완료된 공구가 없습니다</ListDefault></ListBox>
        </>
    }

    const PListRender = () => {
        setListState(0);
    }
    const CListRender = () => {
        setListState(1);
    }

    return(
        <>
        <Alarm.AlarmTop>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <BsPerson size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;마이페이지
            </div>
            <span style={{fontSize: '16px', marginTop: '20px'}}>공구는 한 번에 최대 5개까지 가능합니다</span>
        </Alarm.AlarmTop>
        <div style={{width: '75%', margin: 'auto', marginTop: '10px', marginBottom: '70px'}}>
            <Lists>
                <PList onClick={PListRender}>참여중인 공구</PList>
                <ListDivide/>
                <CList onClick={CListRender}>완료된 공구</CList>
            </Lists>
            {JoinLists[ListState]}
        </div>
        <div style={{height: '70px', backgroundColor: '#fff'}}></div>
        </>
    );
}

export default Joinlist;
