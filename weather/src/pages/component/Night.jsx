import Image from "next/image";
import NightWeather from "./NightWeather";

const Night = ({ children }) => {
  return (
    <div className="w-1/2 h-full bg-gray-900 flex justify-center pt-[130px] relative">
      <Image
        src="/Ellipse 22.png"
        width={130}
        height={130}
        className="absolute bottom-[20px] right-[50px]"
      />
      <NightWeather />
      {children}
    </div>
  );
};
export default Night;
