import LightWeather from "./LightWeather";
import Image from "next/image";
import Search from "./Search";

const Day = ({ children }) => {
  return (
    <div className="w-1/2 h-full bg-gray-200 pt-[20px] pl-[20px]">
      <Image
        src="/Group 2.png"
        width={130}
        height={130}
        className="absolute top-[80px] left-[50px]"
      />
      <Search />
      <LightWeather />
      {children}
    </div>
  );
};
export default Day;
