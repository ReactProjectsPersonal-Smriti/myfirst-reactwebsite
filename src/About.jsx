import React from 'react';
import Common from './Common';
import web from '../src/images/snowCross.png'

const About = () => {
    return (
        <>
            <Common header="Welcome to about page" img={web} buttonName="Contact us" visit="/contact" />
        </>
    );
}

export default About;