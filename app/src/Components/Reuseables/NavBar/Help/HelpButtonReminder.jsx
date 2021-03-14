import React from "react";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import {help_text} from "./HelpText.jss";
import {
    button,
    button_content,
    button_text, icon
} from "../../../CreatePiece/Help/HelpText.jss";

export function HelpButtonReminder({fontSize, theme}) {
    return <div>
        <Typography paragraph style={help_text(fontSize, theme)}>
            Remember: You can return to the help menu any time through the Help
            option on the NavBar
            <Button style={button(theme)}>
                <Box style={button_content()}>
                    <ContactSupportIcon style={icon(theme)}/>
                    <Typography style={button_text(theme)}>
                        Help
                    </Typography>
                </Box>
            </Button>
        </Typography>
    </div>;
}