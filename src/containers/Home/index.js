import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buyBitcoin, fetchBitcoinPrice, updateDollarInput } from '../../actions';
import Trader from '../../components/Trader';

const divStyle = {
	width: '400px',
	margin: '10px',
	padding: '10px 5px',
	backgroundColor: '#F8F8F8',
	textAlign: 'center',
	fontFamily: 'sans-serif'
};

const inlineStyle = {
	display: 'inline-block',
	textAlign: 'left',
	fontWeight: '400',
}

const buttonStyle = {
	width: '80%',
	backgroundColor: '#253AE4',
	color: 'white',
	textAlign: 'center',
	height: '75px',
	margin: '0 auto',
	marginBottom: '35px',
	fontSize: 'larger',
	letterSpacing: '1px'
}

const inputLightStyle = {
	borderColor: '#8D8C8D',
	borderStyle: 'solid',
	margin: '10px auto',
	borderWidth: '1px',
	width: '70%',
	height: '50px',
	paddingLeft: '15px',
	fontSize: 'medium'
}

const inputDarkStyle = {
	borderColor: '#484848',
	borderStyle: 'solid',
	margin: '10px auto',
	borderWidth: '1px',
	width: '70%',
	height: '50px',
	paddingLeft: '15px',
	fontSize: 'medium'
}

const rowStyle = {
	width: '100%'
}

const colStyle = {
	display: 'inline-grid',
	width: '100%',
	marginBottom: '10px',
	marginTop: '10px'
}

const colLeftAlignStyle = {
	textAlign: 'left',
	margin: '0 auto',
	marginTop: '5px',
	marginBottom: '5px',
	width: '75%'
}

const leftAlignStyle = {
	paddingLeft: '15px',
	textAlign: 'left',
	paddingBottom: '10px'
}

const lightStyle = {
	marginLeft: '10px',
	fontWeight: '300'
}

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(fetchBitcoinPrice())
	}

	render() {
		return (
			<div style={divStyle}>
				<div style={colLeftAlignStyle}>
					<label style={leftAlignStyle}>Account Balance</label>
					<div style={colStyle}>
						<div style={colLeftAlignStyle}>
							<label style={inlineStyle}>USD</label>
							<label style={lightStyle}>{this.props.accountFunds.toFixed(2)}</label>
						</div>
						<div style={colLeftAlignStyle}>
							<label style={inlineStyle}>BTC</label>
							<label style={lightStyle}>{this.props.totalBitcoins.toFixed(8)}</label>
						</div>
					</div>
				</div>

				<div style={rowStyle}>
					<div style={colStyle}>
						<div style={colLeftAlignStyle}>
							<label style={leftAlignStyle}>Trade</label>
						</div>
						<input style={inputLightStyle} value='USD' readOnly/>
						<input style={inputDarkStyle} 
							placeholder='Enter your amount'
							onChange={(e) => {this.props.dispatch(updateDollarInput(e.target.value))}}
							value={this.props.dollarInput || ''}
							type='number'
							step='0.01'
							/>
					</div>
				</div>

				<div style={rowStyle}>
					<div style={colStyle}>
						<div style={colLeftAlignStyle}>
							<label style={leftAlignStyle}>For</label>
						</div>
						<input style={inputDarkStyle} value='BTC' readOnly/>
						<input style={inputLightStyle}
							placeholder='Display Quote'
							value={(+this.props.dollarInput/+this.props.bitcoinPrice) || ''}
							readOnly
							type='number'
							/>
					</div>
				</div>

				<button style={buttonStyle} onClick={(e) => {
																e.preventDefault()
																if(+this.props.dollarInput == 0){
																	alert("Please put in a dollar value")
																	return;
																}

																if(+this.props.dollarInput > +this.props.accountFunds) {
																	alert("Insufficient funds");
																	return;
																}
																this.props.dispatch(buyBitcoin(+this.props.dollarInput))
															}}>
					Trade
				</button>
			</div>
		);
	}
}

Home.propTypes = {
	accountFunds: PropTypes.number.isRequired,
	totalBitcoins: PropTypes.number.isRequired,
	bitcoinPrice: PropTypes.number,
	dollarInput: PropTypes.string.isRequired
}

const mapStateToProps = state => {
	console.log(state);

	return {
		accountFunds: state.accountDetails.accountFunds,
		totalBitcoins: state.accountDetails.totalBitcoins,
		dollarInput: state.accountDetails.dollarInput,
		bitcoinPrice: state.bitcoin.price
	}
}

export default connect(mapStateToProps)(Home)
