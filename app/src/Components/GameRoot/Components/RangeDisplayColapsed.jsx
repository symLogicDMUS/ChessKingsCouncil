import React from "react";
import {ExpandColapseWidget} from "./ExpandColapseWidget";
import "../css/RangeDisplayColapsed.css";
import "../css/ShowMovesLabel.css";
import {HelpText} from "./HelpText";
import {HelpComponent} from "../../Help/HelpComponent";


export class RangeDisplayColapsed extends React.Component {

    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand(true);
    }

    render() {
        return (
            <div className="range-display-colapsed">
                <div className="show-moves-label">
                    <img src="/Images/range-display.svg" style={{height:16}} alt="text reads 'Range Display'"/>
                </div>
                <ExpandColapseWidget imgName="/Images/range-display-expand-b1faae.svg" togleExpand={this.togleExpand}/>
                <HelpComponent setHelpText={this.props.setHelpText}
                               togleHelpModal={this.props.togleHelpModal}
                               helpTitle="Range Display Tool"
                               helpText={HelpText}
                               hmChildName="none"
                               style={{position:"absolute",
                                    left: 125,
                                    top: 16,
                                    width: 10,
                                    height: 10
                                }}
                               highlighted="/Images/question-mark-72e2ff.svg"
                               normal="/Images/question-mark-b1faae.svg"
                               color="#72e2ff"
                />
            </div>
        )    
    }
}
