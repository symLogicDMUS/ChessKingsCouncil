import React from "react";
import "./PromoAll.css";

export class PromoAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checkmark: false}
        this.togleCheck = this.togleCheck.bind(this);
    }

    togleCheck() {
        this.props.toglePromoAll()
        this.setState({checkmark: ! this.state.checkmark})
    }

    getCheckmark() {
        if (this.state.checkmark)
            return <img src="/Images/checkmark.svg" className="checked" />
        else
            return null;
    }

    render() {
        return(
            <div className="promo-all">
                <div className="promo-all-label">
                    Promo All:
                </div>
                <div className="promo-all-checkbox-container">
                    <div className="promo-all-checkbox" onClick={this.togleCheck}>
                        {this.getCheckmark()}
                    </div>
                </div>
            </div>
        )
    }
}