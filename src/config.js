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
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'EXO Bearish Collar Broken Wing (Inverse)', 
                    picname: 'EXO Bullish Collar', 
                    index_view1: ['Underlying\'s move is negative', 'No view of volatility', 'FX/Currency'], 
                    index_view2: ['Short future', 'Short OTM put', 'Long OTM call']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test', 
                    index_view1: ['Test', 'Test', 'Test'], 
                    index_view2: ['Test', 'Test', 'Test']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test2', 
                    index_view1: ['Test2', 'Test2', 'Test2'], 
                    index_view2: ['Test2', 'Test2', 'Test2']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test3', 
                    index_view1: ['Test3', 'Test3', 'Test3'], 
                    index_view2: ['Test3', 'Test3', 'Test3']
                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test4', 
                    index_view1: ['Test4', 'Test4', 'Test4'], 
                    index_view2: ['Test4', 'Test4', 'Test4']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test5', 
                    index_view1: ['Test5', 'Test5', 'Test5'], 
                    index_view2: ['Test5', 'Test5', 'Test5']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test6', 
                    index_view1: ['Test6', 'Test6', 'Test6'], 
                    index_view2: ['Test6', 'Test6', 'Test6']
                },                     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test7', 
                    index_view1: ['Test7', 'Test7', 'Test7'], 
                    index_view2: ['Test7', 'Test7', 'Test7']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test8', 
                    index_view1: ['Test8', 'Test8', 'Test9'], 
                    index_view2: ['Test8', 'Test8', 'Test9']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test9', 
                    index_view1: ['Test9', 'Test9', 'Test9'], 
                    index_view2: ['Test9', 'Test9', 'Test9']
                },                 {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test10', 
                    index_view1: ['Test10', 'Test10', 'Test10'], 
                    index_view2: ['Test10', 'Test10', 'Test10']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test11', 
                    index_view1: ['Test11', 'Test11', 'Test11'], 
                    index_view2: ['Test11', 'Test11', 'Test11']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test12', 
                    index_view1: ['Test12', 'Test12', 'Test12'], 
                    index_view2: ['Test12', 'Test12', 'Test12']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test13', 
                    index_view1: ['Test13', 'Test13', 'Test13'], 
                    index_view2: ['Test13', 'Test13', 'Test13']
                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test14', 
                    index_view1: ['Test14', 'Test14', 'Test14'], 
                    index_view2: ['Test14', 'Test14', 'Test14']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test15', 
                    index_view1: ['Test15', 'Test15', 'Test15'], 
                    index_view2: ['Test15', 'Test15', 'Test15']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test16', 
                    index_view1: ['Test16', 'Test16', 'Test16'], 
                    index_view2: ['Test16', 'Test16', 'Test16']
                },                     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test17', 
                    index_view1: ['Test17', 'Test17', 'Test17'], 
                    index_view2: ['Test17', 'Test17', 'Test17']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test18', 
                    index_view1: ['Test18', 'Test18', 'Test18'], 
                    index_view2: ['Test18', 'Test18', 'Test18']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test19', 
                    index_view1: ['Test19', 'Test19', 'Test19'], 
                    index_view2: ['Test19', 'Test19', 'Test19']
                }				
            ] 
			
export const open_risk_slides = [
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test', 
                    index_view1: ['Test', 'Test', 'Test'], 
                    index_view2: ['Test', 'Test', 'Test']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test2', 
                    index_view1: ['Test2', 'Test2', 'Test2'], 
                    index_view2: ['Test2', 'Test2', 'Test2']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test3', 
                    index_view1: ['Test3', 'Test3', 'Test3'], 
                    index_view2: ['Test3', 'Test3', 'Test3']
                },     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test4', 
                    index_view1: ['Test4', 'Test4', 'Test4'], 
                    index_view2: ['Test4', 'Test4', 'Test4']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test5', 
                    index_view1: ['Test5', 'Test5', 'Test5'], 
                    index_view2: ['Test5', 'Test5', 'Test5']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test6', 
                    index_view1: ['Test6', 'Test6', 'Test6'], 
                    index_view2: ['Test6', 'Test6', 'Test6']
                },                     
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test7', 
                    index_view1: ['Test7', 'Test7', 'Test7'], 
                    index_view2: ['Test7', 'Test7', 'Test7']
                }, 
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test8', 
                    index_view1: ['Test8', 'Test8', 'Test9'], 
                    index_view2: ['Test8', 'Test8', 'Test9']
                },   
                {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test9', 
                    index_view1: ['Test9', 'Test9', 'Test9'], 
                    index_view2: ['Test9', 'Test9', 'Test9']
                },                 {
                    src: `${process.env.PUBLIC_URL}/images/line.png`, 
                    name: 'Test10', 
                    index_view1: ['Test10', 'Test10', 'Test10'], 
                    index_view2: ['Test10', 'Test10', 'Test10']
                }
]
