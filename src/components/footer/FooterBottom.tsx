import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
const data = new Date().getFullYear()
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="flex justify-center text-sm font-normal text-center duration-200 text-titleFont md:items-center text-lightText">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright {data} | Aquarelando | todos os direitos reservados |
          <a href="/" target="_blank" rel="aquarelandoorg">
            <span className="ml-1 font-medium group-hover:text-primeColor">
            
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
