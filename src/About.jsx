import React from 'react';
import about from '../src/images/about.svg';
import Common from './Common';

const About = () => {
  return(
    <>
       <Common
        name = "Welcome to About Page"
        imgsrc = {about}
        visit = "/contact"
        btname = "Contact Us"
      />
    </>
  );
};
export default About;
