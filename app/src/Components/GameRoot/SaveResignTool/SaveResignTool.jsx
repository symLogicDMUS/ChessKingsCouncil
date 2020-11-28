import React, {useState} from "react";
import {getColorName} from "../../helpers/getColorName";
import {useStyles} from "./SaveResignTool.jss";

export function SaveResignTool({save, toggleSaveAs, resign, gameName, gameType, playerType}) {

    let [state, setState] = useState({
        saveHighlighted: false,
        resignHighlighted: false,
        saveAsHighlighted: false,
        saveImg: null,
        saveAsImg: null,
        resignImg: null,
    })

    const classes = useStyles()

    const setNoHighlights = () => {
        setState({
            saveHighlighted: false,
            saveAsHighlighted: false,
            resignHighlighted: false,
            saveImg: "/Images/save/save-b1faae.svg",
            saveAsImg: "/Images/save-as/save-as-b1faae.svg",
            resignImg: "/Images/save/save-b1faae.svg",
        })
    }

    return (
        <div className={classes.save_resign_tool}>
            <div className={classes.game_description}>
                <div className={classes.game_name}>{gameName}</div>
                <div className={classes.gen_info}>
                    ({gameType}, {getColorName(playerType)})
                </div>
            </div>
            <img
                src={state.saveImg}
                className={classes.save_game}
                onClick={() => save()}
                onMouseEnter={() => setState({
                    saveHighlighted: true,
                    saveAsHighlighted: false,
                    resignHighlighted: false,
                    saveImg: "/Images/save/save-72e2ff.svg",
                    saveAsImg: "/Images/save-as/save-as-b1faae.svg",
                    resignImg: "/Images/resign-game/resign-game-b1faae.svg",
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="save icon"
            />
            <img
                src={state.saveAsImg}
                className={classes.save_as}
                onClick={() => toggleSaveAs(true)}
                onMouseEnter={() => setState({
                    saveHighlighted: false,
                    saveAsHighlighted: true,
                    resignHighlighted: false,
                    saveImg: "/Images/save/save-b1faae.svg",
                    saveAsImg: "/Images/save-as/save-as-72e2ff.svg",
                    resignImg: "/Images/resign-game/resign-game-b1faae.svg",
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="save-as icon"
            />
            <img
                src={state.resignImg}
                className={classes.resign}
                onClick={() => resign()}
                onMouseEnter={() => setState({
                    saveHighlighted: false,
                    saveAsHighlighted: false,
                    resignHighlighted: true,
                    saveImg: "/Images/save/save-b1faae.svg",
                    saveAsImg: "/Images/save-as/save-as-b1faae.svg",
                    resignImg: "/Images/resign-game/resign-game-72e2ff.svg",
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="resign icon"
            />
        </div>
    );
}
