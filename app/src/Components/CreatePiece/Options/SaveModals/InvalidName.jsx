import React from "react";
import ReactDOM from "react-dom";
import {styles} from "./_InvalidName.jss";

class InvalidName extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {invalidNameModal: false}
    }

    handleClick() {
        this.setState({ invalidNameModal: ! this.state.invalidNameModal  });
        this.props.setSaveStatus("none")
    }

    render() {
        return (<div></div>
            // {this.state.invalidNameModal && (

            // )}
            // <div className="invalid-name">
            //     <img src="/Images/close/close.svg" className="msg-modal-close" onClick={this.handleClick} />
            //     <div className="text">{this.props.header}</div>
            //     <div className="ok-button" onClick={this.handleClick}>
            //         Ok
            //     </div>
            // </div>            
        )
    }
}

export let test = () => ReactDOM.render(<InvalidName />, document.getElementById('root'))