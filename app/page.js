import React from "react";

const page = () => {
  return (
    <div>
      <nav className="flex items-center px-[30px] py-[10px] bg-black text-white font-['Share_Tech']">

        {/* Logo */}
        <div className="flex-1 flex items-center">
          {/* Logo here */}
        </div>

        {/* Center Links */}
        <div className="flex-1 flex justify-center gap-[3vw]">
          <a href="#" className="text-white no-underline whitespace-nowrap">
            MENU
          </a>
          <a href="#" className="text-white no-underline whitespace-nowrap">
            LOCATIONS
          </a>
          <a href="#" className="text-white no-underline whitespace-nowrap">
            OUR STORY
          </a>
          <a href="#" className="text-white no-underline whitespace-nowrap">
            UNIQUENESS
          </a>
          <a href="#" className="text-white no-underline whitespace-nowrap">
            CAREERS
          </a>
        </div>

        {/* Buttons */}
        <div className="flex-1 flex justify-end gap-[20px]">
          <button className="text-white bg-black border-[0.15vw] border-white px-[1.5vw] py-[0.6vw] rounded-[0.8vw] cursor-pointer font-['Share_Tech'] text-[0.9vw] transition-all duration-300 hover:shadow-[0.4vw_0.4vw_0vw_white]">
            CLICK & COLLECT
          </button>

          <button className="text-white bg-black border-[0.15vw] border-white px-[1.5vw] py-[0.6vw] rounded-[0.8vw] cursor-pointer font-['Share_Tech'] text-[0.9vw] transition-all duration-300 hover:shadow-[0.4vw_0.4vw_0vw_white]">
            DELIVERY
          </button>
          
        </div>
      </nav>
      {/* LANDING PAGE  */}
      <section>

      
        <div className="w-full h-[10vh] flex items-center justify-center bg-white border-t-[3px] border-b-[3px] border-black">
          <span className="font-['Share_Tech'] text-[1.2vw] tracking-wider text-black uppercase">
            UNLOCK THE PERKS OF THE PECKERS INNER CIRCLE!{' '}
            <span className="text-red-600 font-bold">SIGN UP</span>
            {' '}FOR EXCLUSIVE REWARDS.
          </span>
        </div>
      </section>


    </div>

    // LANDING PAGE 

    




  );
};

export default page;
