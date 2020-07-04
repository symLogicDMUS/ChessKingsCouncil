import React from "react";
import {PromoChoice} from "../Components/PromoChoice";
import "../css/Promo.css";

export class Promo extends React.Component {

    constructor(props) {

        super(props)
        // array of objects
        this.promoChoices = []
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
            <div className="img-group">
                {this.promoChoices}
            </div>
        );
    }
}