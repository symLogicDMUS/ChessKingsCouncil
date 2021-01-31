import Typography from "@material-ui/core/Typography";
import {help_text} from "./HelpText.jss";
import {Button} from "@material-ui/core";
import {button, button_content, button_text, icon} from "../../CreatePiece/Help/HelpText.jss";
import Box from "@material-ui/core/Box";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import React from "react";
import {fontSize002} from "../../styles/fontSizes.jss";

export function HelpButtonReminder({theme}) {
    return <div>
        <Typography paragraph style={help_text(fontSize002, theme)}>
            Remember: You can return to the help menu any time through the Help
            option on the NavBar
            <Button style={button(theme)}>
                <Box style={button_content()}>
                    <ContactSupportIcon style={icon()}/>
                    <Typography style={button_text(theme)}>
                        Help
                    </Typography>
                </Box>
            </Button>
        </Typography>
    </div>;
}