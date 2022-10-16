import React from 'react';
import '../../App.css';
import '../../assets/styles/AboutMe.css';
import { Perfil } from '../../components/Perfil';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "../../components/NavBar";


function AboutMe () {
    return (
        <div>
            <NavBar />
            <Perfil />
        </div>

    );

}

export default AboutMe;