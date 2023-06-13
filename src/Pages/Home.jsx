import React from "react";
import '../Style/Global.css'

import Banner from  "../Component/Banner.jsx"
import Navbar from "../Component/Navbar.jsx"
import Link from '../Component/Icone.jsx'
import Competence from '../Component/Compétence.jsx'
import About from '../Component/About.jsx'
import Projet from '../Component/Projet.jsx'
import Footer from "../Component/Footer.jsx"


function Home(){
    return(
        <main>
            <Banner />
            <Navbar />
            <About />
            <Competence />
            <Projet />
            <Link />
            <Footer />
        </main>
    )
}

export default Home