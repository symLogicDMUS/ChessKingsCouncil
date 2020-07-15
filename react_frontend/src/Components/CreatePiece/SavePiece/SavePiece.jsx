import React from "react";
import ReactDOM from "react-dom";
import { ConfirmOverwrite } from "./Modals/ConfirmOverwrite/ConfirmOverwrite";
import {Success} from "./Modals/Success/Success";
import { InvalidName } from "./Modals/InvalidName/InvalidName";
import "./SavePiece.css";
import "../Options.css";

export class SavePiece extends React.Component {
    
    constructor(props) {
        super(props);
        this.modal = null;
        this.name = "Save";
        this.strokeColor = "#a9a9a9";
        this.save = this.save.bind(this);
        this.ynOverwrite = this.ynOverwrite.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    hoverOn() {
        this.props.hoverResponse(this.name)
    }
  
    hoverOff() {
        this.props.hoverResponse(null);
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

        this.strokeColor = "#a9a9a9";
        if (this.props.mouseOver === this.name)
            this.strokeColor = "#00CCFF";

        return (
            <>
                <div className="option save-option" onClick={this.save} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <svg viewBox="0 0 13.684 19.764">
                        <g transform="translate(-28.183 -58.828)" fill="none" stroke={this.strokeColor} strokeWidth="0.3px" fontSize="5.06px">
                            <path
                             d="M30.9,63.86v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0v.01Zm0-.764v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0v.01Zm0-.835v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0Zm.086-.806v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0Zm0-.849v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0Zm-.049-.722v.01h0c1.712,0,6.849-.01,8.561-.01-1.712,0-6.849-.01-8.561-.01h0Zm-.8-.785H40.169a.247.247,0,0,1,.248.248v5.325a.247.247,0,0,1-.248.248H30.133a.247.247,0,0,1-.248-.248V59.346A.247.247,0,0,1,30.133,59.1Zm.709,7.005v6.122h8.269V66.1Zm.651.755h1.958v3.765H31.493Zm-3.178-7.9V70.821l1.564,1.547H41.735V58.96Z"
                            />
                            <text  transform="translate(35.082 77.592)" stroke="none" fill={this.strokeColor} fontSize="5.06px" fontFamily="Tahoma" >
                            <tspan x={-5.287} y={1}>
                                {"Save"}
                            </tspan>
                            </text>
                        </g>
                    </svg>
                </div>
                {this.modal}
            </>
        );
    }
}
export let test = () => ReactDOM.render(<SavePiece />, document.getElementById('root'))