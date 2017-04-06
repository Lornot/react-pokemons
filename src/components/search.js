import React, { Component } from 'react';

class Search extends Component {

    render(){

        const labelStyle = {
            display: 'block',
            fontSize: '20px'
        };
        const inputStyle = {
            color: '#000'
        };
        const buttonStyle = {
            backgroundColor: '#ff6108',
            marginLeft: '5px',
            width: '25px',
            height: '25px',
            border: 'none',
            borderRadius: '5px'
        };

        return(
            <div>
                <form action="">
                    <label style={labelStyle} htmlFor="inputId">{ this.props.label }</label>
                    <input style={inputStyle} type="text"/>
                    <button style={buttonStyle} type="submit" className="search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        )
    }

}

export default Search;