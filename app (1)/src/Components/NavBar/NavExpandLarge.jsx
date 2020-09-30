import React from "react";
import "./NavExpandLarge.css"

export class NavExpandLarge extends React.Component {
    
    constructor(props) {
        super(props);
        this.expandNav = this.expandNav.bind(this);
    }

    expandNav() {
        this.props.togleNav(true);
    }

    render() {
        return (
            <img src={`/Images/nav-expand-button-${this.props.color}.svg`}
                 className="nav-expand-large"
                 style={{width:20, height:45, cursor:"pointer"}}
                 onClick={this.expandNav} 
                 alt="widget for expanding nav bar" />
        )
    }
}