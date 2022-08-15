import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import * as Alarm from './Alarm';
import * as Main from './Main';
import "../icon.css";
import Product from "../components/Product";


function Wishlist() {
    // 위시리스트 데이터
    const wishListInfo = [];

    return (
        <>
        <Alarm.AlarmTop>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <AiOutlineHeart size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;위시리스트
            </div>
            <span style={{fontSize: '16px', marginTop: '20px'}}>위시리스트는 최대 20개까지 저장됩니다</span>
        </Alarm.AlarmTop>
        {wishListInfo.length > 0 
         ? <Main.ProductList>{wishListInfo.map(item => <Product key={item.id} props={item} />)}</Main.ProductList>
         : <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '170px auto'}} >
                <FaRegSmileWink size = '150' color = 'rgba(36, 176, 255, 1)'/>
                <h1 style = {{textAlign: 'center', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '35px'}}>
                    이런! 위시리스트가 비어있군요<br/>한 번 채워보는건 어떤가요?</h1>
            </div>
        }
        <div style={{height: '70px', backgroundColor: '#fff'}}></div>
        </>
    );
}

export default Wishlist;
