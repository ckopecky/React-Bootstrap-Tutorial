import React from 'react';
import { Carousel } from 'react-bootstrap';

const SampleCarousel = (props) => {
	//https://image.tmdb.org/t/p/original
	console.log(props.movies[0])
	return (
		<Carousel className="carousel-container">
			<Carousel.Item className="carousel-item">
				<img
					className='d-block w-100'
					src={`https://image.tmdb.org/t/p/original${props.movies[0].backdrop_path}`}
					alt={props.movies[0].title}
				/>
				<Carousel.Caption className="overlay">
					<h3>{props.movies[0].title}</h3>
					<p>
						{props.movies[0].overview}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img
					className='d-block w-100'
					src={`https://image.tmdb.org/t/p/original${props.movies[1].backdrop_path}`}

					alt={props.movies[1].title}
				/>

				<Carousel.Caption className="overlay">
					<h3>{props.movies[1].title}</h3>					
					<p>
						{props.movies[1].overview}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img
					className='d-block w-100'
					src={`https://image.tmdb.org/t/p/original${props.movies[2].backdrop_path}`}
					alt={props.movies[2].title}
				/>

				<Carousel.Caption className="overlay">
					<h3>{props.movies[2].title}</h3>					
					<p>
						{props.movies[2].overview}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default SampleCarousel;
