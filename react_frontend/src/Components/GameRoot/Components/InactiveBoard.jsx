import React from "react";
import {InactivePiece} from "./InactivePiece";
import {Square} from "./Square";
import {rankfiles} from "../../helpers/rankfiles"
import {sqrColors} from "../../helpers/sqrColors";
import "../GameRoot.css";

/**for use during pawn promotion */
export class InactiveBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    update() {
        let squares = [];
        var sqr_color="_";
        var id_ = "_";
        for (var rf of rankfiles) {
            sqr_color = sqrColors[rf];
            id_ = this.props.board[rf];
            if (id_ === '#') {
                squares.push(
                    <div className={sqr_color}>
                        <Square sqr_color={sqr_color} >
                            {null}
                        </Square>
                    </div>
                );                        
            }

            else {
                squares.push(
                    <div className={sqr_color}>
                    <Square sqr_color={sqr_color} >
                        <InactivePiece id_={id_} idDict={this.props.idDict} />
                    </Square>
                    </div>
                );
            }
        }

        return squares;
    }

    render() {
        return (
        <div className="grid">
            {this.update()}
        </div>
        );
    }
}

export default InactiveBoard;