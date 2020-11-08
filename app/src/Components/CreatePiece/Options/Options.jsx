import React from "react";
import { Save } from "./Save/Save";
import { Load } from "./Load/Load";
import { Reset } from "./Reset/Reset";
import { Erase } from "./Erase/Erase";
import { stylesObjects } from "../create-piece-styles-objects";
import "./Options.scss";

export class Options extends React.Component {
    constructor(props) {
        super(props);
        this.screenHeight = window.screen.availHeight;
        this.screenWidth = window.screen.availWidth;
        this.backgroundOn = this.backgroundOn.bind(this);
        this.backgroundOff = this.backgroundOff.bind(this);
        console.log("hello there")
    }

    backgroundOn() {
        this.props.togleOptionTool(false);
    }

    backgroundOff() {
        this.props.togleOptionTool(true);
    }

    render() {
        return (
            <>
            <div className="options-tool" style={stylesObjects[this.props.screenCase]["Options"]()}>
                <div className="options-title">Options</div>
                <Save
                    normal="/Images/save/save-a9a9a9.svg"
                    highlighted="/Images/save/save-72e2ff.svg"
                    existing={this.props.existing}
                    save={this.props.save}
                    name={this.props.name}
                    clear={this.props.clear}
                    status={this.props.saveStatus}
                    setSaveStatus={this.props.setSaveStatus}
                    togleOptionTool={this.props.togleOptionTool}
                    togleMessageModal={this.props.togleMessageModal}
                    setUnsaved={this.props.setUnsaved}
                />
                <Load
                    normal="/Images/load-piece/load-piece-a9a9a9.svg"
                    highlighted="/Images/load-piece/load-piece-72e2ff.svg"
                    togleLoadModal={this.props.togleLoadModal}
                    togleOptionTool={this.props.togleOptionTool}
                />

                <Reset
                    normal="/Images/reset-range/reset-range-a9a9a9.svg"
                    highlighted="/Images/reset-range/reset-range-72e2ff.svg"
                    reset={this.props.reset}
                    togleOptionTool={this.props.togleOptionTool}
                    setUnsaved={this.props.setUnsaved}
                />
                <Erase
                    normal="/Images/erase-range/erase-range-a9a9a9.svg"
                    highlighted="/Images/erase-range/erase-range-72e2ff.svg"
                    eraseRange={this.props.eraseRange}
                    togleOptionTool={this.props.togleOptionTool}
                    setUnsaved={this.props.setUnsaved}
                />
            </div>
            </>
        );
    }
}
