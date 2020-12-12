import React from "react";
import { LocationButton } from "./LocationButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Typography } from "@material-ui/core";
import { fontSize } from "../em.jss";
import { useStyles } from "./Location.jss";

export function Location({ location, setLoc, theme }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });
    return (
        <>
            <div className={classes.location_tool}>
                <Typography className={classes.title}>Location</Typography>
                <ButtonGroup className={classes.button_group}>
                    <LocationButton
                        rf="d4"
                        setLoc={setLoc}
                        classes={{ normal: classes.normal, selected: classes.selected }}
                        selected={location === "d4"}
                    />
                    <LocationButton
                        rf="e4"
                        setLoc={setLoc}
                        classes={{ normal: classes.normal, selected: classes.selected }}
                        selected={location === "e4"}
                    />
                    <LocationButton
                        rf="e5"
                        setLoc={setLoc}
                        classes={{ normal: classes.normal, selected: classes.selected }}
                        selected={location === "e5"}
                    />
                    <LocationButton
                        rf="d5"
                        setLoc={setLoc}
                        classes={{ normal: classes.normal, selected: classes.selected }}
                        selected={location === "d5"}
                    />
                </ButtonGroup>
            </div>
        </>
    );
}
