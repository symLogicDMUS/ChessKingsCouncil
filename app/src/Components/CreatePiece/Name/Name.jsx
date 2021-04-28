import React from "react";
import { Hidden, useMediaQuery} from "@material-ui/core";
import {ToolModal} from "../../NewGame/Customize/ToolModal";
import { MuiTextField as TextField } from
        "../../Reuseables/UserInput/MuiTextField";
import { useStyles } from "./Name.jss";

function Name({
    updateName,
    miniVariantTool,
    toggleMiniVariantTool,
    defaultValue,
    theme,
    clientX,
    clientY,
}) {
    const classes = useStyles({ theme: theme });
    const isThin = useMediaQuery("(max-width: 960px)");

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    return (
        <>
            <Hidden mdUp>
                <ToolModal
                    key='Name'
                    name='Name'
                    theme={theme}
                    clientX={clientX}
                    clientY={clientY}
                    selected={miniVariantTool}
                    className={classes.tool_window}
                    isIn={miniVariantTool==="Name"}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    <TextField
                        theme={theme}
                        fullWidth={true}
                        label="Piece Name"
                        autoComplete="off"
                        autoFocus={true}
                        variant="outlined"
                        onChange={handleInput}
                        defaultValue={defaultValue}
                        size={isThin ? "small" : "medium"}
                        className={classes.name}
                        id="game-name"
                    />
                </ToolModal>
            </Hidden>
            <Hidden smDown>
                <TextField
                    theme={theme}
                    fullWidth={true}
                    label="Piece Name"
                    autoComplete="off"
                    autoFocus={true}
                    variant="outlined"
                    onChange={handleInput}
                    defaultValue={defaultValue}
                    size={isThin ? "small" : "medium"}
                    className={classes.name}
                    id="game-name"
                />
            </Hidden>
        </>
    );
}

export default Name;