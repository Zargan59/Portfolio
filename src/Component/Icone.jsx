import React from "react";
import "../Style/Link.css"
import { Link } from "react-router-dom";


import Github from '../Image/github_PNG40.png'
import Mail from '../Image/Mail.png'
import Linkedin from '../Image/Linkedin.png'


function link(){
return(
    <div className="link_left">
        <ul className="link_list">
                <a href ="https://github.com/Zargan59">
            <li>
                    <img src={Github} alt="Logo Github" className="Github" />
            </li>
                </a>
            
                <a href="mailto:tristan.destoop@gmail.com">
                    <img src={Mail} alt="Mail" className="Mail" />
                </a>
            <li>
                <Link to ="https://www.linkedin.com/in/tristan-destoop/">
                    <img src={Linkedin} alt="Linkedin" />
                </Link>
            </li>
        </ul>
         

        

        <a href="https://www.linkedin.com/in/tristan-destoop/">
        </a>
    </div>
)

}


export default link