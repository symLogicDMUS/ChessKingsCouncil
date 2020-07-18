import React from "react";
import {CreatedPieceProfile} from "./CreatedPieceProfile";
import {offsetToText} from "../../../../helpers/offsetToText";
import {spanToText} from "../../../../helpers/spanToText";
import {getColorName} from "../../../../helpers/getColorName";
import {CreatePieceExpandModal} from "./CreatePieceProfileWB/CreatePieceExpandModal"
import {CreatedPieceLoadButton} from "./CreatedPieceLoadButton";
import {CreatedPieceClose} from "./CreatedPieceClose";
import "./CreatedPieceProfiles.css";

export class CreatedPieceProfiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {binaryValue: true, selected: null};
        this.defs = JSON.parse(JSON.stringify(this.props.defs));
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        for (var name of this.standards) {
            delete this.defs[name];
        }
        this.displayDefs = JSON.parse(JSON.stringify(this.defs));
        Object.keys(this.displayDefs).forEach(pieceName => {
            this.displayDefs[pieceName]["W"]["spans"] = this.getSpansText(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsetsText(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["B"]["spans"] = this.getSpansText(this.displayDefs[pieceName]["B"])
            this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsetsText(this.displayDefs[pieceName]["B"])
        });
        this.select = this.select.bind(this);
        this.expand = this.expand.bind(this);
        this.accept = this.accept.bind(this);
    }

    select(pieceName) {
        this.setState({selected: pieceName});
    }

    expand(piece, color, value) {
        this.expandPiece = piece;
        this.expandValue = value;
        this.expandColor = color;
        this.setState({binaryValue: ! this.state.binaryValue});
    }

    accept() {
        this.props.load(this.state.selected);
        this.props.togleLoadModal(false);
    }

    getExpandModals() {
        if (this.expandPiece != null && this.expandValue != null && this.expandColor != null) {

            if (this.expandValue === "color") {
                return <CreatePieceExpandModal piece={this.expandPiece} color={this.expandColor} value={this.expandValue} expand={this.expand}
                        list={[`color: ${getColorName(this.expandColor)}`, 
                               <img src={`/Images/Pieces/${this.displayDefs[this.expandPiece][this.expandColor]["img"]}`}
                                style={{width: "280px", height: "280px"}} />]} 
                                />
            }
            else {
                return <CreatePieceExpandModal piece={this.expandPiece} color={this.expandColor} value={this.expandValue} 
                        list={this.displayDefs[this.expandPiece][this.expandColor][this.expandValue]} expand={this.expand} />
            }
        }
        else
            return <div>{null}</div>
    }


    getSpansText(def) {

        if (def.spans.length === 0) {
            return Array(0);
        }

        let spanStrings = [];
        for (var span of def.spans) {
            spanStrings.push(spanToText(span))
        }
        return spanStrings;
    }
        
    getOffsetsText(def) {

        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = []
        def.offsets.forEach(offset => {
            offsetStrings.push(offsetToText(offset));
        })
        return offsetStrings;
    }


    getProfiles() {
        let profiles = [];
        for (var pieceName of Object.keys(this.defs)) {
            profiles.push(
                <CreatedPieceProfile 
                  expand={this.expand}
                  select={this.select}
                  pieceName={pieceName}
                  displayDefs={this.displayDefs}
                  selectedPiece={this.state.selected}
                />
            );
        }
        return profiles;
    }

    render() {
        return (
            <>
                <div className="load-profile-modal">
                    <div className="created-piece-load-window">

                        <div className="created-piece-load-window-top-bar">
                            <div className="created-piece-load-window-title">
                                Created Pieces
                            </div>
                            <CreatedPieceClose togleLoadModal={this.props.togleLoadModal} />
                        </div>
                        <div className="created-piece-profiles">
                            {this.getProfiles()}
                        </div>
                        <div className="created-piece-bottom-bar">
                            <CreatedPieceLoadButton accept={this.accept} />
                        </div>
                    </div>
                </div>
                {this.getExpandModals()}
            </>
        )
    }
}