import React from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import {fontSize002} from "../../styles/fontSizes.jss";
import {LocationButton} from "../Location/LocationButton";
import {useStyles} from "../Location/Location.jss";

export function LocationButtonsExample({theme}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });
    return (
        <>
            <div className={classes.location_tool} style={{width: '40%'}}>
                <Box className={classes.box} style={{justifyContent: 'space-around'}}>
                    <LocationButton
                        rf="d4"
                        selected={false}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="e4"
                        selected={false}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="d5"
                        selected={false}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="e5"
                        selected={false}
                        theme={theme}
                        key={uuidv4()}
                    />
                </Box>
            </div>
        </>
    );
}