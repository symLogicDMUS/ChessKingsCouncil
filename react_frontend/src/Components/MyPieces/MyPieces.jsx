import React from "react";
import {offsetToText} from "../helpers/offsetToText";
import {spanToText} from "../helpers/spanToText";
import {MyPieceProfile} from "./MyPieceProfile";
import {MyPieceConfirmDelete} from "./MyPieceConfirmDelete";
import { MyPiecesDisplayBoardModal } from "./MyPiecesDisplayBoardModal";
import { CreatePiece } from "../CreatePiece/CreatePiece";
import {HelpText} from "./HelpText";
import {HelpModal} from "../Help/HelpModal";
import {HelpComponent} from "../Help/HelpComponent";
import {SearchBar} from "./SearchBar";
import "./MyPieces.css";

export class MyPieces extends React.Component {

    constructor(props) {
        super(props);
        this.state = {binaryValue: true, selectedPiece: null, redirect: false, isHelpModal:false};
        this.deleteModal = false;
        this.displayBoard = null;
        this.pieceName = null;
        this.color = null;
        this.rangeType = null;
        this.deleteDef = this.props.deleteDef;
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
        this.searchText = "";
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = {"none":null}; 
        this.update = this.update.bind(this);
        this.load = this.load.bind(this);
        this.delete = this.delete.bind(this);
        this.setPiece = this.setPiece.bind(this);
        this.expand = this.expand.bind(this);        
        this.togleConfirmDeleteModal = this.togleConfirmDeleteModal.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
        this.updateSearch = this.updateSearch.bind(this)
        this.applySearchFilter = this.applySearchFilter.bind(this);
    }

    componentDidMount() {
        document.body.className="my-pieces-body";
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    setPiece(pieceName) {
        this.setState({selectedPiece: pieceName})
    }
 
    load(pieceName) {
        this.setState({selectedPiece: pieceName, redirect: true});
    }

    togleConfirmDeleteModal(boolVal) {
        this.deleteModal = boolVal;
    }

    delete(pieceName) {
        delete this.defs[pieceName];
        this.deleteDef(pieceName);
        this.update();
    }

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;
    }

    getHelpModalChild() {
        return this.hmChildren[this.hmChildName]
    }

    expand(piece, color, rangeType) {
        this.pieceName = piece;
        this.color = color;
        this.rangeType = rangeType;
        this.setState({binaryValue: ! this.state.binaryValue});
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

    getDisplayBoard() {

        if (this.pieceName != null && this.color != null && this.rangeType != null) 
            return <MyPiecesDisplayBoardModal def={this.defs[this.pieceName][this.color]} 
                                                    rangeType={this.rangeType} 
                                                    color={this.color} 
                                                    pieceName={this.pieceName} 
                                                    expand={this.expand}
                                                    location="d4"
                    />
        else    
            return null;
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return Object.keys(this.defs).filter(pieceName => pieceName.toLowerCase().startsWith(this.searchText));
        else
            return Object.keys(this.defs);
    }

    getProfiles() {

        let profiles = [];
        let pieceNames = this.applySearchFilter();
        for (var pieceName of pieceNames) {
            profiles.push(
                <MyPieceProfile 
                load={this.load}
                expand={this.expand}
                setPiece={this.setPiece}
                pieceName={pieceName}
                displayDefs={this.displayDefs}
                togleConfirmDeleteModal={this.togleConfirmDeleteModal}
                />
            );
        }
        return profiles;

    }

    render() {
        
        if (this.state.redirect) {
            return (
                <CreatePiece defs={this.defs} 
                             updateDefs={this.updateDefs} 
                             defaultPiece={this.state.selectedPiece} />
            )
        }
        
        return (
            <>
                <div className="my-pieces">
                    <div className="top-bar">
                        <div className="title">
                            My Pieces
                        </div>
                        <HelpComponent helpTitle="My Pieces Page"
                                       helpText={HelpText} 
                                       hmChildName="none"
                                       togleHelpModal={this.togleHelpModal}
                                       setHelpText={this.setHelpText}
                                       normal="/Images/question-mark-a9a9a9.svg"
                                       highlighted="/Images/question-mark-0cc.svg"
                                       style={{position: "absolute",
                                                   top: 25,
                                                   left: 202,
                                                   width: 16,
                                                   height: 16
                                            }}
                        />
                        <SearchBar updateSearch={this.updateSearch} />
                    </div>
                    <div className="profiles">
                      {this.getProfiles()}
                    </div>
                </div>
                {this.deleteModal && (
                <MyPieceConfirmDelete 
                  delete={this.delete} 
                  setPiece={this.setPiece}
                  pieceName={this.state.selectedPiece}
                  togleConfirmDeleteModal={this.togleConfirmDeleteModal} 
                />)}
                {this.getDisplayBoard()}
                {this.state.isHelpModal && (<HelpModal togleHelpModal={this.togleHelpModal} 
                                                       helpTitle={this.helpTitle}
                                                       helpText={this.helpText}>
                    {this.getHelpModalChild()}
                </HelpModal>)}
            </>
        )
    }
}