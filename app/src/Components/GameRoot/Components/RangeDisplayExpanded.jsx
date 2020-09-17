import React from "react";
import {RangeBoard} from "./RangeBoard";
import {ExpandColapseWidget} from "./ExpandColapseWidget";
import "../css/RangeDisplayExpanded.css";
import "../css/ShowMovesLabel.css";
import {HelpText} from "./HelpText";
import {HelpComponent} from "../../Help/HelpComponent";

export class RangeDisplayExpanded extends React.Component {

    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand(false);
    }

    render() {
        return (
            <div className="range-display-expanded">
                <div className="show-moves-label">
                    <img src="/Images/range-display.svg" style={{height:"16px"}} alt="expand icon" />
                </div>
                <ExpandColapseWidget togleExpand={this.togleExpand} imgName={"/Images/range-display-colapse-b1faae.svg"}/>
                <HelpComponent setHelpText={this.props.setHelpText}
                               togleHelpModal={this.props.togleHelpModal}
                               helpTitle="Range Display Tool"
                               helpText={HelpText}
                               hmChildName="none"
                               style={{position:"absolute",
                                    left: 125,
                                    top: 16,
                                    width: 10,
                                    height: 10,
                                }}
                               highlighted="/Images/question-mark-72e2ff.svg"
                               normal="/Images/question-mark-b1faae.svg"
                               color="#72e2ff"
                />
                <RangeBoard 
                            board={this.props.board}
                            allRanges={this.props.allRanges}
                            pieceDefs={this.props.pieceDefs} 
                            idDict={this.props.idDict}
                            update={this.props.update} 
                            updatePrh={this.props.updatePrh}
                
                />            
            </div>
        )
    }
}