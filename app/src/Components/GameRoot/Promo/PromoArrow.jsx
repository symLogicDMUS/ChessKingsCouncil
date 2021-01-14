import React from "react";
import { Button } from "@material-ui/core";
import {fontSizeAlt7 as fontSize} from "../../styles/fontSize.jss";
import {button, useStyles} from "./PromoArrow.jss";

export function PromoArrow({icon, theme}) {
    // const classes = useStyles({fontSize: fontSize, theme: theme})
    return (
        <Button variant="contained" style={button(fontSize, theme)}>
            {/*{icon}*/}
        </Button>
    );
}