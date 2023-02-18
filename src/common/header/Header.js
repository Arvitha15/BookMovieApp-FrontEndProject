import React from "react";
import ImgLogo from "../../assets/logo.svg";
import './Header.css';


function Header(){

    return(
        <div className="headerPage">
            <img className="rotate linear infinite" src={ImgLogo} alt="play-logo" />
        </div>
    )

}

export default Header;