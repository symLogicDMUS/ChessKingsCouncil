import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {IconButton, SvgIcon} from "@material-ui/core";
import {fontSize} from "../../styles/fontSize.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {themes} from "../../styles/themes.jss";
import {useStyles} from "./SaveResignTool.jss";

export function SaveResignTool({
                                   theme,
                                   save,
                                   toggleSaveAs,
                                   resign,
                               }) {
    const classes = useStyles({theme: theme, fontSize: fontSize * 1.6});

    return (
        <Box className={classes.save_resign_tool}>
            <Button className={classes.option}>
                <IconButton
                    className={classes.button}
                    classes={{label: classes.label}}
                    onClick={save}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.save(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography className={classes.text}>
                        Save
                    </Typography>
                </IconButton>
            </Button>
            <Button className={classes.option}>
                <IconButton
                    className={classes.button}
                    classes={{label: classes.label}}
                    onClick={toggleSaveAs}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.save_as(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography className={classes.text}>
                        Save As
                    </Typography>
                </IconButton>
            </Button>
            <Button className={classes.option}>
                <IconButton
                    className={classes.button}
                    classes={{label: classes.label}}
                    onClick={resign}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.resign(themes[theme].text)}
                    </SvgIcon>
                    <Typography className={classes.text}>
                        Resign
                    </Typography>
                </IconButton>
            </Button>
        </Box>
    );
}
