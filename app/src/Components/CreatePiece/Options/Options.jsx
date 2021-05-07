import React, {useContext} from "react";
import clsx from "clsx";
import AskLoginButton from "../../Home/AskLoginButton";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {UserContext} from "../../../UserContext";
import { useStyles } from "../CreatePiece.jss";

const Save = React.lazy(() => import('./Save'));
const Load = React.lazy(() => import('./Load'));
const Erase = React.lazy(() => import('./Erase'));
const Reset = React.lazy(() => import('./Reset'));

function Options({
    load,
    save,
    reset,
    erase,
    theme,
    pieceName,
    whiteImg,
    blackImg,
    justSaved,
}) {
    const uid = useContext(UserContext);

    const classes = useStyles({ theme: theme });

    return (
        <>
            <Box className={classes.four_button_group}>
                <Typography className={classes.tool_title}>
                    Options
                </Typography>
                <Load
                    load={load}
                    erase={erase}
                    theme={theme}
                    buttonType='option'
                />
                {uid ? (
                    <Save
                        save={save}
                        theme={theme}
                        whiteImg={whiteImg}
                        blackImg={blackImg}
                        pieceName={pieceName}
                        justSaved={justSaved}
                        buttonType='option'
                    />
                ) : (
                    <AskLoginButton buttonType='option' iconName={"save"} text={"Save"} theme={theme}/>
                )}
                <Reset
                    reset={reset}
                    theme={theme}
                    buttonType='option'
                />
                <Erase
                    erase={erase}
                    theme={theme}
                    buttonType='option'
                />
            </Box>
        </>
    );
}

export default Options;
