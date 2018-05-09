import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { receiveBitcoinPrice, buyBitcoin, fetchBitcoinPrice } from '../actions';
import Trader from "../components/Trader";

class App extends Component {

	onClick(item) {
		console.log(item.usd + " " + item.quote)
	}

	componentDidMount() {
		this.props.fetchBitcoinPrice()
	}

	render() {
		return (
			<div>
				<Trader funds={this.props.accountFunds} bitcoins={this.props.totalBitcoins} dollarQuoteAmount={this.props.dollarQuoteAmount}/>
			</div>
		);
	}
}

App.propTypes = {
	fetchBitcoinPrice: PropTypes.func.isRequired,
	accountFunds: PropTypes.string,
	totalBitcoins: PropTypes.string,
	bitcoinPrice: PropTypes.string,
	dollarQuoteAmount: PropTypes.string,
}

const mapStateToProps = state => {
	console.log(state);

	return {
		accountFunds: state.accountDetails.accountFunds,
		totalBitcoins: state.accountDetails.totalBitcoins,
		dollarQuoteAmount: state.accountDetails.dollarQuoteAmount,
		bitcoinPrice: state.bitcoin.price,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        fetchBitcoinPrice: () => dispatch(fetchBitcoinPrice())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
