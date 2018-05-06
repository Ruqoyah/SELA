import React from 'react';
import Advert from './Advert';
import AllProjects from './AllProjects';
import Footer from './Footer';
import Search from './Search';
import GoogleMap from '../containers/GoogleMap';

const HomePage = () => (
  <div>
    <Advert/>
    <Search/>
    <GoogleMap/>
    <AllProjects/>
    <Footer/>
  </div>
);

export default HomePage;
