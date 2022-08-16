import React from "react";
import * as Main from "./Main";
import * as Category from "../components/Category";
import Product from "../components/Product";
import { IoSparkles } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import * as Data from "../Data.jsx";

function Book() {
  // const BookData = Data.GetBook();
  // const newData = Data.GetNew(BookData);

  return (
    <>
      <Main.ProductTitle>
        <IoSparkles size="40" color="rgba(36, 176, 255, 1)" />
        &nbsp;신규 공구! NEW~
      </Main.ProductTitle>
      <Main.ProductList>
        {/* {newData.map(item => <Product key={item.id} item={item} />)} */}
      </Main.ProductList>

      <Category.CategoryTitle>
        <Category.CategoryList>
          <FaBook size="40" color="rgba(36, 176, 255, 1)" />
          &nbsp;도서⋅교육⋅음반
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
        {/* {BookData.map(item => <Product key={item.id} item={item} />)} */}
      </Main.ProductList>
      <div style={{ height: "70px", backgroundColor: "#fff" }}></div>
    </>
  );
}

export default Book;
