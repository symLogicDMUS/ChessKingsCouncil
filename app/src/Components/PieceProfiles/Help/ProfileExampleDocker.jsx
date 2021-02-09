import React from "react";
import {v4 as uuidv4} from 'uuid';
import Box from "@material-ui/core/Box";
import {SpanExamplesDocker} from "./SpanExamplesDocker";
import {OffsetExamplesDocker} from "./OffsetExamplesDocker";
import {AvatarExamplesDocker} from "./AvatarExamplesDocker";
import { useStyles } from "./ProfileHelpText.jss";

export const ProfileExampleDocker = ({theme})  => {
    /**children is a header for the profile of the piece */
    const classes = useStyles({theme: theme});

    return (
        <Box className={classes.profile}>
            <AvatarExamplesDocker
                key={uuidv4()}
                theme={theme}
            />
            <SpanExamplesDocker
                key={uuidv4()}
                theme={theme}
            />
            <OffsetExamplesDocker
                key={uuidv4()}
                theme={theme}
            />
        </Box>
    );
};