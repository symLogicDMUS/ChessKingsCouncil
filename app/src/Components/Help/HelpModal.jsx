import React from "react";
import "./HelpModal.css";

export class HelpModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeHelpModal = this.closeHelpModal.bind(this);
    }

    closeHelpModal() {
        this.props.togleHelpModal(false);
    }

    render() {
        return (
            <div className="help-modal">
                <div className="help-modal-window">
                    <div className="help-modal-window-top">
                        <div className="help-modal-window-title">{this.props.helpTitle}</div>
                        <div className="help-modal-window-close" onClick={this.closeHelpModal}>
                            <img
                                src="/Images/close.svg"
                                style={{ width: "15px", height: "15px" }}
                                alt="X symbol to close window"
                            />
                        </div>
                    </div>
                    <div className="help-modal-window-text-area">{this.props.helpText}</div>
                    <div className="help-modal-window-bottom">
                        <button onClick={this.closeHelpModal} className="help-modal-window-bottom-button">
                            Ok
                        </button>
                    </div>
                </div>
                {this.props.children !== undefined && this.props.children}
                <button
                    onClick={this.props.forward}
                    style={{
                        position: "relative",
                        left: 384,
                        width: 30,
                        height: 10,
                        backgroundColor: "#515151",
                        borderRadius: "2px",
                    }}
                >
                    <img
                        src="/Images/right-arrow-a9a9a9.svg"
                        style={{ position: "relative", height: 10, width: 10, left: 10 }}
                    />
                </button>
                <button
                    onClick={this.props.back}
                    style={{
                        position: "relative",
                        left: 424,
                        width: 30,
                        height: 10,
                        backgroundColor: "#515151",
                        borderRadius: "2px",
                    }}
                >
                    <img
                        src="/Images/left-arrow-a9a9a9.svg"
                        style={{ position: "relative", height: 10, width: 10, left: 10 }}
                    />
                </button>
            </div>
        );
    }
}
