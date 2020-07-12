import React from "react";
import { RangeDisplayColapsed } from "./RangeDisplayColapsed";
import { RangeDisplayExpanded } from "./RangeDisplayExpanded";

export class RangeDisplayTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {expanded: true}
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.setState({expanded: ! this.state.expanded})
    }

    render() {
        return (
            <>
                <RangeDisplayExpanded
                                  expanded={this.state.expanded} 
                                  togleExpand={this.togleExpand}
                                  board={this.props.board}
                                  allRanges={this.props.allRanges}
                                  rangeDefs={this.props.rangeDefs} 
                                  idDict={this.props.idDict}
                                  update={this.props.update} 
                                  updatePrh={this.props.updatePrh}
                />
                <RangeDisplayColapsed expanded={this.state.expanded} togleExpand={this.togleExpand} />
            </>
        )
    }
}

