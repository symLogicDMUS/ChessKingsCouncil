import React from "react";
import {CheckBox} from "./CheckBox";
import {SubDropdown} from "./SubDropdown";
import {ProfileWB} from "./ProfileWB/ProfileWB";
import "./Profile.css";
import "./ProfileWB/ProfileWB.css";
import "./CheckBox.css";
import "./SubDropdown.css";

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
            <div className="profile">
                <div className="profile-header">
                    <div className="name-of-piece">
                        {this.props.pieceName}
                    </div>
                    <div className="substitute">
                        <div className="sub-label">
                            Sub:
                        </div>
                        <div className="sub-dropdown">
                            <SubDropdown piece={this.props.pieceName} 
                             newReplacement={this.props.newReplacement} 
                             newReplaced={this.props.newReplaced} 
                             togleSub={this.props.togleSub} />
                        </div>               
                    </div>
                    <div className="promotion">
                        <div className="promotion-label">
                            Promotion:
                        </div>
                        <div className="promotion-checkbox">
                            <CheckBox togle={this.props.toglePromo} piece={this.props.pieceName} />
                        </div>
                    </div>
                </div>
                <div className="profile-item"><ProfileWB def={this.props.defs[this.props.pieceName]["W"]} piece={this.props.pieceName} color="W" expand={this.props.expand} returnExpand={this.returnExpand} /></div>
                <div className="profile-item"><ProfileWB def={this.props.defs[this.props.pieceName]["B"]} piece={this.props.pieceName} color="B" expand={this.props.expand} returnExpand={this.returnExpand} /></div>
            </div>
        );    
    }
}

