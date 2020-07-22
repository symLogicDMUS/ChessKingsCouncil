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
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.setState({highlighted: false});
    }

    setModal() {
        switch(this.props.status) {
            case "saving":
                this.modal = 
                <div className="save-piece-modal">
                    <div className="saving-ellipsis">Saving...</div>;
                </div>
                break;
            case "confirm-overwrite":
                this.modal =                 
                <div className="save-piece-modal">
                    <ConfirmOverwrite  respond={this.ynOverwrite} name={this.props.name} />
                </div>
                break;
            case "success":
                this.modal = 
                <div className="save-piece-modal">
                    <Success saveStatus={this.props.saveStatus} />
                </div>
                break;
            case "blank-name":
                this.modal = <InvalidName header="You must give a piece name before saving." saveStatus={this.props.saveStatus} />;
                break;
            case "invalid-character":
                this.modal = <InvalidName header="Piece names may only contain characters a-z, A-Z, 0-9, or _" saveStatus={this.props.saveStatus} />
                break;
            case "leading-digit":
                this.modal = <InvalidName header="Piece names cannot start with a digit." saveStatus={this.props.saveStatus} />;
                break;
            case "reset":
                this.modal = null;
                this.props.clear();
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

        if (this.state.highlighted)
            this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <>
                <div className="option save-option" onClick={this.save} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <img src={this.src} style={{position:"absolute", width:49, height:68}} />
                </div>
                {this.modal}
            </>
        );
    }
}
export let test = () => ReactDOM.render(<SaveDef />, document.getElementById('root'))