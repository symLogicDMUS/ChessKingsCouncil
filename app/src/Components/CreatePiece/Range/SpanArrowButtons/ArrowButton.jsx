import React, {memo, useState} from "react";
import clsx from "clsx";
import {Frame} from "framer";
import Box from "@material-ui/core/Box";
import {IconButton} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../../styles/icons/top/icons.jss";
import {transition, useStyles, variants} from "./ArrowButton.jss";

const ArrowButton = memo(
    ({
        angle,
        isActive,
        toggleSpan,
        screenCase,
        isOffset,
        theme,
    }) => {
        const classes = useStyles({ theme: theme });

        return (
            <>
                <MediaQuery maxWidth={960}>
                    <Frame
                        width='100%'
                        height='100%'
                        initial='start'
                        animate='end'
                        variants={variants}
                        transition={transition}
                        backgroundColor='unset'
                    >
                        <IconButton
                            onClick={() => toggleSpan(angle)}
                            className={clsx(classes.arrow_button, {
                                [classes.arrow_button_selected]: isActive,
                                [classes.arrow_button_adjust]: isOffset && !isActive,
                                [classes.hover]: true,
                            })}
                        >
                            <SvgIcon
                                className={clsx(classes.vector, {
                                    [classes.vector_sm_active]: isActive,
                                    [classes.vector_sm_inactive]: !isActive,
                                })}
                            >
                                {icons[screenCase + "-" + angle]}
                            </SvgIcon>
                        </IconButton>
                    </Frame>
                </MediaQuery>
                <MediaQuery minWidth={960}>
                    {angle === "mid" ? (
                        <Box className={classes.mid} />
                    ) : (
                        <IconButton
                            onClick={() => toggleSpan(angle)}
                            className={clsx(classes.arrow_button, {
                                [classes.arrow_button_normal]: !isActive,
                                [classes.arrow_button_selected]: isActive,
                                [classes.arrow_button_adjust]:
                                    isOffset && !isActive,
                            })}
                        >
                            <SvgIcon
                                className={clsx(classes.vector, {
                                    [classes.vector_lg_active]: isActive,
                                    [classes.vector_lg_inactive]: !isActive,
                                })}
                            >
                                {icons[screenCase + "-" + angle]}
                            </SvgIcon>
                        </IconButton>
                    )}
                </MediaQuery>
            </>
        );
    }
);

export default ArrowButton;