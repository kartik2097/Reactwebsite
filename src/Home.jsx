import React from 'react';
import web from '../src/images/man.svg';
import Common from './Common';

const Home = () => {
  return(
    <>
      <Common
        name = "Hello Everyone, I am "
        imgsrc = {web}
        visit = "/service"
        btname = "Get Started"
      />
    </>
  );
};
export default Home;
