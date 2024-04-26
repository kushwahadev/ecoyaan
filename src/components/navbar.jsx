import SubNavbar from "../components/subNavbar";
import MainNavbar from "./mainNavbar";

function Navbar() {
  return (
    <>
      {/* navbar for smaller devices */}
      <SubNavbar />
      {/* navbar for bigger screens */}
      <MainNavbar />
    </>
  );
}

export default Navbar;
