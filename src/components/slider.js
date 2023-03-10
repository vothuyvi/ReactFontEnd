import React from "react";
import ReactDOM from "react-dom";
import SwiftSlider from "react-swift-slider";
const Slider = () => {
  const data = [
    {
      id: "1",
      src:
        "https://dhfoods.com.vn/vnt_upload/weblink/Banner_De_Dang_mua_sam_san_pham_Dh_Foods_Banner_dai_De_dang_mua_sam_san_pham_Dh_Foods.jpg",
    },
    {
      id: "2",
      src:
        "https://dhfoods.com.vn/vnt_upload/news/10_2020/mon-ngon-5.jpg",
    },
    {
      id: "3",
      src:
        "https://dhfoods.com.vn/vnt_upload/news/10_2020/dhfoods-kham-pha-gia-vi.jpg",
    },
    {
      id: "4",
      src:
        "https://dhfoods.com.vn/vnt_upload/about/__Cau_chuyen_thuong_hieu_Dh_Foods.jpg",
    },
    {
      id: "5",
      src:
        "https://dhfoods.com.vn/vnt_upload/news/12_2022/Gio_qua_gia_vi_Tet_Dh_Foods_cover_dai.jpg",
    },
  ];
  return (
    <div>
      <SwiftSlider data={data} height={700} showDots={false} />
    </div>
  );
};

export default Slider;

