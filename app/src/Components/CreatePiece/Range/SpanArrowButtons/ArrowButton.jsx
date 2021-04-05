import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {Chip, IconButton} from "@material-ui/core";
import {icons} from "../../../styles/icons/top/icons.jss";
import CloseIcon from "@material-ui/icons/Close";
import MediaQuery from "react-responsive/src";
import {useStyles} from "./ArrowButton.jss"

export const ArrowButton = memo(({angle, isActive, toggleSpan, screenCase, theme, isOffset, toggleMiniVariantTool}) => {
    const classes = useStyles({theme: theme})
    return (
        <>
            {angle === 'mid' ? (
                <Box className={classes.mid} />
            ) : (
                <IconButton
                    onClick={() => toggleSpan(angle)}
                    className={clsx(classes.arrow_button, {
                        [classes.arrow_button_normal]: ! isActive,
                        [classes.arrow_button_selected]: isActive,
                        [classes.arrow_button_adjust]: isOffset && ! isActive,
                    })}
                >
                    <SvgIcon className={clsx(classes.vector, {
                        [classes.vector_active]: isActive,
                        [classes.vector_inactive]: ! isActive,
                    })}>
                        {icons[screenCase + "-" + angle]}
                    </SvgIcon>
                </IconButton>
            )}
            <MediaQuery maxWidth={960}>
                {angle === "45d" ? (
                    <Chip
                        label="Close"
                        onDelete={() => toggleMiniVariantTool("Range")}
                        className={classes.chip}
                    />
                ) : null}
            </MediaQuery>
        </>
    );
})