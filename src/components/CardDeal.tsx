import { card } from "@/app/assets";
import Button from "./Button";
import Image from "next/image";

const CardDeal = () => {
  return (
    <section className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          Find a better card deal <br className=" hidden sm:block " /> in few
          easy steps.
        </h2>
        <p className="paragraph wax-w-[470px] mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="sectionImg">
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
