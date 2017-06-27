//http://192.168.0.68:3004/v0/getVersion

//http://192.168.0.68:3004/v0/getUserIdbyMobile


import {
	CALL_API,
	Schemas
} from '../middleware/api';
//url写入状态
import {
	FET_REQUEST,
	FET_SUCCESS,
	FET_FAILURE
} from "../constants/actionTypes";


export function fetchFet() {
	return {
		[CALL_API]: {
			types: [FET_REQUEST, FET_SUCCESS, FET_FAILURE],
			endpoint: "getVersion",
			method: 'POST',
			schema: Schemas.FET
		}
	}
}