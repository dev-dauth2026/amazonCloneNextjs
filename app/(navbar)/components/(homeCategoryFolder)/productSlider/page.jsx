'use client'
import React, { Component } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "../../productList/page";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from './productSlider.css';


const ProductSlider = ({SelectedProductList,title}) => {
// const [activeSlideIndex,setActiveSlideIndex]  =useState(2)
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FaChevronRight style={{color:'black',fontSize:'25px',display:'flex',justifyContent:'center',alignItems:'center', 
}}/>
      </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FaChevronLeft style={{color:'black',fontSize:'25px',display:'flex',justifyContent:'center',alignItems:'center',}}/>
      </div>
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  slidesToScrollBar:true,
  draggable:true,
  nextArrow:<NextArrow/>,
  prevArrow:<PrevArrow/>,
  // nextArrow: <FaChevronLeft className={styles['slick-prev']} />,
  // prevArrow:  <FaChevronRight className={styles['slick-next']} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const {lastSlide,activeSlide,nextSlide,productSlider}= styles;
  return (

     <div className="bg-white p-5 mb-5 max-h-[400px] flex flex-col overflow-hidden relative">
      <div className="flex flex-row align-baseline mb-2">
        <h3 className="text-xl font-bold mr-5 ">{title}</h3>
        <Link href="/" className="self-baseline">
          See more
        </Link>
     </div>
     <div className="w-full ">
      <Slider {...settings} className= {`flex w-full mx-auto `}>
      
          {SelectedProductList.map((product, index) => {
            // let position=nextSlide

            // if (activeSlideIndex===index ){
            //   position=activeSlide
            // }else if (index===activeSlideIndex-1 ){
            //   position= lastSlide
            // }else null;
            
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center"
              >
                {/* Render product content here */}
                <div className="h-[200px] w-[200px]  p-2 mb-2 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" object-cover h-full w-full   self-center shadow-2xl"
                  />
                </div>
                <p className="text-[14px]  mb-2">
                  {product.discountedPrice? (
                    <>
                      <span className="bg-red-500 p-2 text-[10px] rounded text-white mr-2">
                        {product.discountedPrice} %
                      </span>
                      <span className="text-red-700 text-[10px]">
                        {title}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bg-red-500 p-2 text-[10px] rounded text-white mr-2">
                        ${product.price}
                      </span>

                      <span className=" p-2 text-[10px] rounded text-red-700 mr-2">
                       {title}
                      </span>
                    </>
                  )}
                </p>
                <p className="text-[12px] ">{product.name}</p>
              </div>
            );
          })}
        

          {/* <button className="prev-button absolute top-[8rem] left-0 h-20 w-12 bg-gray-300 bg-opacity-4 text-black hover:bg-white flex items-center justify-center  transition-all duration-500 ease-in-out" onClick={btnPressPrev}>
            <FaChevronLeft className="text-[30px] self-center" />
          </button>
          <button className="next-button absolute top-[8rem] right-0 h-20 w-12 bg-gray-300 bg-opacity-4 text-black hover:bg-white flex items-center justify-center transition-all duration-500 ease-in-out" oncClick={btnPressNext}>
            <FaChevronRight className="text-[30px] self-center" />
          </button> */}
       
        </Slider>
        </div>
      
    </div>
   


  );
};

export default ProductSlider;
