import React from "react";
import "../css/Promo.css";


export class AcceptPromo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        this.class_ = "accept-promo promo-unselected";
        if (this.props.selected != null)
            this.class_ = "accept-promo promo-selected";
        
        return (
            <button className={this.class_} onClick={this.props.promote}>Ok</button>
        );
    }

}