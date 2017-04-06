import React, { Component } from 'react';

class Select extends Component {

    render(){
        return (
            <div>
                <i className={"fa fa-"+this.props.icon_class || ''} aria-hidden="true"></i>
                <select name="" id="">
                    <option value="">{this.props.select_options || ''}</option>
                </select>
            </div>
        )
    }

}

export default Select;