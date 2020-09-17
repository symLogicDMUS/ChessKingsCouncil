  
import React from "react";
import "./NavColapse2.css";

export class NavColapse extends React.Component {
    
    constructor(props) {
        super(props);
        this.colapseNav = this.colapseNav.bind(this);
    }

    colapseNav() {
        this.props.togleNav(false);
    }

    render() {
        return (
            <div className="nav-colapse2"
                 onClick={this.colapseNav}
                 style={{position:"absolute",
                         left: this.props.left, 
                         top: this.props.top, 
                         backgroundColor:this.props.backgroundColor,
                         border:this.props.border
                        }} 
            >
                <img src={`/Images/nav-colapse-${this.props.iconColor}.svg`} 
                     style={{position:"absolute",
                             top:11,
                             height:8
                            }}
                     alt="widget for expanding nav bar"
                />
            </div>
        )
    }
}