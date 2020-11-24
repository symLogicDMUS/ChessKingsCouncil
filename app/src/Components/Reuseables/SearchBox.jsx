import React from "react";
import {styles} from "./SearchBox.jss";

export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.userInput = null;
        this.state = {backgroundColor: "#515151" };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.togleStyle = this.togleStyle.bind(this);
    }

    handleUserInput(e) {
        this.userInput = e.target.value;
        this.props.updateSearch(this.userInput.toLowerCase());
    }

    togleStyle() {
        if (this.state.backgroundColor === "#515151")
            this.setState({ backgroundColor: "#707070" });
        else this.setState({ backgroundColor: "#515151" });
    }

    render() {
        return (
            <div className="search-tool" style={{...this.props.styleObject, backgroundColor: this.state.backgroundColor}}>
                <img
                    src="/Images/other/magnifying-glass-b6n6n6.svg"
                    className="search-box-magnifying-glass"
                    alt="magnifying glass symbol for search boxes"
                />
                <input
                    type="text"
                    value={this.userInput}
                    onChange={this.handleUserInput}
                    onFocus={this.togleStyle}
                    onBlur={this.togleStyle}
                    className="search-box"
                    style={{ backgroundColor: this.state.backgroundColor, border: this.state.border }}
                />
            </div>
        );
    }
}
