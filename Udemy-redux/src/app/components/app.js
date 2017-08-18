import React, { Component } from 'react';
import { render } from 'react-dom';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
	render(){
		return(
			<div>
				<BookList />
				<BookDetail />
			</div>
		);
	}
}