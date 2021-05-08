import React, { useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { themes } from "../../styles/themes/themes.jss";
import { IconButton, Portal, SvgIcon } from "@material-ui/core";
import { icons } from "../../styles/icons/top/icons.jss";
import AskLoginButton from "../../Home/AskLoginButton";
import { UserContext } from "../../../UserContext";
import { useStyles } from "./SaveResignTool.jss";

const SaveAs = React.lazy(() => import("./SaveAs"));
const ResignWindow = React.lazy(() => import("./ResignWindow"));

function SaveResignTool({ save, resign, changeName, theme }) {
    const uid = useContext(UserContext);

    const [saveAs, setSaveAs] = useState(false);
    const [resignModal, setResignModal] = useState(false);
    const classes = useStyles({ theme: theme });

    return (
        <>
            <span className={classes.save_resign_tool}>
                {uid ? (
                    <IconButton
                        className={classes.option}
                        classes={{ label: classes.label }}
                        onClick={save}
                    >
                        <SvgIcon>
                            {icons.save(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography className={classes.text}>Save</Typography>
                    </IconButton>
                ) : (
                    <AskLoginButton
                        text={"Save"}
                        iconName={"save"}
                        buttonType="option_alt"
                        theme={theme}
                    />
                )}
                <div className={classes.divider} />
                {uid ? (
                    <IconButton
                        className={classes.option}
                        classes={{ label: classes.label }}
                        onClick={() => setSaveAs(true)}
                    >
                        <SvgIcon>
                            {icons.save_as(themes[theme].button_text)}
                        </SvgIcon>
                        <Typography noWrap className={classes.text}>
                            Save As
                        </Typography>
                    </IconButton>
                ) : (
                    <AskLoginButton
                        text={"Save As"}
                        buttonType="option_alt"
                        iconName={"save_as"}
                        theme={theme}
                    />
                )}
                <div className={classes.divider} />
                <IconButton
                    className={classes.option}
                    classes={{ label: classes.label }}
                    onClick={() => setResignModal(true)}
                >
                    <SvgIcon>{icons.resign(themes[theme].text)}</SvgIcon>
                    <Typography className={classes.text}>Resign</Typography>
                </IconButton>
            </span>
            {saveAs ? (
                <Portal>
                    <SaveAs
                        theme={theme}
                        changeName={changeName}
                        save={() => {
                            save();
                            setSaveAs(false);
                        }}
                        close={() => setSaveAs(false)}
                    />
                </Portal>
            ) : null}
            {resignModal ? (
                <ResignWindow
                    theme={theme}
                    onYesClick={() => {
                        resign();
                        setResignModal(false);
                    }}
                    onNoClick={() => setResignModal(false)}
                />
            ) : null}
        </>
    );
}

export default SaveResignTool;
