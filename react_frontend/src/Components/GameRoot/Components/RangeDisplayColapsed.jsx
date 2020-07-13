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
        this.props.togleExpand();
    }

    render() {

        if (! this.props.expanded) {
            return (
                <div className="range-display-colapsed">
                    <div className="show-moves-label">
                        <img src="/Images/range-display.svg" style={{height:16}}/>
                    </div>
                    <ExpandColapseWidget imgName={"/Images/range-display-expand.svg"} togleExpand={this.togleExpand}/>
    
                </div>
            )    
        }
        
        else {
            return null;
        }

    }
}