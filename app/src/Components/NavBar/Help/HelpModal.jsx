import React from "react";
import "./HelpModal.scss";

export class HelpModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeHelpModal = this.closeHelpModal.bind(this);
    }

    closeHelpModal() {
        this.props.togleHelpModal(false);
    }

    render() {

        var closeMethod = this.props.firstTime ? this.closeHelpModal : this.props.setToMenu;
        const backCursor = this.props.index === 0 ? "not-allowed" : "pointer";
        const backMethod = this.props.index === 0 ? null : this.props.back;
        const forwardCursor = this.props.index === this.props.numSlides - 1 ? "not-allowed" : "pointer";
        const forwardMethod = this.props.index === this.props.numSlides - 1 ? null : this.props.forward;

        return (
            <div className="help-modal">
                <div className="help-modal-window">
                    <div className="help-modal-window-top">
                        <div className="help-modal-window-title">{this.props.helpTitle}</div>
                        <div className="help-modal-window-close" onClick={closeMethod}>
                            <img
                                src="/Images/close/close.svg"
                                style={{ width: "15px", height: "15px" }}
                                alt="X symbol to close window"
                            />
                        </div>
                    </div>
                    <div className="help-modal-window-text-area">{this.props.helpText}</div>
                    {(!this.props.firstTime || this.props.numSlides === 1) && (
                        <div className="help-modal-window-bottom">
                            <button onClick={closeMethod} className="help-modal-window-bottom-button">
                                Ok
                            </button>
                        </div>
                    )}
                    {this.props.firstTime && this.props.numSlides > 1 && (
                        <>
                            <button
                                onClick={backMethod}
                                style={{
                                    position: "absolute",
                                    top: 390,
                                    left: 230,
                                    width: 90,
                                    height: 30,
                                    color: "#b6b6b6",
                                    textAlign: "center",
                                    fontSize: 16,
                                    paddingTop: 7,
                                    backgroundColor: "#707070",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: backCursor
                                }}
                            >
                                Previous
                            </button>
                            <button
                                onClick={forwardMethod}
                                style={{
                                    position: "absolute",
                                    top: 390,
                                    left: 335,
                                    width: 90,
                                    height: 30,
                                    color: "#b6b6b6",
                                    textAlign: "center",
                                    fontSize: 16,
                                    paddingTop: 7,
                                    backgroundColor: "#707070",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: forwardCursor
                                }}
                            >
                                Next
                            </button>
                            <button
                                onClick={this.closeHelpModal}
                                style={{
                                    position: "absolute",
                                    top: 390,
                                    left: 440,
                                    width: 90,
                                    height: 30,
                                    color: "#b6b6b6",
                                    textAlign: "center",
                                    fontSize: 16,
                                    paddingTop: 7,
                                    backgroundColor: "#707070",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Done
                            </button>
                        </>
                    )}
                </div>
                {this.props.children !== undefined && this.props.children}
            </div>
        );
    }
}

/* 
<img
    src="/Images/left-arrow-a9a9a9.svg"
    style={{ position: "relative", height: 10, width: 10, left: 10 }}
/>
*/
