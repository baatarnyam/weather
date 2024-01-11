import Image from "next/image";

import Day from "./component/Day";
import Night from "./component/Night";
import { useState } from "react";
import Search from "./component/Search";

export default function Home() {
  const [weatherdata, setWeatherdata] = useState([]);
  const degree = weatherdata.data?.data[39].temp;
  const nightTemp = weatherdata.data?.data[39].dewpt;
  const cityName = weatherdata.data?.city_name;
  console.log(weatherdata);
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-[1000px] h-[700px] rounded-[15px] flex overflow-hidden relative">
        <Day degree={degree} cityName={cityName} />

        <div className="flex justify-center items-center gap-[15px] w-[120px] h-[120px] rounded-full bg-gray-200 absolute top-[250px] left-[440px] z-20 before:[<Night/>] after:[<Day/>]">
          <Image src="/leftIcon.svg" width={35} height={70} />
          <Image src="/rightIcon.svg" width={36} height={70} />
        </div>
        <Night nightTemp={nightTemp} cityName={cityName} />
        <Search setWeatherdata={setWeatherdata} cityName={cityName} />
      </div>
    </div>
  );
}
