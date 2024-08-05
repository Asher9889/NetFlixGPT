import svg1 from "../assests/1.svg";
import svg2 from "../assests/2.svg";
import svg3 from "../assests/3.svg";
import svg4 from "../assests/4.svg";
import svg5 from "../assests/5.svg";
import svg6 from "../assests/6.svg";
import svg7 from "../assests/7.svg";
import svg8 from "../assests/8.svg";
import svg9 from "../assests/9.svg";
import svg10 from "../assests/10.svg";

const data = [
  "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
  "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  "/95gnJZIk2rEkMO0Ch46x5CVjnms.jpg",
  "/ArvoFK6nlouZRxYmtIOUzKIrg90.jpg",
  "/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg",
  "/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg",
  "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  "/oGythE98MYleE6mZlGs5oBGkux1.jpg",
  "/mWV2fNBkSTW67dIotVTXDYZhNBj.jpg",
  "/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
];

const svgs = [svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10];


export function dataBinding(data) {
  let bindedData = [];
  for (let i = 0; i < 10; i++) {
    bindedData[i] = { poster_path: data[i].poster_path, svg: svgs[i] };
  }

  return bindedData;
}
