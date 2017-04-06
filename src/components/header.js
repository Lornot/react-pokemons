import React, { Component } from 'react';
import Search from './search';
import AdvancedSearchButton from './advanced_search_button';

class Header extends Component {

    render() {
        const headerStyle = {
            color: "#fff"
        };
        const topHeaderStyle = {
            backgroundColor: '#313131',
            paddingTop: '22px'
        };
        const bottomHeaderStyle = {
            backgroundColor: '#616161',
            textAlign: 'center',
            paddingTop: '30px'
        };
        const curvedBlockStyle = {
            backgroundColor: '#616161',
            position: 'absolute',
            margin: '0 auto',
            width: '200px',
            height: '10px',
            left: 0,
            right: 0,
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px'
        }; 
        const bottomTextStyle = {
            fontSize: '16px',
            paddingTop: '10px',
            paddingBottom: '10px'
        };
        return (
            <div style={headerStyle}>
                <div style={topHeaderStyle} className="topHeader">
                    <div className="container">
                        <Search label="Name or Number"/>
                        <p style={bottomTextStyle} >Use the Advanced Search to explore Pokemon by type, weakness, Abilitym and more!</p>
                    </div>
                </div>
                <div className="bottomHeader" style={bottomHeaderStyle}>
                    <div className="container">
                        <AdvancedSearchButton title="Show Advanced Search "/>

                    </div>
                    <div style={curvedBlockStyle}></div>
                </div>
            </div>

        );
    }
}

export default Header;