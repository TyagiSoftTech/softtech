import React from 'react';
import Comman from './Comman';
import web from "../src/images/about.jpg";




const About = () => {
    return (
        <>
            <Comman 
                name="Welcome to About page" 
                imgsrc={web} 
                visit="/contact"
                btname="Contact Us"
            />
        </>
    );
};

export default About;