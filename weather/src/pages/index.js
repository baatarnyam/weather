import Image from "next/image";

import Day from "./component/Day";
import Night from "./component/Night";
import LightWeather from "./component/LightWeather";
import NightWeather from "./component/NightWeather";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-[1000px] h-[700px] rounded-[15px] flex overflow-hidden relative">
        <Day></Day>

        <div className="flex justify-center items-center gap-[15px] w-[140px] h-[140px] rounded-full bg-gray-200 before:[<Night/>] after:[<Day/>]">
          <Image src="/leftIcon.svg" width={43} height={86} />
          <Image src="/rightIcon.svg" width={43} height={86} />
        </div>
        <Night />
      </div>
    </div>
  );
}
