import React from "react";

export class Customize extends React.Component {
    
    constructor(props) {
        super(props);
        this.loadNewCustom = this.loadNewCustom.bind(this);
        this.customNew = {}
        this.customNew['records'] = this.props.standardNew['records']
        this.customNew['color'] = 'w'
        this.customNew['fen_data'] = this.props.standardNew['fen_data']
        this.customNew['board'] = this.props.standardNew['board']
        this.customNew['']
    }

    loadNewCustom() {
        this.props.loadNewCustom(this.dataDict)
    }

    render() {
        return(
            <div>Choose the Pieces from list of defined pieces and if they are a pawn promotion or replace one of Queen, Knight or Bishop</div>
        )
    }
}