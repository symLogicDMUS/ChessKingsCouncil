import React from "react";
import ReactDOM from "react-dom";
import "./CheckBox.css";

export class CheckBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.piece = this.props.piece
        this.state = {checkmark: false}
        this.togleCheckmark = this.togleCheckmark.bind(this);
    }

    togleCheckmark() {
        this.props.togle(this.piece)
        this.setState({checkmark: ! this.state.checkmark})
    }
    
    getCheckmark() {
        if (this.state.checkmark)
            return <img src={require("./checkmark.svg")} className="checkmark" />
        else
            return null;
    }

    render() {
        return(
            <div className="checkbox" onClick={this.togleCheckmark}>
                {this.getCheckmark()}
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<CheckBox piece="Duke" />, document.getElementById('root'));