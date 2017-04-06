import React, { Component } from 'react';

class AdvancedSearchButton extends Component {

    render(){
        const buttonStyle = {
            color: '#fff',
            cursor: 'pointer'
        };
        return (
            <div >
                <a style={buttonStyle}><span>{ this.props.title}</span><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
            </div>
        )
    }
}

export default AdvancedSearchButton;