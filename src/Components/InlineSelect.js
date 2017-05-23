import React, { Component } from 'react';
import './css/InlineSelect.css';
import onClickOutside from 'react-onclickoutside';

class InlineSelect extends Component {

    constructor() {
        super()

        this.state = {
            showOptions: false
        }
        this.toChange = false;

    }

    renderArrow() {
        return <div className="select-arrow_white">
            <i className="fa fa-chevron-down"></i>
        </div>
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleClickOutside = evt => {
        this.setState({
            showOptions: false
        })
    }

    render() {


        const {options, className, value, onChange, selected, index} = this.props;

        return <span className={className + " inline-select-container"} onClick={
            () => {
                if (!this.toChange) {
                    this.setState({ showOptions: true })
                } else {
                    this.toChange = false;
                }

            }
        }>
            <div>
                <div className="select-arrow">
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div >
                    <span ref="select" className="inline-select" >
                        {selected.label}
                    </span>
                    <div className={"inline-select__options-container " + (this.state.showOptions ? 'active' : '')}>
                        {options.map((i, j) => {
                            return <div className="option" key={Math.random() * 10000}
                                onClick={() => {
                                    this.toChange = true;
                                    this.setState({ showOptions: false })
                                    onChange(options[j], index);
                                } }
                                >{i.label}</div>
                        })}
                    </div>
                </div>
            </div>
        </span>
    }
}

export default onClickOutside(InlineSelect); 