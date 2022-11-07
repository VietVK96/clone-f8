import React from "react";
import { useRef, Fragment } from "react";
import styled from "styled-components";
import { Carousel, Button } from "antd";
import Myimg from "../../../img/slider1.png"

// const Slider = styled.div`
//   width: 100%;
//   margin: 18px 40px 18px 0px;
//   height: 270px;
//   background-color: blue;
//   border-radius: 25px;
// `;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CarouselCustom = () => {
  const slider = useRef(null);

  return (
    <>
      <Button onClick={() => slider.current.prev()}>prev</Button>
      <Carousel ref={slider}>
        <div>
          <img src={Myimg} style={contentStyle}></img>
        </div>
        <div>
          <img src={Myimg} style={contentStyle}></img>
        </div>
        <div>
          <img src={Myimg} style={contentStyle}></img>
        </div>
        <div>
          <img src={Myimg} style={contentStyle}></img>
        </div>
      </Carousel>
      <Button onClick={() => slider.current.next()}>next</Button>
    </>
  );
};

// function CarouselCustom() {
//   return (
//     <div>
//     <Slider />
//     </div>
//   );
// }

export default CarouselCustom;
