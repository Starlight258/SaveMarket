import React from 'react';
import * as Main from "./Main";
import * as Category from "../components/Category"
import Product from "../components/Product";
import { IoSparkles } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

function Book() {
    // 신규 상품 4개
    const BookNewInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '상품이름1',
            time: '24:00:00',
            percent: '30'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '상품이름2',
            time: '10:04:58',
            percent: '75'
        },
        {
            id: '3',
            image: '상품이미지',
            name: '상품이름3',
            time: '19:48:34',
            percent: '5'
        },
        {
            id: '4',
            image: '상품이미지',
            name: '상품이름4',
            time: '06:00:00',
            percent: '99'
        }
    ]
    // 해당 카테고리 상품
    const BookInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '도서1',
            time: '24:00:00',
            percent: '45'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '도서2',
            time: '10:04:58',
            percent: '85'
        }
        ,
        {
            id: '3',
            image: '상품이미지',
            name: '도서3',
            time: '04:23:51',
            percent: '55'
        }
    ]
    return(
        <div>
            <Main.ProductTitle>
                <IoSparkles size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;신규 공구! NEW~
            </Main.ProductTitle>
            <Main.ProductList>
                {BookNewInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </Main.ProductList>

            <Category.CategoryTitle>
                <Category.CategoryList>
                    <FaBook size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;도서⋅교육⋅음반
                </Category.CategoryList>
                <Category.SelectSort>
                    <Category.Sort>인원수 높은순</Category.Sort>
                    <Category.Sort>퍼센트 높은순</Category.Sort>
                    <Category.Sort>인원수 낮은순</Category.Sort>
                    <Category.Sort>퍼센트 낮은순</Category.Sort>
                    <Category.Sort>최신순</Category.Sort>
                </Category.SelectSort>
            </Category.CategoryTitle>
            <Main.ProductList>
                {BookInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </Main.ProductList>
        </div>
    );
}

export default Book;
