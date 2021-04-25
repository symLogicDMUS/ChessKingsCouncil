import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {IconButton, SvgIcon} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {icons} from "../../styles/icons/top/icons.jss";
import {themes} from "../../styles/themes/themes.jss";
import { useStyles } from "../SaveResignTool/SaveResignTool.jss";

export function SaveResignExample({theme}) {
    const classes = useStyles({theme});
    return (
        <>
            <Box className={classes.save_resign_tool}>
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.save(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>Save</Typography>
                    </IconButton>
                </Button>
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
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
                        classes={{ label: classes.label }}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.resign(themes[theme].text)}
                        </SvgIcon>
                        <Typography className={classes.text}>Resign</Typography>
                    </IconButton>
                </Button>
            </Box>
        </>
    )
}