import React from "react";
import List from "@material-ui/core/List";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import GetAppIcon from '@material-ui/icons/GetApp';
import BlockIcon from '@material-ui/icons/Block';
import MailIcon from "@material-ui/icons/Mail";
import {ToolButton} from "./ToolButton";

export function ToolButtonsExample({}) {
    return (
        <List>
            <ToolButton text="account">
                <AccountCircleIcon />
            </ToolButton>
            <ToolButton text="mail">
                <MailIcon />
            </ToolButton>
            <ToolButton text="spam">
                <BlockIcon />
            </ToolButton>
            <ToolButton text="images">
                <PermMediaIcon />
            </ToolButton>
            <ToolButton text="upload">
                <CloudUploadIcon />
            </ToolButton>
            <ToolButton text="download">
                <GetAppIcon />
            </ToolButton>
        </List>
    );
}