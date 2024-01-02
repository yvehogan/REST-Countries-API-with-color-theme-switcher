import React from 'react';
import Data from '../data/data';
import { IoSearch } from "react-icons/io5";

const Contents = () => {
  return (
    <div className="w-full mt-5 md:mt-10 px-5 md:px-16 bg-veryLightGray">
      <div className=" py-12 flex flex-wrap md:justify-between">
        <div className="relative drop-shadow-md">
          <IoSearch className="absolute h-5 w-5 top-5 left-5 text-secondary"/>
          <input className="px-20 md:px-28 py-4 rounded-md outline-none" type="search" placeholder='Search for country...'/>
        </div>
        <div className="bg-white px-10 py-4 rounded-md text-light-text text-center mt-8 md:mt-0">
          <select className="outline-none p-2 text-lg text-primary" name="Filter by region">
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap space-x-5">
        {Data?.map((data) => (
          <div className="bg-white rounded-xl mb-12 w-full md:w-[22%]" key={data?.name}>
            <div className="">
              <img src={data?.flags?.png} className="w-full rounded-t-xl h-[200px]"/>
              <div className="px-8 pb-8 pt-5 text-lg text-primary">
                <p className="text-primary font-extrabold pb-4">{data?.name}</p>
                <p><span className="font-semibold">Population: </span>{data?.population}</p>
                <p className="py-1"><span className="font-semibold">Region: </span>{data?.region}</p>
                <p><span className="font-semibold">Capital: </span>{data?.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;