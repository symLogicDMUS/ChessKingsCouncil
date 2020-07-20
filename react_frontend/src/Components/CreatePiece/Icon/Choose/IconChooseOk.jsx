import React from "react";
import "./IconChooseOk.css";

export class Ok extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {enabled: false};
        this.submitChoice = this.submitChoice.bind(this);
    }

    submitChoice() {
        this.props.submitChoice();
        this.props.closeChoose();
    }
    
    render() {

        let style = {opacity: 0.6, cursor: "not-allowed", color:"#a9a9a9", border:"1px solid #a9a9a9"};
        if (this.props.choice != null)
            style = {cursor: "pointer"}

        return(
            <button className="ok" style={style} onClick={this.submitChoice}>
                <div className="ok-text">Ok</div>
            </button>
        )
    }
}