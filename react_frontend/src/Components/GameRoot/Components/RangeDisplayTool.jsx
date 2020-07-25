import React from "react";
import { RangeDisplayColapsed } from "./RangeDisplayColapsed";
import { RangeDisplayExpanded } from "./RangeDisplayExpanded";
import {HelpText} from "./HelpText";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpModal} from "../../Help/HelpModal";


export class RangeDisplayTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {expanded: true, isHelpModal: false};
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = {"none": null};
        this.togleExpand = this.togleExpand.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.togleExpand = this.togleExpand.bind(this);

    }

    togleExpand(boolVal) {
        this.setState({expanded: boolVal})
    }

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;
    }

    getHelpModalChild() {
        return this.hmChildren[this.hmChildName];
    }

    render() {
        return (
            <>
                {this.state.expanded && (<RangeDisplayExpanded 
                                           togleExpand={this.togleExpand}
                                           togleHelpModal={this.togleHelpModal}
                                           setHelpText={this.setHelpText}
                                           board={this.props.board}
                                           allRanges={this.props.allRanges}
                                           rangeDefs={this.props.rangeDefs} 
                                           idDict={this.props.idDict}
                                           update={this.props.update} 
                                           updatePrh={this.props.updatePrh}
                />)}
                {! this.state.expanded && (<RangeDisplayColapsed togleExpand={this.togleExpand} 
                                                                 togleHelpModal={this.togleHelpModal} 
                                                                 setHelpText={this.setHelpText} 
                />)}
                {this.state.isHelpModal && (
                    <HelpModal helpTitle={this.helpTitle} 
                               helpText={this.helpText} 
                               togleHelpModal={this.togleHelpModal}>
                        {this.getHelpModalChild()}
                    </HelpModal>
                )}
            </>
        )
    }
}

