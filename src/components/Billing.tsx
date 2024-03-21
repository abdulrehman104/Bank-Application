import { apple, bill, google } from "@/app/assets";
import Image from "next/image";

const Billing = () => {
  return (
    <section
      className="
  flex flex-col-reverse md:flex-row py-6 sm:py-16  "
    >
      <div className=" flex flex-1 justify-center items-center mr-0 md:mr-10 mt-10  md:mt-0  relative">
        <Image
          src={bill}
          alt="Billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />
      </div>
      {/* absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      <div className="sectionInfo">
        <h2 className="heading2">
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <Image
            src={apple}
            alt="Apple"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
