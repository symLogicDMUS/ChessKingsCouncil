import React from "react";
import {RangeBoard} from "./RangeBoard";
import {ExpandColapseWidget} from "./ExpandColapseWidget";
import "../css/RangeDisplayExpanded.css";
import "../css/ShowMovesLabel.css";

export class RangeDisplayExpanded extends React.Component {

    constructor(props) {
        super(props);
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand();
    }

    render() {

        if (this.props.expanded) {
            return (
                <div className="range-display-expanded">
                    <div className="show-moves-label">
                        <img src="/Images/range-display.svg" style={{height:"16px"}} />
                    </div>
                    <ExpandColapseWidget togleExpand={this.togleExpand} imgName={"/Images/range-display-colapse.svg"}/>
                    <RangeBoard 
                                board={this.props.board}
                                allRanges={this.props.allRanges}
                                rangeDefs={this.props.rangeDefs} 
                                idDict={this.props.idDict}
                                update={this.props.update} 
                                updatePrh={this.props.updatePrh}
                    
                    />
                </div>

            )
        }

        else {
            return null;
        }

    }
}