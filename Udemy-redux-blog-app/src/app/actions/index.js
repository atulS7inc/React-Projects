import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=aredux04';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POSTS = 'CREATE_POSTS';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.get(url);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback){
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.post(url, values)
	.then(() => callback());
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function fetchPost(id){
	const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
	const request = axios.get(url);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id,callback) {
	const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
	const request = axios.delete(url)
	.then(() => callback());
	return {
		type: DELETE_POST,
		payload: id
	};
}