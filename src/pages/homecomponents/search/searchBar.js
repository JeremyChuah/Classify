import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);

  function stringUrl(string) {
    if (string.includes(" ")) {
      return string.replaceAll(" ", "%20");
    } else {
      return string;
    }
  }

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="flex flex-col w-full justify-start ">
      <div className="sm:w-full w-full p-2 flex flex-row sm:justify-between rounded-md shadow-lg border-0 lg:w-full md:w-72 outline-0 mt-10 mb-4">
        <input
          type="text"
          placeholder="Enter Class Name"
          className="border-0 outline-none w-full"
          onChange={handleFilter}
        />
        <div>
          <SearchIcon />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="xl:w-2/5 lg:w-8/12 bg-white shadow-lg p-4 overflow-hidden	overflow-y-auto	h-1/2">
          {filteredData.slice(0, 10).map((classes) => {
            return (
              <div className="my-3">
                <Link
                  to={`/ClassCatalog/${stringUrl(classes.name)}`}
                  className="hover:font-bold"
                >
                  {classes.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
