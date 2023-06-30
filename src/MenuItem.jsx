import React, { useState } from "react";
import FullScreenPhoto from "../FullScreenPhoto";

const MenuItem = ({ img, title, price, desc }) => {
  const [fullscreen, setFullscreen] = useState(false);

  const openFullscreen = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" onClick={openFullscreen} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}₺</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
      {fullscreen && <FullScreenPhoto img={img} close={closeFullscreen} />}
    </article>
  );
};

export default MenuItem;
