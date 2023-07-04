"use client";
import Link from "next/link";
import SliderList from "./sliderList/page";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./slider.module.css";
import { useEffect, useState } from "react";
const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const {
    nextSlide,
    activeSlide,
    lastSlide,
    sliderItem,
    sliderItemImg,
    sliderContainer,
    gradientOverlay,
  } = styles;

  useEffect(() => {
    if (activeSlideIndex < 0) {
      setActiveSlideIndex(SliderList.length - 1);
    }
    if (activeSlideIndex > SliderList.length - 1) {
      setActiveSlideIndex(0);
    }
  }, [activeSlideIndex]);

  return (
    <div className={sliderContainer}>
      {SliderList.map((slider, index) => {
        const { id, imgTitle, img, link } = slider;

        let position = nextSlide;
        if (index === activeSlideIndex) {
          position = activeSlide;
        }
        if (
          index === activeSlideIndex - 1 ||
          (activeSlideIndex === 0 && index === SliderList.length - 1)
        ) {
          position = lastSlide;
        }

        return (
          <img
            key={index}
            src={img}
            alt={imgTitle}
            className={`${sliderItemImg} ${position}`}
          />
        );
      })}
      <button className="absolute left-5 top-40 text-gray-900 z-40">
        <FaChevronLeft
          className="text-3xl"
          onClick={() => setActiveSlideIndex(activeSlideIndex - 1)}
        />
      </button>
      <button className="absolute right-5 top-40 text-gray-900 z-50">
        <FaChevronRight
          className="  text-3xl"
          onClick={() => setActiveSlideIndex(activeSlideIndex + 1)}
        />
      </button>
      <div className={gradientOverlay}></div>
    </div>
  );
};
export default Slider;
