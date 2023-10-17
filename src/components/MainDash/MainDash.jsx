import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import BarChartCard from "../BarGraph";
import "./MainDash.css";
import { UilUsersAlt } from "@iconscout/react-unicons";
import Search from "../Search";

const MainDash = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const iconStyle = {
    marginLeft: "10px", 
    verticalAlign: "middle", 
  };
  const h1Style = {
    fontSize: "1.4rem", 
    marginTop: "20px",
    
   // margin: "0",
 
  };
  const barChartCardStyle = {
    marginTop: "20px", 
    width: "800px", 
  };
  const spanStyle = {
    marginLeft: "0.5rem",
    marginTop: "1px", // Add margin from the top here
  };

  return (
    <div className="MainDash">
      <h1 style={h1Style}>
        <UilUsersAlt style={iconStyle} />
        <span style={spanStyle}>Hello Nidhi</span>
      </h1>
      <h2 style={{ marginTop: '-10px' }}>
      <Search onSearch={handleSearch} />
      </h2>
      <Cards />
      <div style={barChartCardStyle}>
        <BarChartCard />
      </div>
      <Table />
    </div>
  );
};

export default MainDash;
