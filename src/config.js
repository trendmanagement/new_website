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
		items: [{value: 'SI', label: 'Silver'}],
		selected: null
	}
} 

export const closed_risk_slides = [
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars1.png`, 
                    name: 'EXO Ratio Put (Inverse)', 
                    picname: 'EXO Ratio Put', 
                    index_view1: ['underlying move\'s either direction, preferably negative', 'increase in volatility', 'risk is limited (Fabian)'], 
                    index_view2: ['short ITM put', 'long 2 OTM puts']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars2.png`, 
                    name: 'EXO Ratio Call (Inverse)', 
                    index_view1: ['underlying move\'s either direction, preferably positive', 'increase in volatility', 'risk is limited (Fabian)'], 
                    index_view2: ['short ITM call', 'long 2 OTM calls']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars3.png`, 
                    name: 'EXO Bearish Put Spread (Inverse)', 
					picname: 'EXO Bearish Put Spread', 
                    index_view1: ['underlying\'s move is positive', 'neutral view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['short ITM put', 'long OTM put']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars4.png`, 
					name: 'EXO Bearish Put', 
                    index_view1: ['underlying\'s move is negative', 'increase in volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long ITM put']

                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars5.png`, 
                    name: 'EXO Out Of The Money Put', 
                    index_view1: ['underlying\'s move is negative', 'increase in volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long out of the money put']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars6.png`, 
                    name: 'EXO Bearish Put Spread', 
                    index_view1: ['underlying\'s move is negative', 'no view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long ITM put', 'short OTM put']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars7.png`, 
                    name: 'EXO Condor (Inverse)', 
                    index_view1: ['underlying\'s move is neutral', 'negative to neutral view of volatility', 'risk is limited (Fabian)'], 
                    index_view2: ['short OTM put', 'long OTM put (lower strike)', 'short OTM call', 'long OTM call (higher strike)']
                },                     
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars8.png`, 
                    name: 'EXO Condor', 
                    index_view1: ['underlying moves in either direction', 'positive to neutral view of volatility', 'risk is limited (Fabian)'], 
                    index_view2: ['long OTM put', 'short OTM put (lower strike)', 'long OTM call', 'short OTM call (higher strike)']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars9.png`, 
                    name: 'EXO Out Of The Money Call', 
                    index_view1: ['underlying\'s move is positive', 'increase in volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long out of the money call']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars10.png`, 
                    name: 'EXO Bullish Call Spread Inverse', 
					picname: 'EXO Bullish Call Spread', 
                    index_view1: ['underlying\'s move is negative', 'no view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['short ITM call', 'long OTM call']
                }, 
				{
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars11.png`, 
                    name: 'EXO Call', 
                    index_view1: ['underlying\'s move is positive', 'increase in volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long ITM call']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars12.png`, 
                    name: 'EXO Bullish Strangle (Inverse)',
					picname: 'EXO Bullish Strangle', 
                    index_view1: ['underlying moves in either direction', 'increase in volatility', 'risk is limited (Fabian)'], 
                    index_view2: ['long OTM put', 'long OTM call']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars13.png`, 
                    name: 'EXO Bearish Strangle (Inverse)', 
					picname: 'EXO Bearish Strangle', 
                    index_view1: ['underlying moves in either direction', 'increase in volatility', 'risk is limited to premium paid (Fabian)'], 
                    index_view2: ['long OTM put', 'long OTM call']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars14.png`, 
                    name: 'EXO Bullish Collar Broken Wing', 
					picname: 'EXO Bullish Collar', 
                    index_view1: ['underlying\'s move is positive', 'neutral view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long OTM put', 'long future', 'long OTM call', 'short OTM call (higher strike']
                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars15.png`, 
                    name: 'EXO Bullish Collar', 
                    index_view1: ['underlying\'s move is positive', 'neutral view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long future', 'long OTM put', 'short OTM call']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars16.png`, 
                    name: 'EXO Bearish Collar (Inverse)', 
                    index_view1: ['underlying\'s move is positive', 'no view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long future', 'long OTM put', 'short OTM call']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars17.png`, 
                    name: 'EXO Bearish Collar Broken Wing (Inverse)', 
                    picname: 'EXO Bearish Collar', 
                    index_view1: ['underlying\'s move is neutral, slightly positive', 'decrease in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['short OTM put', 'long OTM put (lower strike)', 'long future', 'short OTM call']
                } ,   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars18.png`, 
                    name: 'EXO Bearish Collar', 
                    picname: 'EXO Bearish Collar', 
                    index_view1: ['underlying\'s move is negative', 'no view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['short future', 'short OTM put', 'long OTM call']
                } ,   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/closed/Collars19.png`, 
                    name: 'EXO Bearish Collar (Inverse)', 
                    picname: 'EXO Bearish Collar', 
                    index_view1: ['underlying\'s move is positive', 'no view of volatility', 'risk limited (Fabian)'], 
                    index_view2: ['long future', 'long OTM put', 'short OTM call']
                } 
            ] 
			
export const open_risk_slides = [
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars1.png`, 
                    name: 'EXO Call (Inverse)', 
                    index_view1: ['underlying\'s move is neutral/negative', 'neutral view of volatility', 'unlimited risk (Molotov)'], 
                    index_view2: ['short ITM call']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars2.png`, 
                    name: 'Long Future', 
                    index_view1: ['underlying\'s move is positive', 'increase in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['long future']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars3.png`, 
                    name: 'EXO Ratio Call', 
                    index_view1: ['underlying doesn\'t move', 'neutral volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['long ITM call', 'short 2 OTM calls']
                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars4.png`, 
                    name: 'Short Future', 
                    index_view1: ['underlying\'s move is negative', 'increase in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['short future']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars5.png`, 
                    name: 'EXO Put (Inverse)', 
                    index_view1: ['underlying\'s move is neutral/positive', 'neutral view of volatility', 'unlimited risk (Molotov)'], 
                    index_view2: ['short ITM put']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars6.png`, 
                    name: 'EXO Ratio Put', 
                    index_view1: ['nderlying doesn\'t move', 'neutral volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['long ITM call', 'short 2 OTM calls']
                },                     
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars7.png`, 
                    name: 'EXO Bullish Strangle', 
                    index_view1: ['underlying\'s move is neutral, slightly positive', 'decrease in volatility', 
									'risk is unlimited (Molotov)'], 
                    index_view2: ['short OTM put', 'short OTM call']
                },  
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars8.png`, 
                    name: 'EXO Bearish Strangle', 
                    index_view1: ['underlying\'s move is neutral, slightly negative', 
					'decrease in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['short OTM put', 'short OTM call']
                }, 				
                {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars9.png`, 
                    name: 'EXO Bearish Collar Broken Wing (Inverse)', 
					picname: 'EXO Bearish Collar', 
                    index_view1: ['underlying\'s move is neutral, slightly positive', 'decrease in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['short OTM put', 'long OTM put (lower strike)', 'long future', 'short OTM call']
                },                 {
                    src: `${process.env.PUBLIC_URL}/images/graphs/open/Collars10.png`, 
                    name: 'EXO Bearish Collar Broken Wing (Inverse)', 
					picname: 'EXO  Collar', 
                    index_view1: ['underlying\'s move is neutral, slightly positive', 'decrease in volatility', 'risk is unlimited (Molotov)'], 
                    index_view2: ['short OTM put', 'long OTM put (lower strike)', 'long future', 'short OTM call']
                }
]
