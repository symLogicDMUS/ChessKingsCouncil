import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { IconButton, Portal, SvgIcon } from "@material-ui/core";
import { AnimatePresencePortal } from "../../Reuseables/Animations/AnimatePresencePortal";
import { GameSavedSuccessfully } from "../../CreatePiece/animations/GameSavedSuccessfully";
import { SaveAs } from "./SaveAs";
import { themes } from "../../styles/themes.jss";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./SaveResignTool.jss";
import { ResignModal } from "./ResignModal";

export function SaveResignTool({
    theme,
    triggerSaveProcess,
    resign,
    changeName,
    isSaveMessage,
    messageCallback,
}) {
    const [saveAs, setSaveAs] = useState(false);
    const [resignModal, setResignModal] = useState(false);
    const classes = useStyles({ theme: theme });

    return (
        <>
            <span className={classes.save_resign_tool}>
                <IconButton
                    className={classes.option}
                    classes={{ label: classes.label }}
                    onClick={triggerSaveProcess}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.save(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography className={classes.text}>Save</Typography>
                </IconButton>
                <div className={classes.divider} />
                <IconButton
                    className={classes.option}
                    classes={{ label: classes.label }}
                    onClick={() => setSaveAs(true)}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.save_as(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography noWrap className={classes.text}>
                        Save As
                    </Typography>
                </IconButton>
                <div className={classes.divider} />
                <IconButton
                    className={classes.option}
                    classes={{ label: classes.label }}
                    onClick={() => setResignModal(true)}
                >
                    <SvgIcon className={classes.icon}>
                        {icons.resign(themes[theme].text)}
                    </SvgIcon>
                    <Typography className={classes.text}>Resign</Typography>
                </IconButton>
            </span>
            {isSaveMessage ? (
                <AnimatePresencePortal>
                    <GameSavedSuccessfully
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
            {resignModal ? (
                <ResignModal
                    theme={theme}
                    onYesClick={() => {
                        setResignModal(false);
                        resign();
                    }}
                    onNoClick={() => setResignModal(false)}
                />
            ) : null}
        </>
    );
}
