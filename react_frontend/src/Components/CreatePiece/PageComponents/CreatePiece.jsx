import React from "react";

export class CreatePiece extends React.Component {

    constructor(props) {
        super(props)
        this.dataDict = this.props.dataDict
        this.defs = this.props.defs // from defs.json
    }

    render() {
        /**
         * TODO: data about created pieces are stored in defs object with names the keys,
         * the defs array of a game stores the names that apply to it.
         */
        
        return(
            <div>Not implemented yet</div>
        )
    }
}