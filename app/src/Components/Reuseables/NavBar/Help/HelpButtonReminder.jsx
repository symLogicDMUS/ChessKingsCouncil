import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { useStyles as useMoreStyles } from "./HelpText.jss";
import { useStyles } from "./HelpButtonReminder.jss";

export function HelpButtonReminder({theme}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});
    return <div>
        <Typography className={classes2.text} paragraph>
            Remember: You can return to the help menu any time through the Help
            option on the NavBar
            <Button>
                <Box className={classes.help_button}>
                    <ContactSupportIcon className={clsx(classes2.text, {
                        [classes.icon]: true,
                    })}/>
                    <Typography className={classes2.text}>
                        Help
                    </Typography>
                </Box>
            </Button>
        </Typography>
    </div>;
}