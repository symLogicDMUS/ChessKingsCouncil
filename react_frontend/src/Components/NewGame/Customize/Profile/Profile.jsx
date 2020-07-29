import React from "react";
import {CheckBox} from "./CheckBox";
import {SubDropdown} from "./SubDropdown";
import {PieceNameLabel} from "./PieceNameLabel";
import {ProfileWB} from "./ProfileWB/ProfileWB";
import "./Profile.css";

export class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {binaryValue: true};
        this.piece = null;
        this.value = null;
        this.color = null;
        this.returnExpand = this.returnExpand.bind(this);
    }

    returnExpand() {
        return {piece:this.piece, color:this.color, value:this.value};
    }
    
    render() {
        return (
            <div className="new-game-profile">
                <div className="new-game-profile-header">
                    <PieceNameLabel pieceName={this.props.pieceName} nameTooltip={this.props.nameTooltip} />
                    <div className="new-game-substitute">
                        <div className="new-game-sub-label">
                            Sub:
                        </div>
                        <div className="new-game-sub-dropdown-container">
                            <SubDropdown piece={this.props.pieceName} 
                             newReplacement={this.props.newReplacement} 
                             newReplaced={this.props.newReplaced} 
                             togleSub={this.props.togleSub} />
                        </div>               
                    </div>
                    <div className="new-game-promotion">
                        <div className="new-game-promotion-label">
                            Promotion:
                        </div>
                        <div className="new-game-promotion-checkbox-container">
                            <CheckBox toglePromo={this.props.toglePromo} pieceName={this.props.pieceName} promos={this.props.promos} />
                        </div>
                    </div>
                </div>
                <div className="new-game-profile-item"><ProfileWB def={this.props.displayDefs[this.props.pieceName]["W"]} pieceName={this.props.pieceName} color="W" expand={this.props.expand} /></div>
                <div className="new-game-profile-item"><ProfileWB def={this.props.displayDefs[this.props.pieceName]["B"]} pieceName={this.props.pieceName} color="B" expand={this.props.expand} /></div>
            </div>
        );    
    }
}

