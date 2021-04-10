import React from "react";
import clsx from "clsx";
import { useStyles } from "./Adjuster.jss";

/**
 * invisible component used to fix alignment by a specific amount
 */
export function Adjuster({ width, height, className, children }) {
    const classes = useStyles({ width: width, height: height });
    return (
        <div
            className={clsx(classes.adjuster, {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
}