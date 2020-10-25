import React from "react";
import "../css/ExpandColapseWidget.scss";

export class ExpandColapseWidget extends React.Component {
    render() {

        var class_ = this.props.expanded ? "game-play-colapse-widget" : "game-play-expand-widget";

        return (
            <div
                className={class_}
                onClick={this.props.togleExpand}
            >
                <img src={this.props.imgName} style={{ width: "100%", height: "100%", cursor: "pointer" }} />
            </div>
        );
    }
}
