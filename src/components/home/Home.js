import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import LeftMenu from "../leftMenu/LeftMenu";
import './Home.scss'
import Modal from "../modal/Modal";
import {useState }from "react";

const Home = () => {
    const [modal, setModal] = useState(false)
    const [buttonName, setButtonName] = useState([])


  return (
    <div className="home">
      <div className="leftMenu">
        <LeftMenu 
        setModal={setModal}/>
      </div>
      <div className="rightMenu">
        <Header />
        <Main 
        buttonName={buttonName}
        setButtonName={setButtonName}
         />
        {
          modal &&
          <Modal 
          setModal={setModal}
          buttonName={buttonName}
          setButtonName={setButtonName}
          />
        }
      </div>
    </div>
  );
};

export default Home;
