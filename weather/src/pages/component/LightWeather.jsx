import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuHome } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { DateLoc } from "./DateLoc";

const LightWeather = (props) => {
  const { degree, cityName } = props;
  return (
    <div className="w-[280px] h-[500px] absolute top-[130px] left-[100px] rounded-[20px] bg-white p-[30px]">
      <div className="w-full h-[270px] pr-[20px] pb-[15px] gap-[30px] flex flex-col items-center">
        <div className="w-full h-[100px] flex justify-between items-center">
          <DateLoc cityName={cityName} />
        </div>

        <Image src="/sun.png" width={160} height={160} />
      </div>
      <div className="w-full h-fit">
        <div className="flex flex-col items-start">
          <span className="text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500">
            {degree}&deg;
          </span>
          <button className="text-amber-600">Bright</button>
        </div>

        <div className="w-full h-[40px] flex justify-between items-center mt-[10px]">
          <LuHome className="w-[20px] h-[20px]" />
          <CiLocationOn className="w-[20px] h-[20px]" />
          <CiHeart className="w-[20px] h-[20px]" />
          <CiUser className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
};
export default LightWeather;
