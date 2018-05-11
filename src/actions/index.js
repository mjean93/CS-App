export const BUY_BITCOIN = 'BUY_BITCOIN'
export const RECEIVE_BITCOIN_PRICE_SUCCESS = 'RECEIVE_BITCOIN_PRICE_SUCCESS'
export const RECEIVE_BITCOIN_PRICE_FAILURE = 'RECEIVE_BITCOIN_PRICE_FAILURE'
export const DATA_IS_LOADING = 'DATA_IS_LOADING'
export const UPDATE_DOLLAR_INPUT = 'UPDATE_DOLLAR_INPUT'

//actions
export function buyBitcoin(dollarAmount) {
	return (dispatch, getState) => {
		const {bitcoin} = getState();
		dispatch({
			type: BUY_BITCOIN,
			dollarAmount: dollarAmount,
			bitcoinPrice: bitcoin.price
		})
	}
}

export function receiveBitcoinPriceSuccess(bitcoinPrice) {
	return {
		type: RECEIVE_BITCOIN_PRICE_SUCCESS,
		price: bitcoinPrice,
		error: null
	}
}

export function receiveBitcoinPriceFailure(error) {
	return {
		type: RECEIVE_BITCOIN_PRICE_FAILURE,
		price: "",
		error: error
	}
}

export function dataIsLoading() {
	return {
		type: DATA_IS_LOADING,
		isLoading: true
	}
}

export function dataFinishedLoading() {
	return {
		type: DATA_IS_LOADING,
		isLoading: false
	}
}

export function updateDollarInput(amount) {
	return {
		type: UPDATE_DOLLAR_INPUT,
		dollarAmount: amount
	}
}

export function fetchBitcoinPrice() {
	// const url = "https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcusd"
	// return (dispatch) => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((json) => {
	// 			dispatch(receiveBitcoinPriceSuccess(json.last_price))
	// 		})
	// 		.catch(() => {
	// 			dispatch(receiveBitcoinPriceFailure(true))
	// 		})

	// }

	return (dispatch) => {
		//dispatch(dataIsLoading())
		dispatch(receiveBitcoinPriceSuccess(1337.98))
		//dispatch(dataFinishedLoading()
	}
}