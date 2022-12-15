import React from 'react';
import Hero from '../components/hero/Hero';
import Page from '../components/page/Page';
import Clicker from "../components/clicker/Clicker"

const Home = (): JSX.Element => (
  <Page title="Home">
    <Clicker />
    <Hero />
  </Page>
);

export default Home;
