import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

function AboutMe () {
    return (
        <div className="aboutMe">
            <NavBar />
            <Footer />
        </div>
    );

}

export default AboutMe;