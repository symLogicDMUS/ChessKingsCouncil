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
            return <img src="/Images/checkmark.svg" className="checkmark" />
        else
            return null;
    }

    render() {

        this.checkmark = false;
        if (this.props.promos.includes(this.props.pieceName))
            this.checkmark = true;

        return(
            <div className="checkbox" onClick={this.togleCheckmark}>
                {this.getCheckmark()}
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<CheckBox piece="Duke" />, document.getElementById('root'));