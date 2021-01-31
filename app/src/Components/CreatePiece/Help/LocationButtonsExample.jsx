import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {fontSize002} from "../../styles/fontSizes.jss";
import {LocationButton} from "../Location/LocationButton";
import {useStyles} from "../Location/Location.jss";
import {sub_title} from "../../Reuseables/SubTitle.jss";

export function LocationButtonsExample({theme}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });
    const [selected, setSelected] = useState('d4');
    return (
        <>
            <div className={classes.location_tool} style={{width: '40%'}}>
                <Box className={classes.box} style={{justifyContent: 'space-around'}}>
                    <LocationButton
                        rf="d4"
                        theme={theme}
                        key={uuidv4()}
                        selected={selected === 'd4'}
                        onClick={() => setSelected('d4')}
                    />
                    <LocationButton
                        rf="e4"
                        theme={theme}
                        key={uuidv4()}
                        selected={selected === 'e4'}
                        onClick={() => setSelected('e4')}
                    />
                    <LocationButton
                        rf="d5"
                        theme={theme}
                        key={uuidv4()}
                        selected={selected === 'd5'}
                        onClick={() => setSelected('d5')}
                    />
                    <LocationButton
                        rf="e5"
                        theme={theme}
                        key={uuidv4()}
                        selected={selected === 'e5'}
                        onClick={() => setSelected('e5')}
                    />
                </Box>
            </div>
        </>
    );
}