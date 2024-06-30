import React from "react";
import { FaHome } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

import Button from "../button/Button";

const HomeMainCard = ({ title, discription }) => {
  return (
    <div>
      <div
        style={{ display: "flex", gap: "12px", alignItems: "center" }}
        className=""
      >
        <span>
          <IoHomeSharp style={{ color: "#F58634", fontSize: "21px" }} />
        </span>
        <span style={{ color: "black" }}>
          {" "}
          Unique Selling Points of "Sunrise Meadows" Eco-Friendly Farm Land
          Project:
        </span>
      </div>
      <div className="maincard23">
        <h2 style={{ marginTop: "0.7rem" }}>{title}</h2>
        <p style={{ marginTop: "0.7rem" }}>{discription}</p>

        <div style={{ width: "121px", marginTop: "1.3rem" }}>
          <Button name="Read More" />
        </div>
      </div>
    </div>
  );
};

export default HomeMainCard;
