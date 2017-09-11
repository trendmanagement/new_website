export const apiEndpoint = 'http://66.70.157.69:28864'; 

// campaign filter dropdown data 

// label - dropdown title 
// logo - path to dropdown logo 
// items - dropdown options 
// selected - current option selection 

export const options = {
	agriculture: {
		label: 'Agriculture', 
		logo: `${process.env.PUBLIC_URL}/images/icons/agriculture.png`, 
		items: 
			[{value: 'ZC', label: 'Corn'}, 
			{value: 'ZL', label: 'Soybean Oil'}, 
			{value: 'ZW', label: 'Wheat'}, 
			{value: 'ZS', label: 'Soybean'}, 
			{value: 'CC', label: 'Cocoa'}], 
		selected: null
	}, 
	energy: {
		label: 'Energy', 
		logo: `${process.env.PUBLIC_URL}/images/icons/energy.png`, 
		items: [{value: 'CL', label: 'Crude Oil'}, 
			{value: 'NG', label: 'Natural Gas'}, 
			{value: 'RB', label: 'RBOB Gasoline'}], 
		selected: null
	}, 
	interest_rates: {
		label: 'Interest Rates', 
		logo: `${process.env.PUBLIC_URL}/images/icons/interest_rates.png`, 
		items: [{value: 'ZN', label: '10 Year Notes'}, 
			{value: 'ZF', label: '5 Year Notes'}], 
		selected: null
	}, 
	equity_indexes: {
		label: 'Equity Indexes', 
		logo: `${process.env.PUBLIC_URL}/images/icons/equity_indices.png`, 
		items: [{value: 'ES', label: 'E-mini S&P 500'}], 
		selected: null
	}, 
	fx: {
		label: 'FX', 
		logo: `${process.env.PUBLIC_URL}/images/icons/fx.png`, 
		items: [{value: '6E', label: 'Euro FX'}, 
			{value: '6J', label: 'Japanese Yen'}, 
			{value: '6B', label: 'British Pound'}], 
		selected: null
	}, 
	metals: {
		label: 'Metals', 
		logo: `${process.env.PUBLIC_URL}/images/icons/metals.png`, 
		items: [{value: 'SI', label: 'Silver'},
			{value: 'GC', label: 'Gold'}],
		selected: null
	}
} 
