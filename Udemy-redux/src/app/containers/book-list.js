import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

//smart component or container
//Aware of system state (Redux component) 
class BookList extends Component{

	renderList(){
		return this.props.books.map((book) => { 
			return(
				<li 
				key={book.title}
			    className="list-group-item"
			    onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		}); 
	}

	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

//whatever object is returned is accessible 
//through props (glue between react and redux)
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//Anything returned from this function will end up
// as props for BookList container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch);
}
//promote BookList from component to a containr - it needs to know
// about this new dispatch method, SelectBook. Make it available
// to the container
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 