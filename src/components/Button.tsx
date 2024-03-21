type BtnProps = {
  styles: string;
};

const Button = ({ styles }: BtnProps) => {
  return (
    <div
      className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}  `}
    >
      Get Started
    </div>
  );
};

export default Button;
