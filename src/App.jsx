import Feature from "./components/feature";
import HeroSection from "./components/heroSection";
import ProductFeature from "./components/productFeature";
import Footer from "./components/footer";
import LetterSection from "./components/letterSection";
// import ImgLoader from "./components/imgLoader";
// import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <HeroSection />
      {/* <Navbar /> */}
      {/* <ImgLoader /> */}
      <Feature />
      <ProductFeature />
      <LetterSection />
      <Footer />
    </>
  );
}

export default App;
