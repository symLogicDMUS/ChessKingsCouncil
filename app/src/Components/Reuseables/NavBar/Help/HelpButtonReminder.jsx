import React from "react";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { useStyles } from "./HelpText.jss";

export function HelpButtonReminder({theme}) {
    const classes = useStyles({theme});
    return <div>
        <Typography className={classes.text} paragraph>
            Remember: You can return to the help menu any time through the Help
            option on the NavBar
            <Button>
                <Box>
                    <ContactSupportIcon/>
                    <Typography>
                        Help
                    </Typography>
                </Box>
            </Button>
        </Typography>
    </div>;
}