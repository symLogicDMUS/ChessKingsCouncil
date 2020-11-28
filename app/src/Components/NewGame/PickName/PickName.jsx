import React from "react";
import NavBar from "../../NavBar/NavBar";
import { MessageModal } from "../../NavBar/Help/MessageModal";
import { InvalidGameName } from "./InvalidGameName";
import { getNameStatus } from "../../helpers/getNameStatus";
import { styles } from "./PickName.jss";
import "./PickName.scss";


class PickName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: "", bValue: true, nameStatus: "none", theme: "dark" };
        this.navExpanded = true;
        this.messageTitle = null;
        this.messageText = null;
        this.handleUserInput = this.handleUserInput.bind(this);
        this.setName = this.setName.bind(this);
        this.setNameStatus = this.setNameStatus.bind(this);
        this.reset = this.reset.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
    }

    componentDidMount() {
        document.body.className = "pick-name-body";
    }

    handleUserInput(e) {
        this.setState({ userInput: e.target.value });
    }

    setNameStatus() {
        this.setState({ nameStatus: getNameStatus(this.state.userInput) });
    }

    reset() {
        this.setState({ nameStatus: null });
    }

    setName() {
        this.props.setName(this.state.userInput);
        this.props.nextStep();
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
                <NavBar currentPage="PickName" theme={this.state.theme} unsavedChanges={false} />
                {this.state.messageModal && (
                    <MessageModal
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                <div class="enter-game-name">
                    <img
                        src="/Images/text-labels/enter-name.svg"
                        className={this.props.classes.game_name_form}
                        alt="title to enter name"
                    />
                    <input
                        type="text"
                        id="gname"
                        value={this.state.userInput}
                        onChange={this.handleUserInput}
                        className={this.props.classes.game_name_form}
                    />
                    <button className={this.props.classes.game_name_accept_button} onClick={this.setNameStatus}>
                        Submit
                    </button>
                </div>
                {this.state.nameStatus === "blank" && (
                    <InvalidGameName header="You can't leave the name of a game blank" reset={this.reset} />
                )}
                {this.state.nameStatus === "invalid-character" && (
                    <InvalidGameName
                        header="Game names may only contain characters a-z, A-Z, 0-9, underscores, spaces, and tabs."
                        reset={this.reset}
                    />
                )}
                {this.state.nameStatus === "valid" && this.setName()}
            </>
        );
    }
}
export default PickName;
