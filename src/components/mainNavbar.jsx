function MainNavbar() {
  return (
    <>
      <div className="relative">
        <div
          className="hidden lg:grid grid-cols-10 
       p-3 bg-zinc-200 text-lg align-bottom md:sticky w-full"
        >
          <h4
            className="col-span-2 text-3xl text-lime-600 transition-all duration-500
         font-bold text-center hover:text-4xl hover:font-extrabold"
          >
            Ecoyaan
          </h4>

          <h4 className=" pt-2 flex justify-center">
            <span
              className="pb-1 text-zinc-800  group relative   
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-zinc-800  before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-lg"
            >
              Home
            </span>
          </h4>
          <h4 className="pt-2 flex justify-center">
            <span
              className=" pb-1 text-zinc-800  group relative   
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-zinc-800  before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-lg"
            >
              About Us
            </span>
          </h4>
          <h4 className="pt-2 col-span-2  flex justify-center ">
            <span
              className=" pb-1 text-zinc-800 col-span-2  group relative text-center
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-zinc-800  before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-lg  "
            >
              Sell on Ecoyaan
            </span>
          </h4>
          <h4 className="pt-2 flex justify-center">
            <span
              className=" pb-1 text-zinc-800  group relative  text-center 
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-zinc-800  before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-lg"
            >
              Careers
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
