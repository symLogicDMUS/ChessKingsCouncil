import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.userInput = null;
        this.state = {border: "1px solid #707070", backgroundColor: "#515151"}
        this.handleUserInput = this.handleUserInput.bind(this);
        this.togleStyle = this.togleStyle.bind(this);
        this.togleBorderHighlight = this.togleBorderHighlight.bind(this);
        this.togleBackgroundColor = this.togleBackgroundColor.bind(this);
    }

    handleUserInput(e) {
        this.userInput = e.target.value;
        this.props.updateSearch(this.userInput.toLowerCase());
    }

    togleBorderHighlight() {
        if (this.state.border === "1px solid #707070")
            this.setState({border: "1px solid #5c9fd2"})
        else
            this.setState({border: "1px solid #707070"});
    }

    togleBackgroundColor() {
        if (this.state.backgroundColor === "#515151")
            this.setState({backgroundColor: "#707070"})
        else
            this.setState({backgroundColor: "#515151"})
    }

    togleStyle() {
        if (this.state.backgroundColor === "#515151" && this.state.border === "1px solid #707070")
            this.setState({backgroundColor: "#707070", border: "1px solid #5c9fd2"})
        else
            this.setState({backgroundColor: "#515151", border: "1px solid #707070"})
    }

    render() {
        return (
            <div className="new-game-customize-top-bar-search" style={{backgroundColor: this.state.backgroundColor}}>
                <img src="/Images/magnifying-glass-b6n6n6.svg" 
                     className="new-game-customize-top-bar-search-magnifying-glass" 
                     alt="magnifying glass symbol for search boxes" 
                />
                <input type="text" 
                       value={this.userInput} 
                       onChange={this.handleUserInput} 
                       onFocus={this.togleStyle} 
                       onBlur={this.togleStyle} 
                       className="new-game-customize-top-bar-search-box" 
                       style={{backgroundColor: this.state.backgroundColor, fontFamily: "Tahoma"}}/>
            </div>
        )
    }

}