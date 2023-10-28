import React, { useState } from 'react';
import Carousel from "react-simply-carousel";
import { SliderItem, SliderTitle, SliderContainer, SliderItemHeader, SliderItemBody, SliderItemFooter } from "./slider.styles";
import SliderLeftArrow from "./slider-left.svg";
import SliderRightArrow from "./slider-right.svg";
import SliderImage from "./image.png";
import './slider.styles.jsx';


const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SliderContainer>
      <SliderTitle>
        Top News
      </SliderTitle>
      <Carousel
        containerProps=
        {
          {
            style: {
              width: "100%",
              justifyContent: "space-between",
              userSelect: "none",
              gap: 12
            }
          }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img src={SliderRightArrow} alt="right_arrow" />,
          style: {
            width: 48,
            height: 48,
            minWidth: 48,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "none",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }
        }}
        backwardBtnProps={{
          children: <img src={SliderLeftArrow} alt="left_arrow" />,
          style: {
            width: 48,
            height: 48,
            minWidth: 48,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "none",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }
        }}
        dotsNav={{
          show: false,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            maxWidth: 1280,
          },
          {
            itemsToShow: 1,
            maxWidth: 768,
          },
        ]}
        itemsToShow={3}
        speed={400}
        centerMode
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <SliderItem key={index} style={{
            padding: "0 12px",
            width: 327, height: 279
          }}>
            <SliderItemHeader>
              <img src={SliderImage} alt="slider_image" />
            </SliderItemHeader>
            <SliderItemBody>
              A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
            </SliderItemBody>
            <SliderItemFooter>
              1h ago · by Troy Corlson
            </SliderItemFooter>
          </SliderItem>
        ))
        }
      </Carousel>
    </SliderContainer>
  );
};

export default Slider;
