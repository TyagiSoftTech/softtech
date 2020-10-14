import React from 'react';
import Comman from './Comman';
import web from "../src/images/4.webp";



const Home = () => {
    return (
        <>
            <Comman
                name ="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Services"
            />
        </>
    );
};

export default Home;