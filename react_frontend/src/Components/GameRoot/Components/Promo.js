import React from "react";
import {PromoChoice} from "./PromoChoice";
import "./Promo.css";

export class Promo extends React.Component {
    constructor(props) {
        super(props)
        this.pieceDefs = this.props.data.pieceDefs //info on promo choices
        this.promoChoices = [] //array of objects
        this.boardComponent = this.props.children // Board is child
        //appending piece data objects
        for (var [pieceName, pieceData] of Object.entries(this.pieceDefs)) {
            //choice name, data seperate props because need specify
            this.promoChoices.push(<PromoChoice  
                                      data={this.props.data} 
                                      choiceName={pieceName}
                                      choiceData={pieceData}
                                      pawnLoc={this.props.pawnLoc}
                                      />)
        }
    }

    render() {
        return (
            <div>
                <div className="inactive-board">
                    {this.boardComponent}
                </div>
                <div className="img-group">
                    {this.promoChoices}
                </div>
            </div>
        );
    }

}