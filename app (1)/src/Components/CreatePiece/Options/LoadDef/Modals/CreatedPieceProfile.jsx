import React from "react";
import {CreatePieceProfileWB} from "./CreatePieceProfileWB/CreatePieceProfileWB";
import {CreatedPieceCheckBox} from "./CreatedPieceCheckBox";
import "./CreatedPieceProfile.css";

export class CreatedPieceProfile extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="created-piece-profile">
                <div className="profile-header">
                    <div className="created-piece-name">
                        {this.props.pieceName}
                    </div>
                    <CreatedPieceCheckBox pieceName={this.props.pieceName} select={this.props.select} selectedPiece={this.props.selectedPiece} />
                </div>
                <div className="profile-item">
                    <CreatePieceProfileWB def={this.props.displayDefs[this.props.pieceName]['W']} piece={this.props.pieceName} color='W' expand={this.props.expand} />
                </div>
                <div className="profile-item">
                    <CreatePieceProfileWB def={this.props.displayDefs[this.props.pieceName]['B']} piece={this.props.pieceName} color='B' expand={this.props.expand} />
                </div>
            </div>
        )
    }
}