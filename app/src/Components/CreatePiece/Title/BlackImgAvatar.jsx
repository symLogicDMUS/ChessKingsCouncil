import React from "react";
import { Avatar } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import { useStyles } from "./BlackImgAvatar.jss";

function BlackImgAvatar(props) {
    const { theme, children, ...other } = props;

    const classes = useStyles({ theme });

    return (
        <MediaQuery maxWidth={960}>
            {children && (
                <Avatar
                    src={children}
                    className={classes.avatar}
                    variant={"square"}
                    {...other}
                />
            )}
        </MediaQuery>
    );
}

export default BlackImgAvatar;
