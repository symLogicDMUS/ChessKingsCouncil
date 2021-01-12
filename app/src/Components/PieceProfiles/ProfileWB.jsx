import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../helpers/resolvePlayerType";
import { fontSizeAlt2 as fontSize } from "../styles/fontSize.jss";
import { stepFuncNamesToText } from "../helpers/spanToText";
import { offsetToText } from "../helpers/offsetToText";
import ScrollTable from "../Reuseables/ScrollTable";
import { ProfileAvatar } from "./ProfileAvatar";
import { DisplayBoardModal } from "./DisplayBoardModal/DisplayBoardModal";
import {adjustFontSize, useStyles } from "./ProfileWB.jss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * def: spans, offsets, and img of W or B piece
 * */
export function ProfileWB({
    pieceName,
    color,
    def,
    theme,
    screenCase,
}) {
    let [modal, setModal] = useState(false);
    let [rangeType, setRangeType] = useState(null);

    const classes = useStyles({ fontSize: fontSize, theme: theme });

    const getSpans = (def) => {
        if (def.spans.length === 0) {
            return Array(0);
        }
        let spanStrings = [];
        for (const span of def.spans) {
            spanStrings.push(stepFuncNamesToText[span]);
        }
        return spanStrings;
    };

    const getOffsets = (def) => {
        if (def.offsets.length === 0) {
            return Array(0);
        }
        let offsetStrings = [];
        def.offsets.forEach((offset) => {
            offsetStrings.push(offsetToText(offset));
        });
        return offsetStrings;
    };

    return (
        <>
            {modal ? (
                <Portal>
                    <DisplayBoardModal
                        theme={theme}
                        color={color}
                        img={def.img}
                        pieceName={pieceName}
                        rangeType={rangeType}
                        range={def[rangeType]}
                        location="d4"
                        close={() => {
                            setRangeType(null);
                            setModal(false);
                        }}
                    />
                </Portal>
            ) : null}
            <div className={classes.profile_wb}>
                <ProfileAvatar
                    pieceName={pieceName}
                    color={color}
                    src={def.img}
                    theme={theme}
                />
                {/*<ScrollTable*/}
                {/*    numRows={5}*/}
                {/*    listItems={getOffsets(def)}*/}
                {/*    title={*/}
                {/*        <Box className={classes.range_header}>*/}
                {/*            <IconButton*/}
                {/*                className={classes.range_expand_widget}*/}
                {/*                onClick={() => {*/}
                {/*                    setRangeType("offsets");*/}
                {/*                    setModal(true);*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <AddIcon*/}
                {/*                    className={classes.range_expand_icon}*/}
                {/*                />*/}
                {/*            </IconButton>*/}
                {/*            <Box className={classes.box}>*/}
                {/*                <Typography*/}
                {/*                    className={classes.range_title}*/}
                {/*                    noWrap*/}
                {/*                >*/}
                {/*                    {resolvePlayerType(color)} Offsets*/}
                {/*                </Typography>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}
                {/*    }*/}
                {/*    style={{*/}
                {/*        fontSize: adjustFontSize(fontSize, screenCase),*/}
                {/*        width: screenCase === "desktop" ? "11.55em" : "7.5em",*/}
                {/*        isOutline: true,*/}
                {/*    }}*/}
                {/*    buttonStyle={{ borderRadius: 0 }}*/}
                {/*    theme={theme}*/}
                {/*/>*/}
                <ScrollTable
                    numRows={5}
                    listItems={getSpans(def)}
                    title={
                        <Box className={classes.range_header}>
                            <IconButton
                                className={classes.range_expand_widget}
                                onClick={() => {
                                    setRangeType("spans");
                                    setModal(true);
                                }}
                            >
                                <AddIcon
                                    className={classes.range_expand_icon}
                                />
                            </IconButton>
                            <Box className={classes.box}>
                                <Typography
                                    className={classes.range_title}
                                    noWrap
                                >
                                    {resolvePlayerType(color)} Spans
                                </Typography>
                            </Box>
                        </Box>
                    }
                    style={{
                        fontSize: adjustFontSize(fontSize, screenCase),
                        width: screenCase === "desktop" ? "11.55em" : "7.5em",
                        isOutline: true,
                    }}
                    buttonStyle={{ borderRadius: 0 }}
                    theme={theme}
                />
            </div>
        </>
    );
}
