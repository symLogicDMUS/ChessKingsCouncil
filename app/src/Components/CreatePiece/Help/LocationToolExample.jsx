import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {fontSize002} from "../../styles/fontSizes.jss";
import {LocationButtonExample} from "./LocationButtonExample";
import {useStyles} from "./LocationToolExample.jss";

export function LocationToolExample({theme}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });
    const [selected, setSelected] = useState('d4');
    return (
        <>
            <div className={classes.location_tool}>
                <Box className={classes.box} style={{justifyContent: 'space-around'}}>
                    <LocationButtonExample
                        rf="d4"
                        theme={theme}
                        key={`location-button-example-d4`}
                        selected={selected === 'd4'}
                        onClick={() => setSelected('d4')}
                    />
                    <LocationButtonExample
                        rf="e4"
                        theme={theme}
                        key={`location-button-example-e4`}
                        selected={selected === 'e4'}
                        onClick={() => setSelected('e4')}
                    />
                    <LocationButtonExample
                        rf="d5"
                        theme={theme}
                        key={`location-button-example-d5`}
                        selected={selected === 'd5'}
                        onClick={() => setSelected('d5')}
                    />
                    <LocationButtonExample
                        rf="e5"
                        theme={theme}
                        key={`location-button-example-e5`}
                        selected={selected === 'e5'}
                        onClick={() => setSelected('e5')}
                    />
                </Box>
            </div>
        </>
    );
}