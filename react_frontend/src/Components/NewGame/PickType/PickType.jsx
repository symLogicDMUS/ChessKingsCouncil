import React from "react"
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import {NavBar} from "../../NavBar/NavBarRegular3";
import {StaticHelpComponent} from "../../Help/StaticHelpComponent";
import {HelpText} from "./HelpText";
import {HelpModal} from "../../Help/HelpModal";
import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true, isHelpModal: false};
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = null;
        //Dictionary of Extra windows to display for help modals. More may be added.
        this.hmChildren = {"none":null} 
        this.setType = this.setType.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
    }

    componentDidMount() {
        document.body.className="pick-type-body";
    }

    setType(gameType) {
        this.props.setType(gameType);
        this.props.nextStep();
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({bValue: ! this.state.bValue});
    }

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;
    }

    render() {
        return(
            <>
                <NavBar currentPage="/NewGame" 
                        setHelpText={this.setHelpText} 
                        togleHelpModal={this.togleHelpModal} 
                        navBarPos="relative" navBarPosTop={0} 
                        navBarPosLeft="22.2vw" 
                        expandColapseColor="000000" />
                <svg viewBox="0 0 1920 1080">
                    <defs>
                        <clipPath id="b">
                            <rect width={1920} height={1080} />
                        </clipPath>
                    </defs>
                    <g id="a" className="a">
                            <Custom setType={this.setType} />
                            <Standard setType={this.setType} />
                            <Council setType={this.setType} />
                            <Title />
                    </g>
                </svg>
                <StaticHelpComponent helpTitle="Explaining Game Types"
                                     helpText={HelpText}
                                     hmChildName="none"
                                     setHelpText={this.setHelpText}
                                     togleHelpModal={this.togleHelpModal}
                                     normal="/Images/static-question-mark-000000.svg"
                                     highlighted="/Images/static-question-mark-ffffff.svg"
                                     width="3vw" left="64vw" top="43.5vh"
                />
                {this.state.isHelpModal && (<HelpModal helpTitle={this.helpTitle}
                                                       helpText={this.helpText}
                                                       hmChildName={this.hmChildName}
                                                       extraModal={null}
                                                       togleHelpModal={this.togleHelpModal}/>)}
            </>
        );
    }
}


