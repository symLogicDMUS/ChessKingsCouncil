import React from "react";
import ReactDOM from "react-dom";
import Promo from "./Promo";

class Promote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.el = document.createElement("div");
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        document.getElementById("root").appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById("root").removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <Promo
                promoChoices={this.props.gameRoot.promoChoices}
                jsonRecords={this.props.gameRoot.jsonRecords}
                board={this.props.gameRoot.board}
                idDict={this.props.gameRoot.idDict}
                pieceDefs={this.props.gameRoot.pieceDefs}
                isCouncil={this.props.gameRoot.isCouncil}
                updateTurnData={this.props.gameRoot.updateTurnData}
                updateSpecialCase={this.props.gameRoot.updateSpecialCase}
                color={this.props.gameRoot.getColorLastMove()}
                aiColor={this.props.gameRoot.aiColor}
                pawnLoc={this.props.gameRoot.specialMoves.pendingPromo}
            />,
            this.el
        );
    }
}

export default Promote;
