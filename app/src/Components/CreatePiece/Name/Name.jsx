import React from "react";
import ReactDOM from "react-dom";
import { stylesObjects } from "../create-piece-styles-objects";
import { styles } from "./Name.jss";

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.userInput = this.props.name;
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.userInput = e.target.value;
        this.props.updateName(this.userInput);
    }

    render() {
        this.userInput = this.props.name;

        return (
            <>
                    <div className={this.props.classes.name_component1}>
                        <div className={this.props.classes.title}>Name</div>
                        <input
                            type="text"
                            value={this.userInput}
                            onChange={this.handleUserInput}
                            className={this.props.classes.form1}
                            placeholder="Enter name of piece..."
                        />
                    </div>
            </>
        );
    }
}

export default Name;

export let test = () => ReactDOM.render(<Name />, document.getElementById("root"));
