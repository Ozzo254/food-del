import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a dlectable array of dishes
          crafted with the finest ingredients and culinary expertise. Only to
          satisfy your cravings and elevate your dining experience, One
          delicable meal at a time.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
