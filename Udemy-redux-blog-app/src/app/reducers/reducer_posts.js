import { FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from "lodash";

export default function PostsReducer(state = {}, action) {
	switch(action.type){
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data,"id");
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = [ ...state ];
			// newState[post.id] = post;
			//return newState;
			return {...state, [action.payload.data.id]: action.payload.data};
		
		case DELETE_POST:
			return _.omit(state, actions.payload.data);
		default:
			return state;
	}
}