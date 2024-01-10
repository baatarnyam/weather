import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { data } from "autoprefixer";

const Search = ({ children }) => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);

  const cityNameHandler = (event) => {
    setInput(event.target.value);
  };

  const searchCity = async (queryName) => {
    if (!queryName) {
      return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryName}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;
    const res = await axios(url);
    return res.data;
    console.log(res);
  };

  // let cityName = "";
  const cityWeather = async () => {
    const res = await searchCity(input);
    const coordinates = res.features[0].geometry.coordinates;
    const data = await axios(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${coordinates[1]}&lon=${coordinates[0]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "be4af8700emsh02325ebe33a668ap1cdd50jsn94ec61e20286",
        },
      }
    );
    // cityName = res.city_name;
    setWeather(data);
    // console.log(cityName);
  };
  console.log(weather);

  return (
    <div className="flex flex-col gap-[10px]">
      {" "}
      <div className="w-2/3 h-[30px] rounded-[15px] flex overflow-hidden">
        <MdSearch
          width={40}
          height={40}
          className="w-fit h-full text-gray-400 bg-white active:scale-110 cursor-pointer"
          onClick={cityWeather}
        />
        <input
          type="text"
          className="w-full h-full outline-0"
          placeholder="Search"
          style={{ border: "none" }}
          value={input}
          onChange={(event) => cityNameHandler(event)}
        />
      </div>
      <div className="w-2/3 h-[100px] rounded-[12px] bg-gray-100 p-[10px]">
        <div className="flex items-center gap-[5px]">
          <CiLocationOn />
          <div>Tokyo,</div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Search;
