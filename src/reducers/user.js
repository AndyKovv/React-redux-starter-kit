import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	LOGIN_FAIL

} from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export default function user(state=initialState, action){
	switch (action.type) {

		case LOGIN_REQUEST:
			return{ ...state, fetching:true}

		case LOGIN_SUCCESS:
			return{ ...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated, fetching:false }

		case LOGIN_FAIL:
			return{}

		case LOGOUT_SUCCESS:
			return{}

		default:
			return state;
	}
}