import { airbnb, binance, coinbase, dropbox } from "@/app/assets";
import Image from "next/image";

const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

const Clients = () => {
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex justify-center items-center flex-wrap w-full ">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flex justify-center items-center min-w-[120px] sm:min-w-[192px] m-5"
          >
            <Image
              src={client.logo}
              alt="Clients"
              className="w-[100px] sm:w-[192px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
