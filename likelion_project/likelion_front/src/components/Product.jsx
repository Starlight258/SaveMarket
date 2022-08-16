import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaHourglassStart } from "react-icons/fa";
import "../icon.css";
import ProgressBar from "@ramonak/react-progress-bar";
import ProductImage from "../img/productImg.png";

export const ProductInfo = styled.div`
  margin-top: 10px;
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 250px;
  height: 200px;
  border: 1px solid black;
  border-radius: 40px;
  position: relative;
  z-index: 1;
  background-color: #d3d3d3;
  object-fit: cover;
`;

export const ProductName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
`;

const ProductTime = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

function Product({ item }) {
  let src = "/" + item.id;

  const [like, setLike] = useState(true);
  const likeClick = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <ProductInfo>
      {/* <Link to={src}> */}
      <ProductImg src={item.product_image} />
      {/* </Link> */}
      {like ? (
        <AiOutlineHeart className="heart" size="50" onClick={likeClick} />
      ) : (
        <AiFillHeart className="heart" size="50" onClick={likeClick} />
      )}
      <ProgressBar
        completed={50}
        maxCompleted={100}
        className="progressWrap"
        labelClassName="progressName"
        bgColor="rgba(66, 196, 237, 1)"
        baseBgColor="transparent"
        height="7px"
        width="200px"
      />
      <Link to={src}>
        <ProductName>{item.name}</ProductName>
      </Link>
      <ProductTime>
        <FaHourglassStart className="productTime" />
        {item.target}명 모집중
      </ProductTime>
    </ProductInfo>
  );
}

export default Product;
