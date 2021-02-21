import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton, Portal, SvgIcon } from "@material-ui/core";
import { AnimatePresencePortal } from "../../Reuseables/AnimatePresencePortal";
import { GameSavedSuccessfully } from "../../CreatePiece/animations/GameSavedSuccessfully";
import { SaveAs } from "./SaveAs";
import { themes } from "../../styles/themes.jss";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./SaveResignTool.jss";
import {StandardModal} from "../../Reuseables/StandardModal";
import {MuiButton} from "../../Reuseables/MuiButton";
import {button} from "../../Reuseables/StandardModal.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function SaveResignTool({
    theme,
    triggerSaveProcess,
    resign,
    changeName,
    isSaveMessage,
    messageCallback,
}) {
    let [saveAs, setSaveAs] = useState(false);
    const [resignModal, setResignModal] = useState(false);
    const classes = useStyles({ theme: theme });

    return (
        <>
            <Box className={classes.save_resign_tool}>
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
                        onClick={triggerSaveProcess}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.save(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>Save</Typography>
                    </IconButton>
                </Button>
                <div className={classes.divider} />
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
                        onClick={() => setSaveAs(true)}
                    >
                        <SvgIcon className={classes.icon}>
                            {icons.save_as(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>
                            Save As
                        </Typography>
                    </IconButton>
                </Button>
                <div className={classes.divider} />
                <Button className={classes.option}>
                    <IconButton
                        className={classes.button}
                        classes={{ label: classes.label }}
                        onClick={() => setResignModal(true)}
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
                <Portal>
                    <StandardModal title='Are you sure you want to resign?' theme={theme}>
                        <MuiButton
                            onClick={() => {
                                setResignModal(false)
                                resign()
                            }}
                            style={{...button(fontSize002), marginRight: '1em'}}
                            variant={'contained'}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => setResignModal(false)}
                            style={{...button(fontSize002), marginLeft: '1em'}}
                            variant={'contained'}
                            theme={theme}
                        >
                            No
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
        </>
    );
}
