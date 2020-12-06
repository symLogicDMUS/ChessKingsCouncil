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
                promoChoices={this.props.gameroot.promoChoices}
                jsonRecords={this.props.gameroot.jsonRecords}
                board={this.props.gameroot.board}
                idDict={this.props.gameroot.idDict}
                pieceDefs={this.props.gameroot.pieceDefs}
                isCouncil={this.props.gameroot.isCouncil}
                updateTurnData={this.props.gameroot.updateTurnData}
                updateSpecialCase={this.props.gameroot.updateSpecialCase}
                color={this.props.gameroot.getColorLastMove()}
                aiColor={this.props.gameroot.aiColor}
                pawnLoc={this.props.gameroot.specialMoves.pendingPromo}
            />,
            this.el
        );
    }
}

export default Promote;
