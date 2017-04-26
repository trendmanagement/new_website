import React, { Component } from 'react'; 

export default class Table extends Component {

    generateBody(d, self) {  
        let a = {}; 
        let rows = []; 
        for (let i = 0; i < d.length; i++) {
            
        var day = d[i].date.getDate();
        var month = d[i].date.getMonth() + 1;
        var year = d[i].date.getFullYear(); 

        if (month.toString().length == 1) {
            month = '0' + month.toString(); 
        } 

        if (day.toString().length == 1) {
            day = '0' + day.toString(); 
        } 

      
       a.trade_count = self.props.format_num(d[i].trade_count); 
       if (d[i].change >= 0) {
            a.change =self.props.format_num(parseInt(d[i].change)); 
       } else {
           a.change = self.props.format_num(parseInt(d[i].change)); 
       } 

       if (d[i].equity >= 0) {
            a.equity = self.props.format_num(d[i].equity); 
       } else {
            a.equity = self.props.format_num(d[i].equity); 
       }
     

            rows.push(<tr key={Math.random() * 100000}>
                <td>{`${day}-${month}-${year}`}</td>
                <td>{a.trade_count}</td>
                <td>{parseFloat(a.change.replace(',')) >= 0 ? ('$' + a.change) : ('-$' + a.change.replace('-', ''))}</td>
                <td>{parseFloat(a.equity.replace(',')) >= 0 ? ('$' + a.equity) : ('-$' + a.equity.replace('-', ''))}</td>
                <td>{d[i].delta}</td>
            </tr>)
        }
        
        
        return rows; 
    }
     
    render() {
        return(
            <div>
                <h5 className="series-chart-heading">Recent campaign series values</h5>
                <table className="table table-striped table-hover series-detail-table">
                    <thead><tr>
                        <th>date</th>
                        <th>trade count</th>
                        <th>change</th>
                        <th>equity</th>
                        <th>delta</th>
                    </tr></thead>
                    <tbody>{this.generateBody(this.props.data, this).map(i => i)}</tbody>
                </table>
            </div>
        )
    }
}