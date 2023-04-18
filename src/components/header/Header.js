import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="directionKey">
        <a href="#">Sol Tuş</a>
        <a href="#">Sağ Tuş</a>
      </div>
      <div className="membership">
        <a href="#">Kaydol</a>
        <button>Oturum Aç</button>
      </div>
    </div>
  );
};

export default Header;
