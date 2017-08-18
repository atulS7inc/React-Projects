import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostNew extends Component{
	renderField(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type={field.type}
					{...field.input}
				/>
				<div className="form-control-feedback">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderTextArea(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<textarea 
					{...field.input} 
					className="form-control"
					rows="10" 
					cols="40" />
				<div className="form-control-feedback">
					{touched ? error : ''}
				</div>			
			</div>
		);
	}

	onSubmit(values) {
		
		this.props.createPost(values,() => {
			this.props.history.push("/");
		});
	}
	
	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name='title'
					label='Title'
					type='text'
					component={this.renderField}
				/>
				<Field
					name='categories'
					label='Categories'
					type='text'
					component={this.renderField}
				/>
				<Field
					name='content'
					label='Content'
					component={this.renderTextArea}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/" >Cancle</Link>

			</form>
		);
	}
}

function validate(values){
	const errors = {};

	if(!values.title || values.title.length < 3) {
		errors.title = "Enter a title that is atleast 3 character!"
	}
	if(!values.categories) {
		errors.categories = "Enter some categories!";
	}
	if(!values.content) {
		errors.content = "Enter some content!";
	}

	//If errors object is empty, the form will get submitted
	return errors;
}	

//Just like connect function to connect
// form with our component
//form: 'PostsNewForm' is the 
//Unique name of this form
export default reduxForm({
	form: 'PostsNewForm',
	validate:validate
})(
	connect(null,{createPost})(PostNew)
);