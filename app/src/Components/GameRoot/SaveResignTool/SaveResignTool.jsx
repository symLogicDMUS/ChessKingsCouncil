import React, { useState } from "react";
import { themes } from "../../styles/themes.jss";
import Typography from "@material-ui/core/Typography";
import { IconButton, Portal, SvgIcon } from "@material-ui/core";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./SaveResignTool.jss";

const SaveAs = React.lazy(() => import('./SaveAs'));
const ResignModal = React.lazy(() => import('./ResignModal'));

function SaveResignTool({
    save,
    resign,
    changeName,
    theme,
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
                    onClick={save}
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
            {saveAs ? (
                <Portal>
                    <SaveAs
                        save={save}
                        theme={theme}
                        changeName={changeName}
                        close={() => setSaveAs(false)}
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

export default SaveResignTool;
