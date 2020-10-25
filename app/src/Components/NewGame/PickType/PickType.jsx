import React from "react";
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import { NavBar } from "../../NavBar/NavBar";
import { MessageModal } from "../../NavBar/Help/MessageModal";
import "./PickType.scss";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { bValue: true,  theme: "dark" };
        this.helpTitle = null;
        this.hmChildName = null;
        //Dictionary of Extra windows to display for help modals. More may be added.
        this.setMessageText = this.setMessageText.bind(this);
        this.hmChildren = { none: null };
        this.setType = this.setType.bind(this);
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


    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
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
                    currentPath="/NewGame"
                    currentPage="PickType"
                    theme={this.state.theme}
                    togleMessageModal={this.togleMessageModal}
                    setHelpText={this.setMessageText}
                    startingProperties={{ initLeft: 0, initTop: 0 }}
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
            </>
        );
    }
}
