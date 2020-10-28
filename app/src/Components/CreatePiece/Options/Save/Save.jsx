import React from "react";
import ReactDOM from "react-dom";
import { ConfirmOverwrite } from "./Modals/ConfirmOverwrite/ConfirmOverwrite";
import { Success } from "./Modals/Success/Success";
import { InvalidName } from "./Modals/InvalidName/InvalidName";
import "./Save.scss";
import "../Options.scss";

export class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = { highlighted: false };
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
        this.setState({ highlighted: true });
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({ highlighted: false });
    }

    save() {
        if (this.props.existing.includes(this.props.name)) {
            this.props.setSaveStatus("confirm-overwrite");
        } else {
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
        } else {
            this.props.setSaveStatus("none");
        }
    }

    render() {
        if (this.state.highlighted) this.src = this.props.highlighted;
        else this.src = this.props.normal;

        return (
            <>
                <div
                    className="save-option"
                    onClick={this.save}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                >
                    <img src={this.src} className="option-img" alt="floppy disk icon for saving a piece" />
                </div>
            </>
        );
    }
}
export let test = () => ReactDOM.render(<Save />, document.getElementById("root"));
