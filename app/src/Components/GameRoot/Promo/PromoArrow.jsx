import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./PromoArrow.jss";

export function PromoArrow({ icon, theme }) {
    const classes = useStyles({ theme: theme });
    return (
        <Button variant="contained" className={classes.button}>
            {icon}
        </Button>
    );
}
