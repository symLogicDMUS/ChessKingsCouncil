import React from "react";
import {MyLoadButton} from "./MyLoadButton";
import {MyDeleteButton} from "./MyDeleteButton";
import {MyPieceProfileWB} from "./MyPieceProfileWB";
import "./MyPieceProfile.css";

export class MyPieceProfile extends React.Component {

    render() {
        return (
            <div className="my-pieces-profile">
                <div className="my-pieces-profile-header">
                    <div className="my-piece-name">
                        {this.props.pieceName}
                    </div>
                    <div className="load-button-container">
                        <MyLoadButton load={this.props.load} 
                                      setPiece={this.props.setPiece} 
                                      pieceName={this.props.pieceName} />
                    </div>
                    <div className="delete-button-container">
                        <MyDeleteButton togleConfirmDeleteModal={this.props.togleConfirmDeleteModal} 
                                        setPiece={this.props.setPiece} 
                                        pieceName={this.props.pieceName} />
                    </div>
                </div>
                <MyPieceProfileWB def={this.props.displayDefs[this.props.pieceName]['W']}
                                  color="W" 
                                  pieceName={this.props.pieceName}
                                  expand={this.props.expand} />
                <MyPieceProfileWB def={this.props.displayDefs[this.props.pieceName]['B']}
                                  color="B" 
                                  pieceName={this.props.pieceName}
                                  expand={this.props.expand} />
            </div>
        )
    }


}