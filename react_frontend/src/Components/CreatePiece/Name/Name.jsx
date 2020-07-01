import React from "react";
import ReactDOM from "react-dom";
import "./Name.css";

export class Name extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {userInput: ""};
        this.userInput = "";
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        // this.setState({userInput: e.target.value});
        this.userInput = e.target.value;
        this.props.updateName(this.userInput);
    }

    render()
    {
        return (
            <div className="name-component1">
                <img src={require("./Name.svg")} className="name" />
                <input type="text" value={this.userInput} onChange={this.handleUserInput} className="form1" placeholder="enter name of piece..." />
            </div>
        );
    }
}

export default Name;

export let test = () => ReactDOM.render(<Name />, document.getElementById('root'));