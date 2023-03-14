import React from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import {
  BsFillDropletFill,
  BsSunFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { formatToLocalTime, iconUrlFromCode } from "../services/Weather";

const Temperature = ({weather:{
  details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) => {
  return (
    <div>
      <div className=" flex justify-center items-center my-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      {/* temp section */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          {/* 1st */}
          <div className="flex justify-center items-center text-sm font-light">
            <FaTemperatureHigh size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          {/* 2nd */}
          <div className="flex justify-center items-center text-sm font-light">
            <BsFillDropletFill size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          {/* 3rd */}
          <div className="flex justify-center items-center text-sm font-light">
            <FaWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      {/* time section */}
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSunFill />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        {/* 2nd */}
        <BsFillSunsetFill />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        {/* 3rd */}
        <HiArrowUp />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        {/* 4th */}
        <HiArrowDown />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default Temperature;
