import React from "react";
import ReactDOM from "react-dom";
import { ConfirmOverwrite } from "./Modals/ConfirmOverwrite/ConfirmOverwrite";
import {Success} from "./Modals/Success/Success";
import { InvalidName } from "./Modals/InvalidName/InvalidName";
import "./SaveDef.css";
import "../Options.css";

export class SaveDef extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {highlighted: false};
        this.src = this.props.normal;
        this.modal = null;
        this.name = "Save";
        this.save = this.save.bind(this);
        this.ynOverwrite = this.ynOverwrite.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }
    
    hoverOn() {
        this.props.togleOptionTool(false);
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({highlighted: false});
    }

    save() {
        if (this.props.existing.includes(this.props.name)) {
            this.props.setSaveStatus("confirm-overwrite");
        }
        else {
            this.props.setUnsaved(false);
            this.props.save();
        }
    }
    
    reset() {
        this.props.clear();
        return null;
    }

    ynOverwrite(response) {
        if (response === "yes") {
            this.props.setUnsaved(false);
            this.props.save();
        }
        else {
            this.props.setSaveStatus("none");
        }
    }

    render() {
        
        if (this.state.highlighted)
            this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <>
                <div className="option save-option" onClick={this.save} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <img src={this.src} style={{position:"absolute", width:49, height:68}} alt="floppy disk icon for saving a piece" />
                </div>
                {this.props.status === "saving" && (<div className="save-piece-modal"><div className="saving-ellipsis">Saving...</div>;</div>)}
                {this.props.status === "blank-name" && (<InvalidName header="You must give a piece name before saving." setSaveStatus={this.props.setSaveStatus} />)}
                {this.props.status === "invalid-character" && (<InvalidName header="Piece names may only contain characters a-z, A-Z, 0-9, or _" setSaveStatus={this.props.setSaveStatus} />)}
                {this.props.status === "leading-digit" && (<InvalidName header="Piece names cannot start with a digit." setSaveStatus={this.props.setSaveStatus} />)}
                {this.props.status === "standard-name" && (<InvalidName header="You can not use the name of any of the 6 standard pieces: Rook, Bishop, Knight, King, Queen, and Pawn." setSaveStatus={this.props.setSaveStatus} />)}
                {this.props.status === "no-icon" && (<InvalidName header="You must pick an image icon for both white and black." setSaveStatus={this.props.setSaveStatus} />)}
                {this.props.status === "success" && (<div className="save-piece-modal"><Success setSaveStatus={this.props.setSaveStatus} /></div>)}
                {this.props.status === "confirm-overwrite" && (<div className="save-piece-modal"><ConfirmOverwrite  respond={this.ynOverwrite} name={this.props.name} /></div>)}
                {this.props.status === "reset" && (this.reset()) }
                {this.props.status === "none" && (null) }
            </>
        );
    }
}
export let test = () => ReactDOM.render(<SaveDef />, document.getElementById('root'))