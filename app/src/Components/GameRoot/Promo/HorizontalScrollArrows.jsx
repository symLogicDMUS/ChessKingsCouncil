import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./HorizontalScrollArrows.jss";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Arrow({icon, isForward }) {
    const classes = useStyles()
    return (
        <Button variant="contained" className={isForward ? classes.forward_button : classes.backward_button}>
            {icon}
        </Button>
    );
}

export const ArrowLeft = <Arrow icon={<NavigateBeforeIcon />} isForward={false} />;
export const ArrowRight = <Arrow icon={<NavigateNextIcon />} isForward={true} />;
