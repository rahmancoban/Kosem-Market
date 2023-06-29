import React from "react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/+905011208385", "_blank");
  };

  return (
  
    <button className="whatsapp-icon" onClick={handleClick}>
      <img src="./images/whatsapp-icon.png" alt="WhatsApp Icon" />
      <h5>WhatsApp Sipariş Hattı</h5>
    </button>

  
  );
};

export default WhatsAppButton;
