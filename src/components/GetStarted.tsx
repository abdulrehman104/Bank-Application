import { arrowUp } from "@/app/assets";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div
      className={`flex justify-center items-start w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-[2px]">
            <span className="text-gradient"> Get</span>
          </p>
          <Image
            src={arrowUp}
            alt="arrow"
            width={23}
            height={23}
            className="object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
