import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {IconButton} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../../styles/icons/top/icons.jss";
import {useStyles} from "./ArrowButton.jss"

export const ArrowButton = memo(({angle, isActive, isOffset, toggleSpan, screenCase, theme}) => {
    const classes = useStyles({theme: theme})
    return (
        <>
            {angle === 'mid' ? (
                <Box className={classes.mid} />
            ) : (
                <Box
                    onClick={() => toggleSpan(angle)}
                    className={clsx(classes.arrow_button_container, {
                        [classes.button_container_normal]: ! isActive,
                        [classes.button_container_selected]: isActive,
                        [classes.button_container_thin]: screenCase === "thin",
                        [classes.button_container_adjust]: isOffset && ! isActive,
                    })}
                >
                    <IconButton className={classes.arrow_button}>
                        <SvgIcon className={clsx(classes.vector, {
                            [classes.vector_active]: isActive,
                            [classes.vector_inactive]: ! isActive,
                        })}>
                            {icons[screenCase + "-" + angle]}
                        </SvgIcon>
                    </IconButton>
                </Box>
            )}
        </>
    );
})