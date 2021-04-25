import React from "react";
import { Hidden, useMediaQuery} from "@material-ui/core";
import {ToolModal} from "../../NewGame/Customize/ToolModal";
import { MuiTextField as TextField } from "../../Reuseables/UserInput/MuiTextField";
import { useStyles } from "./Name.jss";

function Name({
    updateName,
    miniVariantTool,
    toggleMiniVariantTool,
    defaultValue,
    theme,
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
                    theme={theme}
                    direction='left'
                    className={classes.tool_window}
                    isIn={miniVariantTool==="Name"}
                    onClose={() => toggleMiniVariantTool("Name")}
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