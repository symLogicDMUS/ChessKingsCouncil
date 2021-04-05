import React from "react";
import clsx from "clsx";
import { useStyles } from "./Adjuster.jss";

export function Adjuster({ width, height, className }) {
    const classes = useStyles({ width: width, height: height });
    return (
        <div
            className={clsx(classes.adjuster, {
                [className]: className,
            })}
        />
    );
}