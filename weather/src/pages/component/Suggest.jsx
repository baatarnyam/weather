import { CiLocationOn } from "react-icons/ci";
import { useState, useEffect } from "react";

const Suggest = (props) => {
  const { suggCity, input } = props;
  const { suggest, setSuggest } = useState([]);
  return (
    <div className="w-2/3 h-[100px] rounded-[12px] bg-gray-100 p-[10px] flex flex-col justify-around absolute top-[40px]">
      <div className="flex items-center gap-[5px]">
        <CiLocationOn />
        <div onChange={input}>{suggCity}</div>
      </div>
    </div>
  );
};
export default Suggest;
