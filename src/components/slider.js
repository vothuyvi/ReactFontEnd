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
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/287514357_2483316665143881_6916839569090397977_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=u2WbGiJ6SqQAX95Ykda&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfCiYVQPKjNE6uQGGV1tB5-FgBhnl03KLFvWeo5YsfpMUg&oe=6409D265",
    },
    {
      id: "3",
      src:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/295129132_2520919021383645_5500596688735417102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Jsv3ONg4fM0AX_A6FkQ&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfCNDCRJ27vLhZllC6_98ioUygPSckAr4N5fHgpPtxHztA&oe=640B0600",
    },
    {
      id: "4",
      src:
        "https://dhfoods.com.vn/vnt_upload/about/__Cau_chuyen_thuong_hieu_Dh_Foods.jpg",
    },
    {
      id: "5",
      src:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/239639557_2243098279165722_5240683481188537716_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=vQR0UnQEZZYAX_XXYfi&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfAR0vnwihBcsJgABo0pzh218LkdZDeKhrQzQ4VlNJWV2A&oe=6409CCDA",
    },
  ];
  return (
    <div>
      <SwiftSlider data={data} height={700} showDots={false} />
    </div>
  );
};

export default Slider;

