import React from "react";
import "../css/ExpandColapseWidget.css";

export class ExpandColapseWidget extends React.Component {

    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand()
    }


    render() {
        return(
        <div className="game-play-expand-colapse-widget" onClick={this.togleExpand}>
            <img src={this.props.imgName} style={{width:"20px", height:"20px", cursor:"pointer"}} />
        </div>
        )
    }
}