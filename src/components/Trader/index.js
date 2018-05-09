import React, { Component } from "react";
import PropTypes from 'prop-types';

const divStyle = {
	width: '400px',
	margin: '5px',
	padding: '5px',
	backgroundColor: '#F8F8F8',
	textAlign: 'center',

};

const inlineStyle = {
	display: 'inline-block'
}

const buttonStyle = {
	width: '75%',
	backgroundColor: '#253AE4',
	color: 'white',
	textAlign: 'center',
	height: '75px',
	margin: '0 auto'
}

const inputLightStyle = {
	borderColor: '#8D8C8D',
	borderStyle: 'solid',
	margin: '15px auto',
	borderWidth: '1.5px',
	width: '70%',
	height: '50px'
}

const inputDarkStyle = {
	borderColor: '#484848',
	borderStyle: 'solid',
	margin: '15px auto',
	borderWidth: '1.5px',
	width: '70%',
	height: '50px'
}

const rowStyle = {
	width: '100%'
}

const colStyle = {
	display: 'inline-grid',
	width: '100%'
}

const labelStyle = {
	textAlign: 'left',
	
}

const Trader = ({funds, bitcoins}) => {
	return (
		<div style={divStyle}>
			<div>
				<label>Account Balance</label>
				<div>
					<div>
						<h3 style={inlineStyle}>USD</h3>
						<label style={inlineStyle}>{funds}</label>
					</div>
					<div>
						<h3 style={inlineStyle}>BTC</h3>
						<label style={inlineStyle}>{bitcoins}</label>
					</div>
				</div>
			</div>
			<div style={rowStyle}>
				<div style={colStyle}>
					<label>Trade</label>
					<input style={inputLightStyle} value='USD' readOnly/>
					{/* <input style={inputDarkStyle} 
						placeholder='Enter your amount' 
						onChange={this.handleDollarQuoteAmount}
						value={this.props.dollarQuoteAmount}/> */}
				</div>
			</div>
			<div style={rowStyle}>
				<div style={colStyle}>
					<label>For</label>
					<input style={inputDarkStyle} value='BTC' readOnly/>
					<input style={inputDarkStyle} placeholder='Display Quote' readOnly/>
				</div>
			</div>
			<button style={buttonStyle}>
				Trade
			</button>
		</div>
		)
}

Trader.propTypes = {
	funds: PropTypes.string.isRequired,
	bitcoins: PropTypes.string.isRequired
}

export default Trader;
