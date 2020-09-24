import React from "react";
import "./NavColapse.css";

export class NavColapse extends React.Component {

    constructor(props) {
        super(props);
        this.colapseNav = this.colapseNav.bind(this)
    }

    colapseNav() {
        this.props.togleNav(false);
    }

    render() {

        let height = 27;
        let top = 0;
        if (this.props.styles.border === "none") {
            height = 28;
            top = 0;
        }

        return (
            <div className="nav-colapse">
                <div style={{backgroundColor:this.props.styles.backgroundColor, border:this.props.styles.border, top:top, height:height, width:10, borderRadius:"2px"}} onClick={this.colapseNav}>
                    <img src={`/Images/nav-colapse-${this.props.styles.iconColor}.svg`}  style={{position:"absolute", top:11.5, left:2, width:8, height:5.6}} alt="colapse navbar" />
                </div>
            </div>
        )
    }
}