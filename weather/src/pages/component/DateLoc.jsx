import { IoLocationOutline } from "react-icons/io5";
import Search from "./Search";

export const DateLoc = (props) => {
  let newDate = new Date();
  const {
    month = newDate.toLocaleString("default", { month: "long" }),
    date = newDate.getDate(),
    year = newDate.getFullYear(),
  } = props;

  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="text-[15px] text-gray-400">
          {month} {date}, {year}
        </p>
        <div className="text-[28px] font-bold">krakow</div>
      </div>
      <IoLocationOutline size={25} className="text-xl text-gray-500" />
    </div>
  );
};
