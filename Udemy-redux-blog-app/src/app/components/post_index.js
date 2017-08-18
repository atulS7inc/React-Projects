import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from "lodash";
import { Link } from 'react-router-dom';


import { fetchPosts } from '../actions';

class PostIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return(
				<Link to={`/posts/${post.id}`}>
					<li className="list-group-item"
						key={post.id}>
						{post.title}
					</li>
				</Link>
			);
		});
	}

	render(){
		return(
			<div>
				<div className="float-sm-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{ posts: state.posts};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);