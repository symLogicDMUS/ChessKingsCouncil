import React from "react";
import ReactDOM from "react-dom";
import "./CheckBox.css";

export class CheckBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.checkmark = false;
        this.togleCheckmark = this.togleCheckmark.bind(this);
    }

    togleCheckmark() {
        this.props.toglePromo(this.props.pieceName);
    }
    
    getCheckmark() {
        if (this.checkmark)
            return <img src="/Images/checkmark.svg" className="new-game-promotion-checkbox-checkmark" alt="promotion choice checkmark" />
        else
            return null;
    }

    getCheckbox() {
        if (this.checkmark)
            return "new-game-promotion-checkbox-selected"
        else
            return "new-game-promotion-checkbox"
    }

    render() {

        if (this.props.promos.includes(this.props.pieceName)) {
            this.checkmark = true;
        }   
        else {
            this.checkmark = false;
        }   

        return(
            <div className={this.getCheckbox()} onClick={this.togleCheckmark}>
                {this.getCheckmark()}
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<CheckBox piece="Duke" />, document.getElementById('root'));