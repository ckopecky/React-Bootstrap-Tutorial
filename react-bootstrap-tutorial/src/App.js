import React, {useState, useEffect} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
import 'dotenv/config' 
import Navigation from "./components/Navigation";
import SampleCarousel from './components/SampleCarousel';
import SampleCardGroup from './components/CardGroup';
import SampleJumbotron from './components/SampleJumbotron';
import SampleForm from './components/SampleForm';


function App() {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
  }, [URL]);

  if(!loading) {
    return (
      <Container className="main-container">
        <Navigation />
        <SampleCarousel movies={movies}/>
        <SampleJumbotron />
        <SampleCardGroup movies={movies}/>
        <SampleForm />
      </Container>
    );
  }
  else {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  
}

export default App;
