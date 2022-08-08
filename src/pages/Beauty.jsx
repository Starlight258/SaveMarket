import React from 'react';
import * as Main from "./Main";
import * as Category from "../components/Category"
import Product from "../components/Product";
import { IoSparkles } from "react-icons/io5";
import { TbHanger } from "react-icons/tb";

function Beauty() {
    // 신규 상품 4개
    const BeautyNewInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '상품이름1',
            time: '24:00:00',
            percent: '10'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '상품이름2',
            time: '10:04:58',
            percent: '63'
        },
        {
            id: '3',
            image: '상품이미지',
            name: '상품이름3',
            time: '19:48:34',
            percent: '47'
        },
        {
            id: '4',
            image: '상품이미지',
            name: '상품이름4',
            time: '06:00:00',
            percent: '32'
        }
    ]
    // 해당 카테고리 상품
    const BeautyInfo = [
        {
            id: '1',
            image: '상품이미지',
            name: '뷰티1',
            time: '24:00:00',
            percent: '25'
        },
        {
            id: '2',
            image: '상품이미지',
            name: '뷰티2',
            time: '10:04:58',
            percent: '46'
        }
    ]
    return(
        <div>
            <Main.ProductTitle>
                <IoSparkles size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;신규 공구! NEW~
            </Main.ProductTitle>
            <Main.ProductList>
                {BeautyNewInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </Main.ProductList>
            <Category.CategoryTitle>
                <Category.CategoryList>
                    <TbHanger size='40' color='rgba(36, 176, 255, 1)'/>&nbsp;의류⋅잡화⋅뷰티
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
                {BeautyInfo.map(item => <Product name={item.name} time={item.time} percent={item.percent} />)}
            </Main.ProductList>
        </div>
    );
}

export default Beauty;
