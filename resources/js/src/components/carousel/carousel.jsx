import React from "react";

import { Carousel as AntdCarousel } from "antd";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const contentStyle = {
  height: "400px",
  width: "100%",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "#364d79",
  objectFit: "cover",
};

const Carousel = ({data = []}) => (
  <AntdCarousel
    autoplay
    arrows
    prevArrow={<BiChevronLeft />}
    nextArrow={<BiChevronRight />}
  >
    {data.map((d) => (<div>
      <img style={contentStyle} src={d.url} />
    </div>))}
  </AntdCarousel>
);
export default Carousel;
