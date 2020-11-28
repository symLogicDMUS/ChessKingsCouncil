import React from "react";
import { stylesObjects } from "./HelpStyle";
import {styles} from "./MessageModal.jss";

export function MessageModal({ screenCase, toggleMessageModal, messageTitle, messageText }) {
    return (
        <div className={this.props.classes.message_modal}>
            <div className={this.props.classes.message_modal_window}>
                <img
                    src="/Images/close/close.svg"
                    className={this.props.classes.msg_modal_close}
                    onClick={() => toggleMessageModal(false)}
                />
                <div className={this.props.classes.msg_title}>{messageTitle}</div>
                <div className={this.props.classes.msg_text}>{messageText}</div>
                <button
                    className={this.props.classes.msg_ok_button}
                    onClick={() => toggleMessageModal(false)}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
