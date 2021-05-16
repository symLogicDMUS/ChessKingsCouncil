import React, { useContext, useState } from "react";
import { Portal } from "@material-ui/core";
import AskLoginButton from "../../Home/AskLoginButton";
import { UserContext } from "../../../UserContext";
import { useStyles } from "./SaveResignTool.jss";

const SaveAs = React.lazy(() => import("./SaveAs"));
const ResignWindow = React.lazy(() => import("./ResignWindow"));
const Option = React.lazy(() => import('../../Reuseables/Clickables/Option'));

function SaveResignTool({ save, resign, changeName, theme }) {
    const uid = useContext(UserContext);

    const [saveAs, setSaveAs] = useState(false);
    const [resignModal, setResignModal] = useState(false);
    const classes = useStyles({ theme: theme });

    return (
        <>
            <span className={classes.save_resign_tool}>
                {uid ? (
                    <Option
                        name={"Save"}
                        onClick={save}
                        iconType={"save"}
                        isGameOption={true}
                        theme={theme}
                    />
                ) : (
                    <AskLoginButton
                        text={"Save"}
                        iconName={"save"}
                        buttonType="option"
                        isGameOption={true}
                        theme={theme}
                    />
                )}
                <div className={classes.divider} />
                {uid ? (
                    <Option
                        name={"Save As"}
                        iconType={"save_as"}
                        onClick={() => setSaveAs(true)}
                        isGameOption={true}
                        theme={theme}
                    />
                ) : (
                    <AskLoginButton
                        text={"Save As"}
                        buttonType="option"
                        iconName={"save_as"}
                        isGameOption={true}
                        theme={theme}
                    />
                )}
                <div className={classes.divider} />
                <Option
                    name={"Resign"}
                    iconType={"resign"}
                    onClick={() => setResignModal(true)}
                    isGameOption={true}
                    theme={theme}
                />
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
