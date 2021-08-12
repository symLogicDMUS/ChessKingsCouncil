import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { UserContext } from "../../../Context/UserContext";
import AskLoginButton from "../../Home/Sign In/AskLoginButton";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./Options.jss.js";

const Save = React.lazy(() => import("./Save"));
const Load = React.lazy(() => import("./Load"));
const Erase = React.lazy(() => import("./Erase"));
const Reset = React.lazy(() => import("./Reset"));

function Options(props) {
    const {
        load,
        save,
        reset,
        erase,
        theme,
        pieceName,
        whiteImg,
        blackImg,
        resetImg,
        justSaved,
        ...other
    } = props;

    const uid = useContext(UserContext);
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <>
            <Box className={classes2.four_button_group} {...other}>
                <Typography className={classes2.tool_title}>Options</Typography>
                <Load
                    load={load}
                    erase={erase}
                    theme={theme}
                    buttonType="option"
                    className={classes.option}
                />
                {uid ? (
                    <Save
                        save={save}
                        theme={theme}
                        whiteImg={whiteImg}
                        blackImg={blackImg}
                        pieceName={pieceName}
                        justSaved={justSaved}
                        buttonType="option"
                        className={classes.option}
                    />
                ) : (
                    <AskLoginButton
                        buttonType="option"
                        iconName={"save"}
                        text={"Save"}
                        theme={theme}
                        isGameOption={false}
                        className={classes.option}
                    />
                )}
                <Reset
                    reset={reset}
                    theme={theme}
                    buttonType="option"
                    className={classes.option}
                />
                <Erase
                    erase={erase}
                    theme={theme}
                    buttonType="option"
                    className={classes.option}
                />
            </Box>
        </>
    );
}

export default Options;
