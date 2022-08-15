import React from 'react';
import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai";

export const AlarmTop = styled.div`
    width: 75%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
`;

const AlarmList = styled.div`
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
`;

const AlarmBox = styled.div`
    width: 250px;
    height: 230px;
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 20px;
    margin-bottom: 35px;
    display: flex;
    justify-contnet: center;
`;

const AlarmInfo = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    text-align: center;
    white-space: pre-line;
    margin: auto;
`;

const AlarmInfoDefault = styled(AlarmInfo)`
    font-size: 18px;
    color: #9E9E9E;
`;

function Alarm() {
    // 알림 데이터 테스트
    const alarmInfoList = [
        {
            id: '1',
            content: '상품명: OOOOO\n 공구 게이지 100% 달성!\n해당 계좌로 입금해주세요\n OO은행 0000000000000'
        },
        {
            id: '2',
            content: '상품명: OOOOOO\n 공구 게이지 60% 달성!\n 해당 공구는 무산되었습니다'
        },
        {
            id: '3',
            content: '상품명: OOOOOO\n 공구 참여가 완료 되었습니다!\n'
        },

    ]
    const alarmRender = () => {
        const contents = [];
        for(let i = 0; i < alarmInfoList.length; i++) {
            contents.push(<AlarmBox><AlarmInfo>{alarmInfoList[i].content}</AlarmInfo></AlarmBox>);
        }
        for(let i = contents.length; i < 8; i++) {
            contents.push(<AlarmBox><AlarmInfoDefault>알림이 없습니다</AlarmInfoDefault></AlarmBox>);
        }
        return contents;
    };

    return (
        <>
        <AlarmTop>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <AiOutlineBell size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;알림함
            </div>
            <span style={{fontSize: '16px', marginTop: '20px'}}>
                알림은 최대 8개까지 표시됩니다</span>
        </AlarmTop>
        <AlarmList>
            {alarmRender()}
        </AlarmList>
        <div style={{height: '70px', backgroundColor: '#fff'}}></div>
        </>
    );
}

export default Alarm;
