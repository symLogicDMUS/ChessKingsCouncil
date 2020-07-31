import React from "react";
import "./ShowSpansCheckbox.css";

export class ShowSpansCheckbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {checkmark: <img src="/Images/checkmark.svg" className="range-checkmark" />};
        this.togleCheck = this.togleCheck.bind(this);
    }

    togleCheck() {
        this.props.togleSpanText();
        if (this.state.checkmark === null)
            this.setState({checkmark: <img src="/Images/checkmark.svg" className="range-checkmark" />})
        else
            this.setState({checkmark: null});
    }

    render() {
        return (
            <div className="show-spans-checkbox" onClick={this.togleCheck}>
                {this.state.checkmark}
            </div>
        )
    }
}