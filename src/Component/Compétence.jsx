import React from "react";
import '../Style/Skills.css'

function Skill(){
    const skill = require("../Json/Skill.json")
    const skill_dev = require("../Json/Skill_Dev.json")
    const Skill_graph = require("../Json/Skill_Graph.json")
return(
    <div id="skill" className="global_skills">

        <div className="title">
            <h2>Mes Compétences</h2>
        </div>

        <div  className="Skills"> 
            <div className="Pole_skills">
                <h3>Domaines de compétences</h3>
                <ul className="skill_list">
                {skill.map((e)=>(
                    <li> <strong>{e.skill_name}</strong> <p>{e.skill_desc}</p></li>
                ))}
                    
                </ul>
            </div>

            <div className="TEST">
                <div className="dev_skills">
                    <h3>Compétences en développement</h3>
                    <ul className="dev">
                        {skill_dev.map((el)=>(
                            <li> {el.dev} </li>
                        ))}
                    </ul>
                </div>
                <div className="Outils">
                    <h3>Compétences en conception graphique</h3>
                    <ul>
                        {Skill_graph.map((element)=>(
                            <li> {element.logiciel} </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>

        
    </div>
)
}

export default Skill    