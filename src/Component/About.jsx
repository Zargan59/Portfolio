import React from "react";
import '../Style/about.css'

function About(){
    return(
        <div id="about" className="Apropos">
            <div className="title">
                <h2 > Présentation</h2>
            </div>
            <div className="section_about">
            <p className="about">Après 3années d'études d'infographiste et 2 stages réalisé, 
            j'ai décidé de me lancer dans une formation dé développeur web en suivant une formation OpenClassroom
            durant laquelle j'ai pu réalisé des projets tout en me formant dans plusieurs domaine que vous retrouverez dans la catégorie <a href="#skill"> mes compétences </a> </p>
            </div>
        </div>
    )
}

export default About