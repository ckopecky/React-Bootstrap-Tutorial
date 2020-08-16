import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const SampleCardGroup = (props) => {
	//https://image.tmdb.org/t/p/original

	console.log(props.movies.slice(3));
	const copy = props.movies.slice(3);
	return (
		<div className="card-group sample-card-group">
			{copy.map((movie) => {
				return (
					<Card className="sample-card">
						<Card.Img
							variant='top'
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						/>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
							<Card.Text>{movie.overview}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className='text-muted'>
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				);
			})}
		</div>
	);
};

export default SampleCardGroup;
