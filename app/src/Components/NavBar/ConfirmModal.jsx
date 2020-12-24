import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { MuiButton as Button } from "../Reuseables/MuiButton";
import { Close } from "../Reuseables/Close";
import { fontSize } from "../styles/fontSize.jss";
import { button, close_icon, useStyles } from "./ConfirmModal.jss";

export function ConfirmModal({
    text,
    title,
    theme,
    yesClick,
    noClick,
    closeClick,
}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        onClick={closeClick}
                        style={close_icon(fontSize)}
                        theme={theme}
                    />
                </Box>
                <Typography
                    className={classes.title}
                    align={"center"}
                    noWrap={true}
                >
                    {title}
                </Typography>
                <Typography
                    className={classes.paragraph}
                    align={"center"}
                    paragraph={true}
                >
                    {text}
                </Typography>
                <Box className={classes.buttons}>
                    <Button
                        onClick={yesClick}
                        style={{ ...button(fontSize), marginRight: "0.75em" }}
                        variant="contained"
                        theme={theme}
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={noClick}
                        style={{ ...button(fontSize), marginLeft: "0.75em" }}
                        variant="contained"
                        theme={theme}
                    >
                        No
                    </Button>
                </Box>
            </Box>
        </div>
    );
}