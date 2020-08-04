import React from 'react';
import Navigation from "./components/Navigation";
import { Container } from 'react-bootstrap';
import SampleCarousel from './components/SampleCarousel';
import SampleCardGroup from './components/CardGroup';
import SampleJumbotron from './components/SampleJumbotron';
import SampleForm from './components/SampleForm';

function App() {
  return (
    <Container>
      <Navigation />
      <SampleCarousel />
      <SampleJumbotron />
      <SampleCardGroup />
      <SampleForm />
    </Container>
  );
}

export default App;
