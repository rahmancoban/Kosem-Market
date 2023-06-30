import React from "react";

const FullScreenPhoto = ({ img, close }) => {
  return (
    <div className="fullscreen-photo">
      <img src={img} alt="Fullscreen" />
      <button className="close-button" onClick={close}>
        Kapat
      </button>
    </div>
  );
};

export default FullScreenPhoto;
