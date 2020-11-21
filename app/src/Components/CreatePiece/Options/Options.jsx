import React from "react";
import { Option } from "./Option";
import { stylesObjects } from "../create-piece-styles-objects";
import "./_Options.scss";

export class Options extends React.Component {
    constructor(props) {
        super(props);
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.erase = this.erase.bind(this);
    }
    load() {
        this.props.togleLoadModal(true);
    }
    save() {
        if (this.props.namesOfExistingPieces.includes(this.props.name)) {
            this.props.setSaveStatus("confirm-overwrite");
        } else {
            this.props.save();
        }
    }
    reset() {
        this.props.reset();
    }
    erase() {
        this.props.eraseRange();
    }

    render() {
        return (
            <>
                <div className="options-tool" style={stylesObjects[this.props.screenCase]["Options"]()}>
                    <div className="options-title">Options</div>
                    <Option
                        className="load-option"
                        normal="/Images/load-piece/load-piece-a9a9a9.svg"
                        highlighted="/Images/load-piece/load-piece-72e2ff.svg"
                        clickMethod={this.load}
                        alt="on click opens list of pieces to load"
                    />
                    <Option
                        className="save-option"
                        normal="/Images/save/save-a9a9a9.svg"
                        highlighted="/Images/save/save-72e2ff.svg"
                        clickMethod={this.save}
                        alt="on click saves piece if right criteria are met"
                    />
                    <Option
                        className="reset-option"
                        normal="/Images/reset-range/reset-range-a9a9a9.svg"
                        highlighted="/Images/reset-range/reset-range-72e2ff.svg"
                        clickMethod={this.reset}
                        alt="on click resets the to last save or blank if not saved"
                    />
                    <Option
                        className="erase-option"
                        normal="/Images/erase-range/erase-range-a9a9a9.svg"
                        highlighted="/Images/erase-range/erase-range-72e2ff.svg"
                        clickMethod={this.erase}
                        alt="on click erases everything"
                    />
                </div>
            </>
        );
    }
}
