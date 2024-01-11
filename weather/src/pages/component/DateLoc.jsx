import { IoLocationOutline } from "react-icons/io5";

export const DateLoc = (props, { weatherdata, setWeatherdata }) => {
  console.log(weatherdata);
  let newDate = new Date();
  const {
    month = newDate.toLocaleString("default", { month: "long" }),
    date = newDate.getDate(),
    year = newDate.getFullYear(),
    cityName,
  } = props;

  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="text-[15px] text-gray-400">
          {month} {date}, {year}
        </p>
        <div className="text-[28px] font-bold">{cityName}</div>
      </div>
      <IoLocationOutline size={25} className="text-xl text-gray-500" />
    </div>
  );
};
