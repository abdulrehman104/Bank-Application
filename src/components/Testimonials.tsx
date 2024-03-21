import { people01, people02, people03 } from "@/app/assets";
import FeedbackCard from "./FeedbackCard";

type Feedback = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: any;
};

const feedback: Feedback[] = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

const Testimonials = () => {
  return (
    <section className="flex justify-center items-center py-6 sm:py-16 flex-col relative ">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
        <h2 className="heading2">
          What people are <br className="hidden sm:block" />
          saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0 ">
          <p className="paragraph text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1] ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
