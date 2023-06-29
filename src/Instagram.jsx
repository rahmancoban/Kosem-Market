import React from "react";

  const InstaAppButton = () => {
    const handleClickins = () => {
      window.open("https://www.toptanservis.com.tr/", "_blank");
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
