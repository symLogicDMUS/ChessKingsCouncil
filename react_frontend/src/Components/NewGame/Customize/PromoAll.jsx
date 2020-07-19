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
            return <img src="/Images/checkmark.svg" className="new-game-checked" />
        else
            return null;
    }

    render() {
        return(
            <div className="new-game-promo-all">
                <div className="new-game-promo-all-label">
                    Promo All:
                </div>
                <div className="new-game-promo-all-checkbox-container">
                    <div className="new-game-promo-all-checkbox" onClick={this.togleCheck}>
                        {this.getCheckmark()}
                    </div>
                </div>
            </div>
        )
    }
}