import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const SampleForm = (props) => {
	return (
		<Form className="sample-form">
			<Form.Label className="sample-form-label" aria-label="contact">Contact Me!</Form.Label>
            <hr />
			<Form.Group as={Row} controlId='formHorizontalEmail'>
				<Form.Label column sm={2}>
					Email
				</Form.Label>
				<Col sm={10}>
					<Form.Control type='email' placeholder='Email' />
				</Col>
			</Form.Group>

			<Form.Group as={Row} controlId='formHorizontalPassword'>
				<Form.Label column sm={2}>
					Password
				</Form.Label>
				<Col sm={10}>
					<Form.Control type='password' placeholder='Password' />
				</Col>
			</Form.Group>
			<fieldset>
				<Form.Group as={Row}>
					<Form.Label as='legend' column sm={2}>
						Radios
					</Form.Label>
					<Col sm={10}>
						<Form.Check
							type='radio'
							label='first radio'
							name='formHorizontalRadios'
							id='formHorizontalRadios1'
						/>
						<Form.Check
							type='radio'
							label='second radio'
							name='formHorizontalRadios'
							id='formHorizontalRadios2'
						/>
						<Form.Check
							type='radio'
							label='third radio'
							name='formHorizontalRadios'
							id='formHorizontalRadios3'
						/>
					</Col>
				</Form.Group>
			</fieldset>
			<Form.Group as={Row} controlId='formHorizontalCheck'>
				<Col sm={{ span: 10, offset: 2 }}>
					<Form.Check label='Remember me' />
				</Col>
			</Form.Group>

			<Form.Group as={Row}>
				<Col sm={{ span: 10, offset: 2 }}>
					<Button type='submit'>Sign in</Button>
				</Col>
			</Form.Group>
		</Form>
	);
};

export default SampleForm;
