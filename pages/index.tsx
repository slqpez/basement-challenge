import type {NextPage} from "next";
import Image from "next/image";

import header from "../public/header.svg";

const Home: NextPage = () => {
  return (
    <div className="h-full flex bg-black m-8">
      <header className=" text-white text-center">
        <div className="border-white">
          <p>basement.</p>
        </div>
        <Image alt="Basement" src={header} />
      </header>
    </div>
  );
};

export default Home;
