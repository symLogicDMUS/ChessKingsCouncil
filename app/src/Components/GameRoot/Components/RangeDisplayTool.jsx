import React from "react";
import { RangeDisplayColapsed } from "./RangeDisplayColapsed";
import { RangeDisplayExpanded } from "./RangeDisplayExpanded";


export class RangeDisplayTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {expanded: true, isHelpModal: false};
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = {"none": null};
        this.togleExpand = this.togleExpand.bind(this);
        this.togleExpand = this.togleExpand.bind(this);

    }

    togleExpand(boolVal) {
        this.setState({expanded: boolVal})
    }





    getHelpModalChild() {
        return this.hmChildren[this.hmChildName];
    }

    render() {
        return (
            <>
                {this.state.expanded && (<RangeDisplayExpanded 
                                           togleExpand={this.togleExpand}
                                           togleHelpModal={this.props.togleHelpModal}
                                           setHelpText={this.props.setHelpText}
                                           board={this.props.board}
                                           allRanges={this.props.allRanges}
                                           pieceDefs={this.props.pieceDefs} 
                                           idDict={this.props.idDict}
                                           update={this.props.update} 
                                           updatePrh={this.props.updatePrh}
                />)}
                {! this.state.expanded && (<RangeDisplayColapsed togleExpand={this.togleExpand} 
                                                                 togleHelpModal={this.props.togleHelpModal} 
                                                                 setHelpText={this.props.setHelpText} 
                />)}
            </>
        )
    }
}

