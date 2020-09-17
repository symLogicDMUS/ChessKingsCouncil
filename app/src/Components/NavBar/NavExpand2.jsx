import React from "react";
import "./NavExpand2.css";

export class NavExpand extends React.Component {

    constructor(props) {
        super(props);
        this.expandNav = this.expandNav.bind(this)
    }

    expandNav() {
        this.props.togleNav(true);
    }

    render() {
        return (
            <div className="nav-expand2"
                 onClick={this.expandNav}
                 style={{left: this.props.left, 
                         top: this.props.top, 
                         backgroundColor:this.props.backgroundColor,
                         border:this.props.border
                        }}>
                <img src={`/Images/nav-expand-${this.props.iconColor}.svg`}  
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