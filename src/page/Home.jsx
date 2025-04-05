import React from "react";
import Contries from "../component/Contries";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountrie, setSearchCountrie] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = await response.data;
        setCountries(data);
      } catch (error) {
        console.error(error);
        console.log("Error fetching countries data");
      }
    };
    fetchData();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchCountrie === "") {
      console.log("Please enter a countrie name");
      return;
    } else {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${searchCountrie}`
        );
        const data = await response.data;
        setCountries(data);
      } catch (error) {
        console.error(error);
        console.log("Error fetching countries data");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="border  w-[200px] h-[30px] my-10 rounded-md">
          <input
            type="text"
            className="placeholder:text-gray-400 w-full h-full px-2"
            placeholder="Type your Countrie..."
            value={searchCountrie}
            onChange={(e) => setSearchCountrie(e.target.value)}
          />
        </div>
        <button
          className="ml-4 border h-[30px] w-[60px] cursor-pointer bg-gray-400 rounded-md hover:bg-sky-700 "
          onClick={(e) => handleSearch(e)}
        >
          Search
        </button>
      </div>
      <div class="grid grid-cols-4 gap-4 mx-10">
        {countries.map((countrie, index) => {
          return <Contries key={index} countrie={countrie} />;
        })}
      </div>
    </>
  );
};
export default HomePage;
