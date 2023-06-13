import React from "react";
import '../Style/Nav.css'
import { Link } from "react-router-dom";



function Navbar (){
    return(
        <section>
            <div className="presentation">
                <Link   Link to ="https://www.google.com/" className="name"><h1 className="prenom">Tristan</h1> <h1>Destoop</h1></Link>
                <h2 className="developpeur">Développeur web</h2>
            </div>
                
            {/* <ul>
                <li>Home</li>
                <li>CV</li>
            </ul> */}
        </section>
    )
}

export default Navbar