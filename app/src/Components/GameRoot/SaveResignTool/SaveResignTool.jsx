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
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.save_resign_tool}>
            <Box className={classes.game_info_titles}>
                <Typography className={classes.title_labels_text}>Game Name</Typography>
                <Typography className={classes.title_labels_text}>Game Type</Typography>
                <Typography className={classes.title_labels_text}>Player Type</Typography>
            </Box>
            <Box className={classes.game_info}>
                <Typography className={classes.title_text}>{gameName}</Typography>
                <Typography className={classes.title_text}>{gameType}</Typography>
                <Typography className={classes.title_text}>
                    {resolvePlayerType(playerType)}
                </Typography>
            </Box>
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
                        <Typography className={classes.option_text}>
                            Save
                        </Typography>
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
                        <Typography className={classes.option_text}>
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
                            {icons.resign(themes[theme].text)}
                        </SvgIcon>
                        <Typography className={classes.option_text}>
                            Resign
                        </Typography>
                    </IconButton>
                </Button>
            </Box>
        </div>
    );
}
