import React from "react";
import ReactDOM from "react-dom";
import SwiftSlider from "react-swift-slider";
const Slider = () => {
  const data = [
    {
      id: "1",
      src:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/299426239_2542302205911993_1811122231372311514_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OTK4m4mMiPMAX8aVrqX&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfApyBt_lKE636PDiR_pzKFTLoXQl2Iz57Y6Wb73S7DUKw&oe=64114576",
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
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/327994667_740586874345209_7293779388020867067_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LNG9yU26geAAX_FO3HF&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAvcXmpGOtoVHD3Q6TTvWFk_o10WQVxTJPQrm8iObKKsw&oe=6410C987",
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

