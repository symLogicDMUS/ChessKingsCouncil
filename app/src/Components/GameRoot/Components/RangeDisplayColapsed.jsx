import React from "react";
import {ExpandColapseWidget} from "./ExpandColapseWidget";
import "../css/RangeDisplayColapsed.css";
import "../css/ShowMovesLabel.css";


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
                    <img src="/Images/text-labels/range-display.svg" style={{height:16}} alt="text reads 'Range Display'"/>
                </div>
                <ExpandColapseWidget imgName="/Images/expand/range-display-expand-b1faae.svg" togleExpand={this.togleExpand}/>
            </div>
        )    
    }
}