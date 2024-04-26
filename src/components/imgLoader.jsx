import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function ImgLoader() {
  return (
    <div>
      <Slide
        images={slideImages}
        duration={3000}
        transitionDuration={1000}
        autoplay
      />
    </div>
  );
}
const slideImages = [
  "/images/img1.png",
  "/images/img3.png",
  "/images/img4.png",
];

export default ImgLoader;
