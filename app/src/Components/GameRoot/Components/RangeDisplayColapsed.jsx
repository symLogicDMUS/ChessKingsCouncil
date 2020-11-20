import React from "react";
import { ExpandColapseWidget } from "./ExpandColapseWidget";
import "../scss/RangeDisplayTool.scss";
import "../scss/ShowMovesLabel.scss";

export class RangeDisplayColapsed extends React.Component {
    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }
    togleExpand() {
        this.props.togleExpand(true);
    }
    getStyle() {
        return {
            width: window.screen.availWidth * 0.13,
            height: window.screen.height * 0.04,
            left: window.screen.availWidth * 0.638,
            top: window.screen.availHeight * 0.315,
        };
    }
    render() {
        return (
            <div className="range-display-colapsed" style={this.getStyle()}>
                <img
                    src="/Images/text-labels/range-display.svg"
                    className="show-moves-label"
                    alt="text reads 'Range Display'"
                />
                <ExpandColapseWidget
                    imgName="/Images/expand/range-display-expand-b1faae.svg"
                    expanded={false}
                    togleExpand={this.togleExpand}
                />
            </div>
        );
    }
}
