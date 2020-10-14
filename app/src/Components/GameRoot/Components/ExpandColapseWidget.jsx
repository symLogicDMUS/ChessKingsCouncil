import React from "react";
import "../css/ExpandColapseWidget.css";

export class ExpandColapseWidget extends React.Component {

    render() {
        return(
        <div className="game-play-expand-colapse-widget" onClick={this.props.togleExpand}>
            <img src={this.props.imgName} style={{width:"20px", height:"20px", cursor:"pointer"}} />
        </div>
        )
    }
}