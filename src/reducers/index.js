import { combineReducers } from 'redux';
import {
	BUY_BITCOIN,
	RECEIVE_BITCOIN_PRICE_SUCCESS,
	RECEIVE_BITCOIN_PRICE_FAILURE,
	DATA_IS_LOADING,
	DATA_FINISHED_LOADING,
	UPDATE_DOLLAR_INPUT
} from '../actions'


const initialState = {
	accountFunds: 156.12,
	totalBitcoins: 0,
	dollarInput: ''
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case DATA_IS_LOADING:
			return action.isLoading
		case DATA_FINISHED_LOADING:	
			return action.isLoading
        default:
            return state;
    }
}

export function accountDetails(state = initialState, action) {
	switch (action.type) {
		case BUY_BITCOIN:
			return Object.assign({}, state, {dollarInput: '', accountFunds: state.accountFunds - (+action.dollarAmount), totalBitcoins: (action.dollarAmount/action.bitcoinPrice) + state.totalBitcoins});
		case UPDATE_DOLLAR_INPUT:
			return Object.assign({}, state, {dollarInput: action.dollarAmount})
		default:
			return state
	}
}

export function bitcoin(state={}, action) {
	switch (action.type) {
		case RECEIVE_BITCOIN_PRICE_SUCCESS:
			return {price: action.price};
		case RECEIVE_BITCOIN_PRICE_FAILURE:
			return action.error;
		default:
			return state;
	}
}

export default combineReducers({
    isLoading,
	accountDetails,
	bitcoin
});