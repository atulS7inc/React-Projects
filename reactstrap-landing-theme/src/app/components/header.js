import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, FormText, Label, Input} from 'reactstrap';


import { signUp } from '../actions';

class Header extends Component {

	renderField(field){
		const { meta: { touched, error } } = field;
		const className = `${ touched && error ? 'has-danger' : '' }`;
		return(
			<FormGroup className={className}>
				<Label className="sr-only">{field.label}</Label>
				<Input 
				type={field.type} 
				name={field.name} 
				placeholder={field.placeholder} 
				{...field.input}
				/>
				<div className="form-control-feedback">
					{touched ? error : ''}
				</div>
			</FormGroup>
		);
	}

	onSubmit(values){
		this.props.signUp(values,()=>{alert('Successfully signed up!')});
	}

	render(){
		const { handleSubmit } = this.props;
		return (
			<section id="header">
				<div className="container">
					<div className="row">
						<div className="col-md-6 wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
							<img src="../../assets/images/logo.png" className="image-fluid" />
							<h2> THINGS WORK BETTER IN SPACE </h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
							 <p className="hidden-sm-down">Duis aute irure dolor in reprehenderit in voluptate velit
							  esse cillum dolore eu fugiat nulla pariatur.</p> 
						</div>
						<div className="col-md-6 hidden-sm-down header-right wow fadeIn"  data-wow-delay="1.5s" data-wow-duration="2s">
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
								<Field
									name="name"
									type="text"
									lable="Name"
									placeholder="Name"
									component={this.renderField} 
								/>

								<Field
									name="email"
									type="email"
									label="Email"
									placeholder="Email"
									component={this.renderField} 
								/>

								<Button className="btn btn-outline-info btn-block">Sign Up</Button>
							</Form>
						</div>
					</div>

			        <div className="row" >
			          <div className="col-md-12 text-center wow swing" data-wow-delay="2s">
			           <a href="#social"><i className="fa fa-chevron-down fa-3x" aria-hidden="true"></i></a>
			          </div>
			        </div>
				</div>
			</section>
		);
	}
}

function validate (values){
	const errors = {};
	if (!values.name || values.name.length < 2){
		errors.name = "Name should be atleast 2 character!";
	} 
	return errors;
}

export default reduxForm({
	form: 'SignupForm',
	validate: validate
})(
	connect(null,{signUp})(Header)
);