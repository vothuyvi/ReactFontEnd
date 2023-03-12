import React from "react";
import ReactDOM from "react-dom";
import SwiftSlider from "react-swift-slider";

const Slidersmall = () => {
  const data = [
    {
      id: "1",
      src:
          "https://dhfoods.com.vn/vnt_upload/news/05_2020/thumbs/740_fw_web-avata-muoi-tom-tay-ninhr.png",
    },
    {
      id: "2",
      src:
        "https://dhfoods.com.vn/vnt_upload/news/12_2018/thumbs/740_fw_ca-chem-sot-chanh-day.png",
    },
    {
      id: "3",
      src:
        "https://dhfoods.com.vn/vnt_upload/news/06_2020/thumbs/740_fw_gia-vi-mac-mat.png",
    },
  ];
  return (
    <div>
      <SwiftSlider data={data} height={700} showDots={false} />
    </div>
  );
};
export default Slidersmall;
