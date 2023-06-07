import React from "react";

const CopyButton = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("5001 4562 3255 1456");
    alert("Iban Numarası Copyalandı");
  };

  return (
    <button className="copy-button" onClick={handleCopy}>
      <h5>IBAN</h5>
    </button>
  );
};

export default CopyButton;
