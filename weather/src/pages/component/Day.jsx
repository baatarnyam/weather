import LightWeather from "./LightWeather";
import Image from "next/image";

const Day = (props) => {
  const { degree, cityName } = props;
  return (
    <div className="w-1/2 h-full bg-gray-200 pt-[20px] pl-[20px]">
      <Image
        src="/Group 2.png"
        width={130}
        height={130}
        className="absolute top-[80px] left-[50px]"
      />
      {/* <Search setWeatherData={setWeatherData} weatherData={weatherData} /> */}
      <LightWeather degree={degree} cityName={cityName} />
    </div>
  );
};
export default Day;
