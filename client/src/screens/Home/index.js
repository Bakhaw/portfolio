import React from 'react';
import CardsContainer from '../../components/CardsContainer';
import Footer from '../../components/Footer';

import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';

function Home({ location }) {
  return (
    <div>
      <NavBar location={location.pathname} />

      <Hero />
      {/* <CardsContainer /> */}
      <Footer />
    </div>
  );
}

export default Home;
