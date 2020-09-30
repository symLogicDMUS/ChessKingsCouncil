import React from "react";
import {CreatedPieceProfile} from "./CreatedPieceProfile";
import {offsetToText} from "../../../../helpers/offsetToText";
import {spanToText} from "../../../../helpers/spanToText";
// import {getColorName} from "../../../../helpers/getColorName";
import {CreatePieceExpandModal} from "./CreatePieceProfileWB/CreatePieceExpandModal"
import {CreatedPieceLoadButton} from "./CreatedPieceLoadButton";
import {CreatedPieceClose} from "./CreatedPieceClose";
import {SearchBar} from "./SearchBar";
import "./CreatedPieceProfiles.css";

export class CreatedPieceProfiles extends React.Component {

    constructor(props) {
        super(props);
        this.searchText = "";
        this.state = {binaryValue: true, selected: null};
        this.displayDefs = JSON.parse(JSON.stringify(this.props.defs));
        Object.keys(this.displayDefs).forEach(pieceName => {
            this.displayDefs[pieceName]["W"]["spans"] = this.getSpansText(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsetsText(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["B"]["spans"] = this.getSpansText(this.displayDefs[pieceName]["B"])
            this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsetsText(this.displayDefs[pieceName]["B"])
        });
        this.select = this.select.bind(this);
        this.expand = this.expand.bind(this);
        this.accept = this.accept.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    select(pieceName) {
        if (this.state.selected === pieceName)
            this.setState({selected: null})
        else
            this.setState({selected: pieceName});
    }

    expand(piece, color, value) {
        this.pieceName = piece;
        this.rangeType = value;
        this.color = color;
        this.setState({binaryValue: ! this.state.binaryValue});
    }

    accept() {
        this.props.setUnsaved(false);
        this.props.load(this.state.selected);
        this.props.togleLoadModal(false);
    }

    getExpandModals() {
        if (this.pieceName != null && this.rangeType != null && this.color != null) {
            return ( <CreatePieceExpandModal def={this.defs[this.pieceName][this.color]}
                                    pieceName={this.pieceName}
                                    rangeType={this.rangeType}
                                    color={this.color}
                                    expand={this.expand}
                                    location="d4" />
            );

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

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return Object.keys(this.displayDefs).filter(pieceName => pieceName.toLowerCase().startsWith(this.searchText));
        else
            return Object.keys(this.displayDefs);
    }

    getProfiles() {
        let pieceNames = this.applySearchFilter();
        let profiles = [];
        for (var pieceName of pieceNames) {
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
                            <SearchBar updateSearch={this.updateSearch}/>
                        </div>
                        <div className="created-piece-profiles">
                            {this.getProfiles()}
                        </div>
                        <div className="created-piece-bottom-bar">
                            <CreatedPieceLoadButton accept={this.accept} selected={this.state.selected} />
                        </div>
                    </div>
                </div>
                {this.getExpandModals()}
            </>
        )
    }
}