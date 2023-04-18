import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import LeftMenu from "../leftMenu/LeftMenu";
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="leftMenu">
        <LeftMenu />
      </div>
      <div className="rightMenu">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
