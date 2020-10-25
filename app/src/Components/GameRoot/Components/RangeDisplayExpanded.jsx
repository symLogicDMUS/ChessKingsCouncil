import React from "react";
import { RangeBoard } from "./RangeBoard";
import { ExpandColapseWidget } from "./ExpandColapseWidget";
import "../css/RangeDisplayTool.scss";
import "../css/ShowMovesLabel.scss";

export class RangeDisplayExpanded extends React.Component {
    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand(false);
    }
    getStyle() {
        const size = window.screen.availWidth * 0.13;
        return {
            width: size,
            height: size,
            left: window.screen.availWidth * 0.638,
            top: window.screen.availHeight * 0.315
        };
    }
    render() {
        return (
            <div className="range-display-expanded" style={this.getStyle()}>
                <div className="show-moves-label">
                    <img src="/Images/text-labels/range-display.svg" style={{ height: "16px" }} alt="expand icon" />
                </div>
                <ExpandColapseWidget
                    togleExpand={this.togleExpand}
                    expanded={true}
                    imgName={"/Images/colapse/range-display-colapse-b1faae.svg"}
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
        );
    }
}
