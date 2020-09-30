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
                        <div className="help-modal-window-title">
                        {this.props.helpTitle}
                        </div>
                        <div className="help-modal-window-close" onClick={this.closeHelpModal}>
                            <img src="/Images/close.svg" style={{ width:"15px", height:"15px"}} alt="X symbol to close window"  />
                        </div>
                    </div>
                    <div className="help-modal-window-text-area">
                        {this.props.helpText}
                    </div>
                    <div className="help-modal-window-bottom">
                        <button onClick={this.closeHelpModal} className="help-modal-window-bottom-button" >Ok</button>
                    </div>
                </div>
                {this.props.children !== undefined && (this.props.children)}
            </div>
        )
    }
}