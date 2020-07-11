import React from "react";
import {SaveGame as SaveButton} from "./SaveGame";
import {RangeSelect} from "./RangeDisplay/RangeSelect";
import "../css/GameRootBottomBar.css";

export class GameRootBottomBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="game-root-bottom-bar">
                <RangeSelect update={this.props.update} 
                             updatePrh={this.props.updatePrh} 
                             allRanges={this.props.allRanges} 
                             rangeDefs={this.props.rangeDefs} 
                             idDict={this.props.idDict}
                />
                <SaveButton save={this.props.save} 
                            update={this.props.update}
                            updateSpecialCase={this.props.updateSpecialCase}
                />
            </div>
        )
    }
}
