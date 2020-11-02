import React from "react";
import ReactDOM from "react-dom";
import "../Options.scss";
import "./Save.scss";

export class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = { highlighted: false };
        this.src = this.props.normal;
        this.save = this.save.bind(this);
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
            // this.props.setUnsaved(false);
            this.props.save();
        }
    }

    render() {
        if (this.state.highlighted) this.src = this.props.highlighted;
        else this.src = this.props.normal;

        return (
            <div className="save-option" onClick={this.save} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <img src={this.src} className="option-img" alt="floppy disk icon for saving a piece" />
            </div>
        );
    }
}
export let test = () => ReactDOM.render(<Save />, document.getElementById("root"));
