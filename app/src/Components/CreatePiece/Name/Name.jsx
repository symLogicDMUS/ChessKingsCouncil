import React, {useState} from "react";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {MuiTextField, MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {genStyle, getLabel, getPlaceholder, getStyleOverride, textFieldStyle, useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue, screenCase}) {
    const [name, setName] = useState("");
    const classes = useStyles({theme: theme})

    const handleInput = (e) => {
        setName(e.target.value)
    };

    return (
        <div className={classes.name} onMouseLeave={() => updateName(name)}>
            <TextField
                onChange={handleInput}
                genStyle={genStyle()}
                defaultValue={defaultValue}
                label={getLabel(resolveScreenCase(screenCase))}
                style={textFieldStyle(resolveScreenCase(screenCase))}
                placeholder={getPlaceholder(resolveScreenCase(screenCase))}
                styleOverride={getStyleOverride(resolveScreenCase(screenCase))}
                size={screenCase === 'mobile' ? 'small' : 'medium'}
                autoComplete="off"
                variant="outlined"
                id="game-name"
                theme={theme}
            />
        </div>
    );
}