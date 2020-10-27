import React from "react";
import { RangeBoard } from "./RangeBoard";
import { ExpandColapseWidget } from "./ExpandColapseWidget";
import "../css/RangeDisplayTool.scss";

export class RangeDisplayTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: true, isHelpModal: false };
        this.togleExpand = this.togleExpand.bind(this);
    }

    getExpandedStyle() {
        const size = window.screen.availWidth * 0.16;
        return {
            width: size,
            height: size,
            left: window.screen.availWidth * 0.638,
            top: window.screen.availHeight * 0.315,
        };
    }

    getColapsedStyle() {
        return {
            width: window.screen.availWidth * 0.16,
            height: window.screen.height * 0.04,
            left: window.screen.availWidth * 0.638,
            top: window.screen.availHeight * 0.315,
        };
    }

    togleExpand(boolVal) {
        this.setState({ expanded: boolVal });
    }

    render() {
        return (
            <>
                {this.state.expanded && (
                    <div className="range-display-expanded" style={this.getExpandedStyle()}>
                        <div className="show-moves-label">
                            Range Display
                        </div>
                        <ExpandColapseWidget
                            togleExpand={this.togleExpand}
                            isExpanded={true}
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
                )}
                {!this.state.expanded && (
                    <div className="range-display-colapsed" style={this.getColapsedStyle()}>
                        <div className="show-moves-label">
                            Range Display
                        </div>
                        <ExpandColapseWidget
                            imgName="/Images/expand/range-display-expand-b1faae.svg"
                            isExpanded={false}
                            togleExpand={this.togleExpand}
                        />
                    </div>
                )}
            </>
        );
    }
}
