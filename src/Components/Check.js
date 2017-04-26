import React, { Component } from 'react';

export default class Check extends Component {
    render() {

        const { checked, val, onChange } = this.props;

        return (
            <label className={`
                mdl-checkbox 
                mdl-js-checkbox 
                mdl-js-ripple-effect 
                mdl-data-table__select 
                is-upgraded ` +
                (checked ? "is-checked" : "")}>
                <input type="checkbox" className="mdl-checkbox__input" value={val} onChange={onChange} />
                <span className="mdl-checkbox__focus-helper"></span>
                <span className="mdl-checkbox__box-outline">
                    <span className="mdl-checkbox__tick-outline"></span>
                </span>

            </label>
        )
    }
}