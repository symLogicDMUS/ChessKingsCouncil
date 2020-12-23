import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton, SvgIcon } from "@material-ui/core";
import { fontSize } from "../../styles/fontSize.jss";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { icons } from "../../styles/icons/top/icons.jss";
import { themes } from "../../styles/themes.jss";
import { useStyles } from "./SaveResignTool.jss";

export function SaveResignTool({
    theme,
    save,
    toggleSaveAs,
    resign,
    gameName,
    gameType,
    playerType,
}) {
    const classes = useStyles({ fontSize });

    return (
        <div className={classes.save_resign_tool}>
            <Box className={classes.options_flexbox}>
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
                        onClick={save}
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
                        classes={{ label: classes.label }}
                        onClick={resign}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.resign(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>
                            Save As
                        </Typography>
                    </IconButton>
                </Button>
            </Box>
            <Box className={classes.game_info}>
                <Typography className={classes.text}>{gameName}</Typography>
                <Typography className={classes.text}>{gameType}</Typography>
                <Typography className={classes.text}>
                    {resolvePlayerType(playerType)}
                </Typography>
            </Box>
        </div>
    );
}
