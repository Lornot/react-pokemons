import React, { Component } from 'react';

class Button extends Component {
    
    render(){
        const buttonStyle = {
            backgroundColor: this.props.color || '#00a9dc',
            borderRadius: '5px',
            color: '#fff',
            padding: '5px 50px 5px 50px',
            border: 'none'
        };
        const iconStyle = {
            paddingRight: '5px'
        };
        return (
            <div>
                <button style={buttonStyle}><i style={iconStyle} className={"fa fa-"+this.props.icon_class || ''} aria-hidden="true"></i>{ this.props.title  }</button>
            </div>
        )
    }
}

export default Button;