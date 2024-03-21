import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex justify-center items-center  my-6 sm:my-16 padding flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow ">
      <div className="flex flex-1 flex-col">
        <h2 className="heading2">Let’s try our service now!</h2>
        <p className="paragraph">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center ml-o sm:ml-10 mt-10 sm:mt-0 ">
        <Button styles="" />
      </div>
    </section>
  );
};

export default CTA;
