import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuHome } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { DateLoc } from "./DateLoc";

const NightWeather = (props) => {
  const { nightTemp, cityName } = props;
  return (
    <div className="w-[280px] h-[500px] absolute rounded-[20px] bg-gray-800 p-[30px]">
      <div className="w-full h-[270px] pr-[20px] pb-[15px] gap-[30px] flex flex-col items-center">
        <div className="w-full h-[100px] flex justify-between items-center">
          {/* <div className="">
            <div className="text-gray-400">date</div>
            <div className="text-[28px] font-bold text-white">krakow</div>
          </div>
          <CiLocationOn className="w-[20px] h-[20px] text-white" /> */}

          <DateLoc cityName={cityName} />
        </div>
        <Image src="/moon.png" width={160} height={160} />
      </div>
      <div className="w-full h-fit">
        <div className="flex flex-col items-start">
          <p className="text-[80px] font-bold  text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-white-600">
            {nightTemp}&deg;
          </p>
          <button className="text-violet-400 font-bold">Clear</button>
        </div>

        <div className="w-full h-[40px] flex justify-between items-center mt-[10px]">
          <LuHome className="w-[20px] h-[20px] text-white" />
          <CiLocationOn className="w-[20px] h-[20px] text-white" />
          <CiHeart className="w-[20px] h-[20px] text-white" />
          <CiUser className="w-[20px] h-[20px] text-white " />
        </div>
      </div>
    </div>
  );
};
export default NightWeather;
