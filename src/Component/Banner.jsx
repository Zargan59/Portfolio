import React from "react";
import "../Style/banner.css"
function Banner(){
    return(
        <div className="banner_background">
            <div className="banner">
                <a href="#about">Présentation</a>
                <a href="#skill">Compétence</a>
                <a href="#project">Projets</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Banner