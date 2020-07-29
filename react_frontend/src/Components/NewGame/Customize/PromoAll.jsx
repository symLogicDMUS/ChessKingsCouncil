import React from "react";
import "./PromoAll.css";

export class PromoAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checkmark: false};
        this.togleCheck = this.togleCheck.bind(this);
    }

    togleCheck() {
        if (this.state.checkmark)
            this.props.toglePromoAll(false);
        else
            this.props.toglePromoAll(true);
        this.setState({checkmark: ! this.state.checkmark})
    }

    getCheckmark() {
        if (this.state.checkmark)
            return <img src="/Images/checkmark.svg" className="new-game-checked" alt="checkmark shows all indicates all pieces promoted."/>
        else
            return null;
    }

    getCheckbox() {
        if (this.state.checkmark)
            return "new-game-promo-all-checkbox-selected";
        else
            return "new-game-promo-all-checkbox";
    }

    render() {
        return(
            <div className="new-game-promo-all">
                <div className="new-game-promo-all-label">
                    Promo All
                </div>
                <div className="new-game-promo-all-checkbox-container">
                    <div className={this.getCheckbox()} onClick={this.togleCheck}>
                        {this.getCheckmark()}
                    </div>
                </div>
            </div>
        )
    }
}