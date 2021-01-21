import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {IconButton, Portal, SvgIcon} from "@material-ui/core";
import {fontSize002} from "../../styles/fontSize.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {themes} from "../../styles/themes.jss";
import {AnimatePresencePortal} from "../../Reuseables/AnimatePresencePortal";
import {PieceSavedSuccessfully} from "../../CreatePiece/animations/PieceSavedSuccessfully";
import {SaveAs} from "./SaveAs";
import {useStyles} from "./SaveResignTool.jss";


export function SaveResignTool({theme, triggerSaveProcess, resign, changeName, isSaveMessage, messageCallback}) {
    let [saveAs, setSaveAs] = useState(false);
    const classes = useStyles({theme: theme, fontSize: fontSize002 * 1.6});

    return (
        <>
            <Box className={classes.save_resign_tool}>
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{label: classes.label}}
                        onClick={triggerSaveProcess}
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
                        classes={{label: classes.label}}
                        onClick={() => setSaveAs(true)}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.save_as(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>Save As</Typography>
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
                        <Typography className={classes.text}>Resign</Typography>
                    </IconButton>
                </Button>
            </Box>
            {isSaveMessage ? (
                <AnimatePresencePortal>
                    <PieceSavedSuccessfully
                        callback={messageCallback}
                        theme={theme}
                    />
                </AnimatePresencePortal>
            ) : null}
            {saveAs ? (
                <Portal>
                    <SaveAs
                        changeName={changeName}
                        close={() => setSaveAs(false)}
                        save={triggerSaveProcess}
                        theme={theme}
                    />
                </Portal>
            ) : null}
        </>
    );
}
