import React from "react";
import ReactDOM from "react-dom";
import { ConfirmOverwrite } from "./Modals/ConfirmOverwrite/ConfirmOverwrite";
import {Success} from "./Modals/Success/Success";
import "./Save.css";
import { InvalidName } from "./Modals/InvalidName/InvalidName";

export class Save extends React.Component {
    
    constructor(props) {
        super(props);
        this.modal = null;
        this.save = this.save.bind(this);
        this.ynOverwrite = this.ynOverwrite.bind(this);
    }

    setModal() {
        switch(this.props.status) {
            case "saving":
                this.modal = 
                <div className="save-modal">
                    <div className="saving-ellipsis">Saving...</div>;
                </div>
                break;
            case "confirm-overwrite":
                this.modal =                 
                <div className="save-modal">
                    <ConfirmOverwrite  respond={this.ynOverwrite} name={this.props.name} />
                </div>
                break;
            case "success":
                this.modal = 
                <div className="save-modal">
                    <Success saveStatus={this.props.saveStatus} />
                </div>
                break;
            case "blank-name":
                this.modal = <InvalidName header="You must give a piece name before saving" saveStatus={this.props.saveStatus} />;
                break;
            case "invalid-character":
                this.modal = <InvalidName header="Piece names may only contain characters a-z, A-Z, 0-9, and _" saveStatus={this.props.saveStatus} />
                break;
            case "leading-digit":
                this.modal= <InvalidName header="Piece names cannot start with a digit" saveStatus={this.props.saveStatus} />;
                break;
            case "reset":
                this.modal = null;
                this.props.reset()
            case "none":
                this.modal = null;
                break;
            default:
                this.modal = <div style={{color:"red", fontSize:"50px"}}>Unrecognized save status!</div>
                break;
        }
    }

    save() {
        if (this.props.existing.includes(this.props.name))
            this.props.saveStatus("confirm-overwrite");
        else
            this.props.save();        
    }
    
    ynOverwrite(response) {
        if (response === "yes")
            this.props.save(); 
        else
            this.props.saveStatus("none")
    }

    render() {
        
        this.setModal();

        return(
            <>
                <img src={require("./floppyd.svg")} className="save-button" onClick={this.save} />
                {this.modal}
            </>
        );
    }
}
export let test = () => ReactDOM.render(<Save />, document.getElementById('root'))