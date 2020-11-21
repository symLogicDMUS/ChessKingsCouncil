import React from "react";
import ReactDOM from "react-dom";
import { PlayAsOption } from "./PlayAsOption";
import { PlayAsButton } from "./PlayAsButton";
import { NavBar } from '../../NavBar/NavBar';
import { MessageModal } from "../../NavBar/Help/MessageModal";
import "./PlayAs.scss";

export class PlayAs extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = {
            option: null,
            bValue: true,
            messageModal: false,
            theme: "dark",
        };
        this.navExpanded = true;
        this.messageTitle = null;
        this.messageText = null;
        this.hmChildName = null;
        this.update = this.update.bind(this);
        this.accept = this.accept.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
    }

    componentDidMount() {
        document.body.className = "play-as-body";
    }

    update(option) {
        if (this.state.option === option) this.setState({ option: null });
        else this.setState({ option: option });
    }

    accept() {
        this.props.setPlayer(this.state.option);
        this.props.loadNew();
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
    }

    render() {
        return (
            <>
                <NavBar
                    currentPage="LoadGame"
                    theme={this.state.theme}
                    unsavedChanges={false}
                />
                <div className="play-as-title">
                    <img
                        src="/Images/text-labels/play-as.svg"
                        alt="title for picking to play as white, black, or test"
                        style={{ position: "absolute", height: 75, width: 251 }}
                    />
                </div>
                <div className="play-as-options">
                    <PlayAsOption update={this.update} optionName="test" top={0} selected={this.state.option} />
                    <PlayAsOption update={this.update} optionName="W" top={78} selected={this.state.option} />
                    <PlayAsOption update={this.update} optionName="B" top={156} selected={this.state.option} />
                </div>
                <PlayAsButton selected={this.state.option} accept={this.accept} />

                {this.state.messageModal && (
                    <MessageModal
                        togleMessageModal={this.togleMessageModal}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                    />
                )}
            </>
        );
    }
}

export let test = () => ReactDOM.render(<PlayAs />, document.getElementById("root"));
