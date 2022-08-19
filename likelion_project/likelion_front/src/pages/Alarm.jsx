import React from "react";
import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai";

export const AlarmTop = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans KR", sans-serif;
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
  flex-direction: column;
`;

const AlarmInfo = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  text-align: center;
  white-space: pre-line;
  margin: auto;
`;

const AlarmInfoDefault = styled(AlarmInfo)`
  font-size: 18px;
  color: #9e9e9e;
`;

const AlarmInfoTitle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: rgba(36, 176, 255, 1);

  text-align: center;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(36, 176, 255, 1);
`;

function Alarm() {
  // 알림 데이터 예시
  const alarmInfoList = [
    {
      id: "0",
      title: "공구 달성에 성공한 경우",
      content:
        "상품명: OOOOO\n 공구 게이지 100% 달성!\n해당 계좌로 입금해주세요\n OO은행 0000000000000",
    },
    {
      id: "1",
      title: "공구 달성에 실패한 경우",
      content:
        "상품명: OOOOOO\n 공구 게이지 60% 달성!\n 해당 공구는 무산되었습니다",
    },
    {
      id: "2",
      title: "공구 참여한 경우",
      content: "상품명: OOOOOO\n 참여가 완료되었습니다!\n",
    },
  ];
  const alarmRender = () => {
    const contents = [];
    const keys = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < alarmInfoList.length; i++) {
      contents.push(
        <AlarmBox key={keys[i]}>
          <AlarmInfoTitle>{alarmInfoList[i].title}</AlarmInfoTitle>
          <AlarmInfo>{alarmInfoList[i].content}</AlarmInfo>
        </AlarmBox>
      );
    }
    for (let i = contents.length; i < 8; i++) {
      contents.push(
        <AlarmBox key={keys[i]}>
          <AlarmInfoDefault>알림이 없습니다</AlarmInfoDefault>
        </AlarmBox>
      );
    }
    return contents;
  };

  return (
    <>
      <AlarmTop>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineBell size="40" color="rgba(36, 176, 255, 1)" />
          &nbsp;알림함
        </div>
        <span style={{ fontSize: "16px", marginTop: "20px" }}>
          알림은 아래의 예시와 같이 표시됩니다
        </span>
      </AlarmTop>
      <AlarmList>{alarmRender()}</AlarmList>
      <div style={{ height: "70px", backgroundColor: "#fff" }}></div>
    </>
  );
}

export default Alarm;
