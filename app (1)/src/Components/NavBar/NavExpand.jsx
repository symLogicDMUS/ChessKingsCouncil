import React from "react";
import "./NavExpand.css";

export class NavExpand extends React.Component {

    constructor(props) {
        super(props);
        this.expandNav = this.expandNav.bind(this)
    }

    expandNav() {
        this.props.togleNav(true);
    }

    render() {

        let height = 27;
        let top = 0;
        if (this.props.styles.border === "none") {
            height = 28;
            top = 0;
        }

        return (
            <div className="nav-expand" style={{backgroundColor:this.props.styles.backgroundColor, border: this.props.styles.border}} onClick={this.expandNav}>
                <div style={{backgroundColor:this.props.styles.backgroundColor, border:this.props.styles.border, top:top, height:height, width:10, borderRadius:"2px"}} onClick={this.expandNav}>
                    <img src={`/Images/nav-expand-${this.props.styles.iconColor}.svg`}  style={{position:"absolute", top:11.5, left:2, width:8, height:5.6}} alt="expand navbar" />
                </div>
            </div>
        )
    }
}

