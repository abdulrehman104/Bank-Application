const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];
const Stats = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap mb-6 sm:mb-20  ">
      {stats.map((stat) => (
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-semibold text-[30px] sm:text-[40px] leading-[43px] sm:leading-[53px] text-white ">
            {stat.value}
          </h4>
          <p className="font-semibold text-[15px] sm:text-[26px] leading-[21px] sm:leading-[26px] text-gradient uppercase ml-3   ">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
