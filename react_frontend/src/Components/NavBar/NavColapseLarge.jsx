import React from "react";
import "./NavColapseLarge.css"

export class NavColapseLarge extends React.Component {
    
    constructor(props) {
        super(props);
        this.colapseNav = this.colapseNav.bind(this);
    }

    colapseNav() {
        this.props.togleNav(false);
    }

    render() {
        return (
            <img src={`/Images/nav-colapse-button-${this.props.color}.svg`}
                 className="nav-colapse-large"
                 style={{width:20, height:45, cursor:"pointer"}}
                 onClick={this.colapseNav} 
                 alt="widget for colapsing nav bar" />
        )
    }
}