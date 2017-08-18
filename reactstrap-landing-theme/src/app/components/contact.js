import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { Form, Label, Button, Input, FormText, FormGroup,
		 Row, Col, Container} from 'reactstrap';

import {contact} from '../actions';

class Contact extends Component {

	renderField(field){
		const { meta: {touched, error} } = field;
		const className = `${ touched && error ? 'has-danger' : '' }`;
		return(
			<FormGroup className={className}>
				<Label className="sr-only">{field.label}</Label>
				<Input 
					className="form-control-sm"
					type={field.type} 
					name={field.name} 
					placeholder={field.placeholder}
					rows = {3} 
					required
					{...field.input}
				/>
				<div className="form-control-feedback">
					{touched ? error : ''}
				</div>
			</FormGroup>
		);
	}

	onSubmit(values){
		this.props.contact(values,()=>{alert('We\'ll reach to you soon!!')});
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<section id="contact">
				<Container className="text-center wow zoomIn" data-wow-delay='0.3s'>
					<Row>
						<Col md="12">
							<h2>Contact Us</h2>
							<hr width="25%" className="mx-auto text-center" />
							<p> Need to get in touch? Fill in the form below for more information</p>
						</Col>
					</Row>

					<Row>
						<Col md="12">
							<Form  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
								<Row>
									<Col md="6" xs="12">
										<Field 
											name="email"
											type="email"
											label="Email"
											placeholder="Email"
											component={this.renderField}
										/>
										<Field 
											name="name"
											type="text"
											label="Name"
											placeholder="Name"
											component={this.renderField}
										/>
										<Field 
											name="subject"
											type="text"
											label="Subject"
											placeholder="Subject"
											component={this.renderField}
										/>
									</Col>

									<Col md="6" xs="12">
										<Field 
											name="message"
											type="textarea"
											label="Message"
											placeholder="Message"
											component={this.renderField}
										/>
										<Button type="submit" outline color="info" block>Submit</Button>
									</Col>
								</Row>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
} 


function validate (values) {
	const errors = {};
	if (!values.name || values.name.length < 2){
		errors.name = "Name should be atleast 2 character!";
	} 
}

export default reduxForm({
	form: 'ContactForm',
	validate
})(
	connect(null,{contact})(Contact)
);