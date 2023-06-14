import React from "react";
import '../Style/Global.css'
import '../Style/projet.css'

function projet(){
    const Booki = require('../Image/Projet/Booki/Desktop - 1.png')
    const ohmyfood = require("../Image/Projet/Ohmyfood/Accueil.png")
    // const Kanap = require("../Image/Projet/Kanap.png")
    const Kasa = require ("../Image/Projet/Kanap.png")

    return(
        <section id="project">
            <div className=" title">
                <h2>Projets réalisé</h2>
            </div>

            <div className="content">
                <div className="cards">
                    <a href="https://zargan59.github.io/Booki/">
                        
                        <div className="pictures">
                            <img src={Booki} alt="" className="projet_pic" />   
                        </div>
                    </a>
                    <div className="text">
                        <h3 className="projet_title booki">Booki</h3>
                        <p className="projet_description"> Premier projet de la formation OpenClassroom, l'objectif est la création d'un site internet en respectant la maquette fournie et les quelques spécificités du client</p>
                        <div className="tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <a href="https://zargan59.github.io/Ohmyfood/">
                        <div className="pictures">
                            <img src={ohmyfood} alt="" className="projet_pic" />
                        </div>
                    </a>
                    <div className="text">
                        <h3 className="projet_title ohmyfood">Ohmyfood</h3>
                        <p className="projet_description"> Deuxième projet de la formation OpenClassroom, l'objectif est la réalisation d'un site en "mobile first" en respectant les maquettes fournie et en réalisant des animations CSS</p>
                        <div className="tags">
                            <span className="tag">HTML</span>
                            <span className="tag">SCSS</span>

                        </div>
                    </div>
                </div>

                {/* <div className="cards">
                    <a href="https://zargan59.github.io/Ohmyfood/">
                        <div className="pictures">
                            <img src={Kanap} alt="" className="projet_pic" />
                        </div>
                    </a>
                    <div className="text">
                        <h3 className="projet_title ohmyfood">Kanap</h3>
                        <p className="projet_description"> Cinquième projet de la formation OpenClassroom, l'objectif est la réalisation d'un site e-commerce en utilisant un API</p>
                        <div className="tags">
                            <span className="tag">HTML</span>
                            <span className="tag">Javscript</span>

                        </div>
                    </div>
                </div> */}

                <div className="cards">
                    <a href="https://zargan59.github.io/Kasa/">
                        <div className="pictures">
                            <img src={Kasa} alt="" className="projet_pic" />
                        </div>
                    </a>
                    <div className="text">
                        <h3 className="projet_title Kasa">Kasa</h3>
                        <p className="projet_description"> Dernier projet de la formation OpenClassroom, l'objectif est la réalisation d'un site de locatioon de bien entre particulier en utilsant React </p>
                        <div className="tags">
                            <span className="tag">React</span>
                            <span className="tag">Javascript</span>

                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default projet