import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Select from 'react-select';
import { TbHanger } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { FaPenAlt, FaBook} from "react-icons/fa";
import { GiCookingGlove} from "react-icons/gi";
import { MdChair, MdPets } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import * as ProductDetail from './ProductDetail';
import Product from "../components/Product";
import * as Main from "./Main";
import CreateModal from "../components/CreateModal";
import "../icon.css";
import DefaultImg from "../img/defaultImg.png";
import * as Data from '../Data.jsx';

const StyleSelect = styled(Select)`
    height: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 18px;
`;

const CreateInfo = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

const CreateText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: bold;
    display: block;
    margin-right: 15px;
`;

const CreateInput = styled.input`
    border: 1px solid #9e9e9e;
    height: 35px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    flex-grow: 1;
`;

const CreateButton = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    border: 3px solid rgba(36, 176, 255, 1);
    border-radius: 5px;
    background-color: rgba(36, 176, 255, 1);
    color: white;
    padding: 0px 5px 0px 5px;
    font-weight: bold;
    cursor: pointer;
`;

const StopButton = styled(CreateButton)`
    color: rgba(36, 176, 255, 1);
    background-color: white;
    margin-right: 10px;
`;

const UploadInput = styled.input`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    margin-top: 5px;
    color: #3F3F3F;
    &::file-selector-button{
        cursor: pointer;
        border: 1px solid #3F3F3F;
        border-radius: 5px;
        background-color: #f9f9f9;
        color: #3F3F3F;
        padding: 2px 3px 2px 3px;
        margin-right: 10px;
        &:hover{
            background-color: #3F3F3F;
            color: #f9f9f9;
        }
    }
`;

const CreateImg = styled.img`
    height: 84%;
    width: 100%;
    background-color: #d3d3d3;
    border-radius: 5px;
    object-fit: cover;
`;

function Create() {
    const options=[
        {
            value:"의류·잡화·뷰티",
            label: (
                <div>
                    <TbHanger color='rgba(36, 176, 255, 1)' /> 의류·잡화·뷰티
                </div>
            )
        },
        {
            value:"식품",
            label: (
                <div>
                    <ImSpoonKnife color='rgba(36, 176, 255, 1)' /> 식품
                </div>
            )
        },
        {
            value:"취미·문구",
            label: (
                <div>
                    <FaPenAlt color='rgba(36, 176, 255, 1)' /> 취미·문구
                </div>
            )
        },
        {
            value:"도서·교육·음반",
            label: (
                <div>
                    <FaBook color='rgba(36, 176, 255, 1)' /> 도서·교육·음반
                </div>
            )
        },
        {
            value:"생활·주방 용품",
            label: (
                <div>
                    <GiCookingGlove color='rgba(36, 176, 255, 1)' /> 생활·주방 용품
                </div>
            )
        },
        {
            value:"가구·인테리어",
            label: (
                <div>
                    <MdChair color='rgba(36, 176, 255, 1)' /> 가구·인테리어
                </div>
            )
        },
        {
            value:"반려동물",
            label: (
                <div>
                    <MdPets color='rgba(36, 176, 255, 1)' /> 반려동물
                </div>
            )
        },
        {
            value:"기타",
            label: (
                <div>
                    <BsQuestionSquareFill color='rgba(36, 176, 255, 1)' /> 기타
                </div>
            )
        }
    ]

    const [Cmodal, setCModal] = useState(false);
    const openCModal =() => {
        setCModal(true);
    }
    const closeCModal =() => {
        setCModal(false);
    }
    
    const [imageSrc, setImageSrc] = useState('');
    const previewImg = (uploadImg) => {
        const reader = new FileReader();
        reader.readAsDataURL(uploadImg);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();};
        });
    };

    const productData = Data.GetProducts();
    const newData = Data.GetNew(productData);
    const locationData = Data.GetLocation();

    return (
        <>
        <ProductDetail.DetailInfo style = {{height: '560px'}}>
            <ProductDetail.DetailContent style={{width: '50%', marginRight: '5%'}}>
                <StyleSelect options={options} defaultValue={{ 
                    label: <div><AiOutlineQuestionCircle color='rgba(36, 176, 255, 1)' /> 카테고리를 선택해 주세요.</div>,
                    value: "카테고리를 선택하세요."}}/>
                {<CreateImg src={imageSrc? imageSrc : DefaultImg} />}
                <UploadInput type='file' accept='image/*' alt=" " onChange={(e) => {previewImg(e.target.files[0]);}}/>

            </ProductDetail.DetailContent>
            
            <ProductDetail.DetailContent>
                <input type='text' placeholder='물품 이름을 입력해 주세요' className='nameInput'/>

                <ProductDetail.DetailBox style={{padding: '30px 30px 20px 30px'}}>
                    <div style={{display: 'flex', alignItems: 'left', flexDirection: 'column'}}>
                        <CreateInfo>
                            <CreateText>목표 인원 : </CreateText>
                            <CreateInput type='text' placeholder='목표 인원을 입력해 주세요'/>
                        </CreateInfo>
                        <CreateInfo>
                            <CreateText>상품 금액 : </CreateText>
                            <CreateInput type='text' placeholder='상품 금액을 입력해 주세요'/>
                        </CreateInfo>
                        <CreateInfo>
                            <CreateText>수령 장소 : </CreateText>
                            <CreateInput type='text' placeholder='수령 장소를 입력해 주세요'/>
                        </CreateInfo>
                        <CreateText>구매페이지 : </CreateText>
                        <CreateInput type='text' placeholder='상품 페이지 주소를 입력해 주세요' style={{margin: '10px 0 20px 0'}}/>
                        <CreateText>한마디 : </CreateText>
                        <CreateInput type='text' placeholder='하고 싶은 말을 입력해 주세요' style={{margin: '10px 0 25px 0'}}/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to='/' style={{textDecoration : 'none'}}><StopButton>취소</StopButton></Link>
                        <CreateButton onClick={openCModal}>공구 시작</CreateButton>
                        <CreateModal open={Cmodal} close={closeCModal} />
                    </div>

                </ProductDetail.DetailBox>
            </ProductDetail.DetailContent>
        </ProductDetail.DetailInfo>

        <div style={{width: '73%', margin: 'auto', marginTop: '60px'}}>
            <ProductDetail.AddProductText>동일한 곳에서 공구중인 상품</ProductDetail.AddProductText>
        </div>
        <Main.ProductList style={{marginTop: '0px'}}>
            {locationData.map(item => <Product key={item.id} item={item} />)}
        </Main.ProductList>

        <div style={{width: '73%', margin: 'auto', marginTop: '10px'}}>
            <ProductDetail.AddProductText>이런 상품은 어떠세요?</ProductDetail.AddProductText>
        </div>
        <Main.ProductList style={{marginTop: '0px'}}>
            {newData.map(item => <Product key={item.id} item={item} />)}
        </Main.ProductList>

        <div style={{height: '70px', backgroundColor: '#fff'}}></div>
        </>
        );
}

export default Create;