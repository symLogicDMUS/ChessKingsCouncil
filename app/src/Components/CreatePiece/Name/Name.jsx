import React from "react";
import ReactDOM from "react-dom";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
import "./Name.css";

export class Name extends React.Component {
    
    constructor(props) {
        super(props);
        this.userInput = this.props.name;
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.userInput = e.target.value;
        this.props.setUnsaved(true);
        this.props.updateName(this.userInput);
    }

    render()
    {
        this.userInput = this.props.name;
        
        return (
            <div className="name-component1">
                <div className="name" >Name</div>
                <HelpComponent helpTitle="Picking the Name of Your Piece"
                               hmChildName="none"
                               helpText={HelpText}
                               togleHelpModal={this.props.togleHelpModal} 
                               setHelpText={this.props.setHelpText} 
                               style={{left:59, top:16, zIndex:"inherit", width:10, height:10}}
                               normal="/Images/question-mark-a9a9a9.svg"
                               highlighted="/Images/question-mark-72e2ff.svg"
                               color="#72e2ff"                               
                />
                <input type="text" value={this.userInput} onChange={this.handleUserInput} className="form1" placeholder="enter name of piece..." />
            </div>
        );
    }
}

export default Name;

export let test = () => ReactDOM.render(<Name />, document.getElementById('root'));