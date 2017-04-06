import React, { Component } from 'react';
import Button from './button';
import Select from './select';

class Body extends Component {

    render(){
        const bodyStyle = {
            paddingTop: '30px'
        };

        return (
            <div>
                <div className="container" style={bodyStyle}>
                    <div className="row">
                        <div className="col-md-5">
                            <Button icon_class="refresh" title="Surprise Me!" icon_class="refresh"/>
                        </div>
                        <div className="col-md-offset-2"></div>
                        <div className="col-md-5">
                            <Select icon_class=""/>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}

export default Body;