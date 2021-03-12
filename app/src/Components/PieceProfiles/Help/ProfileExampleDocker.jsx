import React from "react";
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
                key={'docker-avatar-example'}
                theme={theme}
            />
            <SpanExamplesDocker
                key={'docker-span-example'}
                theme={theme}
            />
            <OffsetExamplesDocker
                key={'docker-offset-example'}
                theme={theme}
            />
        </Box>
    );
};