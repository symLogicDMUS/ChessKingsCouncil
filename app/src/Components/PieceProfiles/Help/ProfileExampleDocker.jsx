import React, {memo} from "react";
import {v4 as uuidv4} from 'uuid';
import Box from "@material-ui/core/Box";
import {ProfileWBExampleDocker} from "./ProfileWBExampleDocker";
import { useStyles } from "../Profile.jss";

export const ProfileExampleDocker = ({theme})  => {
    /**children is a header for the profile of the piece */
    const classes = useStyles({theme: theme});

    return (
        <Box className={classes.profile} style={{width: '100%'}}>
            <ProfileWBExampleDocker
                color="W"
                key={uuidv4()}
                theme={theme}
            />
            <ProfileWBExampleDocker
                color="B"
                key={uuidv4()}
                theme={theme}
            />
        </Box>
    );
};