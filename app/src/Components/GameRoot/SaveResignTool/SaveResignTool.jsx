import React, {useState} from "react";
import {getColorName} from "../../helpers/getColorName";
import {useStyles} from "./SaveResignTool.jss";

export function SaveResignTool({save, toggleSaveAs, resign, gameName, gameType, playerType}) {

    const classes = useStyles()

    const imgPaths = {
        save: {
            normal: "/Images/save/save-b1faae.svg",
            hover: "/Images/save/save-72e2ff.svg",
        },
        saveAs: {
            normal: "/Images/save-as/save-as-b1faae.svg",
            hover: "/Images/save-as/save-as-72e2ff.svg",
        },
        resign: {
            normal: "/Images/resign-game/resign-game-b1faae.svg",
            hover: "/Images/resign-game/resign-game-72e2ff.svg",
        },
    }

    let [state, setState] = useState({
        saveImg: imgPaths.save.normal,
        saveAsImg: imgPaths.saveAs.normal,
        resignImg: imgPaths.resign.normal,
    })

    const setNoHighlights = () => {
        setState({
            saveImg: imgPaths.save.normal,
            saveAsImg: imgPaths.saveAs.normal,
            resignImg: imgPaths.resign.normal,
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
                    saveImg: imgPaths.save.hover,
                    saveAsImg: imgPaths.saveAs.normal,
                    resignImg: imgPaths.resign.normal,
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="save icon"
            />
            <img
                src={state.saveAsImg}
                className={classes.save_as}
                onClick={() => toggleSaveAs(true)}
                onMouseEnter={() => setState({
                    saveImg: imgPaths.save.normal,
                    saveAsImg: imgPaths.saveAs.hover,
                    resignImg: imgPaths.resign.normal,
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="save-as icon"
            />
            <img
                src={state.resignImg}
                className={classes.resign}
                onClick={() => resign()}
                onMouseEnter={() => setState({
                    saveImg: imgPaths.save.normal,
                    saveAsImg: imgPaths.saveAs.normal,
                    resignImg: imgPaths.resign.hover,
                })}
                onMouseLeave={() => setNoHighlights()}
                alt="resign icon"
            />
        </div>
    );
}
