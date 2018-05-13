import reducer from './index.js'
import * as types from '../actions'

describe('account details reducer', () => {
	it('should return initial state', () => {
	  expect(reducer(undefined, {})).toEqual(
		{
			accountDetails: {
				accountFunds: 156.12,
				totalBitcoins: 0,
				dollarInput: ''
			},
			bitcoin: {}
		}
	  )
	})
  
	it('should handle USD to bitcoin exchange', () => {
		expect(
			reducer({}, {
				type: types.BUY_BITCOIN,
				dollarAmount: 50.00,
				bitcoinPrice: 1337.12

			})
		).toEqual({
			accountDetails: {
				accountFunds: 106.12,
				totalBitcoins: 0.037393801603446214,
				dollarInput: ''
			},
			bitcoin: {}
		})
	})
})