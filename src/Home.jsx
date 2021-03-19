import React from 'react';
import Common from './Common';
import web from "../src/images/pineTree.png";

const Home = () => {
    return (
        <>
            <Common header="Grow your business with" img={web} buttonName="Get started" visit="/services" />
        </>
    );
}

export default Home;