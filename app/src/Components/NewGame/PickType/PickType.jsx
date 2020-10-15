import React from "react";
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import { NavBar } from "../../NavBar/NavBarRegular3";
import { HelpComponent } from "../../Help/HelpComponent";
import { Help } from "../../Help/Help";
import { MessageModal } from "../../Help/MessageModal";
import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { bValue: true, isHelpModal: false, firstTime: false };
        this.helpTitle = null;
        this.hmChildName = null;
        //Dictionary of Extra windows to display for help modals. More may be added.
        this.setMessageText = this.setMessageText.bind(this);
        this.hmChildren = { none: null };
        this.setType = this.setType.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
    }

    componentDidMount() {
        document.body.className = "pick-type-body";
    }

    setType(gameType) {
        this.props.setType(gameType);
        this.props.nextStep();
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal, firstTime: false });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    setFirstTime(firstTime) {
        this.setState({ firstTime: firstTime });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    render() {
        return (
            <>
                <NavBar
                    currentPage="/NewGame"
                    setHelpText={this.setMessageText}
                    togleHelpModal={this.togleMessageModal}
                    navBarPos="relative"
                    navBarPosTop={0}
                    navBarPosLeft="22.2vw"
                    expandColapseColor="000000"
                />
                {this.state.messageModal && (
                    <MessageModal
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}

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
                <HelpComponent
                    pageName="PickType"
                    setFirstTime={this.setFirstTime}
                    togleHelpModal={this.togleHelpModal}
                    fontSize={30}
                    color="#000000"
                />
                {(this.state.isHelpModal || this.state.firstTime) && (
                    <Help
                        pageName="PickType"
                        firstTime={this.state.firstTime}
                        posLeft={263}
                        togleHelpModal={this.togleHelpModal}
                    />
                )}
            </>
        );
    }
}
