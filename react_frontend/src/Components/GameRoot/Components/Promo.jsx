import React from "react";
import {PromoChoice} from "./PromoChoice";
import "./Promo.css";

export class Promo extends React.Component {

    constructor(props) {

        super(props)
        this.promoChoices = [] //array of objects
        this.boardComponent = this.props.children // InactiveBoard is child

        //appending piece data objects
        let ids = Object.keys(this.props.data.idDict).filter(id_ => this.props.data.idDict[id_] != "Pawn")
        if (! this.props.data.isCouncil)
            ids = ids.filter(id_ => this.props.data.idDict[id_] != "King")

        ids.forEach( id_ => {
            this.promoChoices.push(<PromoChoice  
                promoId={id_}
                data={this.props.data}
                pawnLoc={this.props.pawnLoc}
                />)
        })
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