import React from "react";

  const InstaAppButton = () => {
    const handleClickins = () => {
      window.open("https://www.instagram.com/kosemmarketbufe/?igshid=OGQ5ZDc2ODk2ZA%3D%3D", "_blank");
    };

  return (
    <div>
    <button className="instagram-icon" onClick={handleClickins}>
      <img src="./images/instagram.png" alt="instagram Icon" />
    </button>
    </div>
  );
};

export default InstaAppButton;
