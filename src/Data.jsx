import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const GetProducts = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const GetProductData = async () => {
          const products = await axios.Get('/api/product/');
          setProductData(products.data);
        };
        GetProductData();
      }, []);

    return productData;
}

export const GetBeauty = () => {
    const productData = GetProducts();
    const BeautyData = productData.filter((item) => item.category === '0');
    return BeautyData;
}

export const GetFood = () => {
    const productData = GetProducts();
    const FoodData = productData.filter((item) => item.category === '1');
    return FoodData;
}

export const GetStationery = () => {
    const productData = GetProducts();
    const StationeryData = productData.filter((item) => item.category === '2');
    return StationeryData;
}

export const GetBook = () => {
    const productData = GetProducts();
    const BookData = productData.filter((item) => item.category === '3');
    return BookData;
}

export const GetLife = () => {
    const productData = GetProducts();
    const LifeData = productData.filter((item) => item.category === '4');
    return LifeData;
}

export const GetInterior = () => {
    const productData = GetProducts();
    const InteriorData = productData.filter((item) => item.category === '5');
    return InteriorData;
}

export const GetPet = () => {
    const productData = GetProducts();
    const PetData = productData.filter((item) => item.category === '6');
    return PetData;
}

export const GetEtc = () => {
    const productData = GetProducts();
    const EtcData = productData.filter((item) => item.category === '7');
    return EtcData;
}
