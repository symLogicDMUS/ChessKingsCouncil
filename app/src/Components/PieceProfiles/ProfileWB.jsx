import React from "react";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {resolvePlayerType} from "../helpers/resolvePlayerType";
import {fontSizeAlt2 as fontSize} from "../styles/fontSize.jss";
import {stepFuncNamesToText} from "../helpers/spanToText";
import {offsetToText} from "../helpers/offsetToText";
import ScrollTable from "../Reuseables/ScrollTable";
import {ProfileAvatar} from "./ProfileAvatar";
import {mobileScaler, useStyles} from "./ProfileWB.jss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * expand: given to header. opens displayBoard
 * def: spans, offsets, and img of W or B piece
 * */
export function ProfileWB({ pieceName, color, def, expand, theme, screenCase }) {

    const classes = useStyles({ fontSize: fontSize, theme: theme});

    const getFontSize = () => {
        switch (screenCase) {
            case 'desktop': return fontSize;
            case 'mobile': return fontSize * mobileScaler;
            default: return fontSize;
        }
    };

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
        <div className={classes.profile_wb}>
            <ProfileAvatar
                pieceName={pieceName}
                color={color}
                src={def.img}
                theme={theme}
            />
            <ScrollTable
                listItems={getOffsets(def)}
                title={
                    <Box className={classes.range_header}>
                        <IconButton
                            className={classes.range_expand_widget}
                            onClick={() => expand(pieceName, color, "offsets")}
                        >
                            <AddIcon className={classes.range_expand_icon} />
                        </IconButton>
                        <Box className={classes.box}>
                            <Typography className={classes.range_title} noWrap>{resolvePlayerType(color)} Offsets</Typography>
                        </Box>
                    </Box>
                }
                style={{ fontSize: getFontSize(), width: screenCase === 'desktop' ? '11.55em': '7.5em', isOutline: true }}
                buttonStyle={{borderRadius: 0}}
                theme={theme}
            />
            <ScrollTable
                listItems={getSpans(def)}
                title={
                    <Box className={classes.range_header}>
                        <IconButton
                            className={classes.range_expand_widget}
                            onClick={() => expand(pieceName, color, "spans")}
                        >
                            <AddIcon className={classes.range_expand_icon} />
                        </IconButton>
                        <Box className={classes.box}>
                            <Typography className={classes.range_title} noWrap>{resolvePlayerType(color)} Spans</Typography>
                        </Box>
                    </Box>
                }
                style={{ fontSize: getFontSize(), width: screenCase === 'desktop' ? '11.55em': '7.5em', isOutline: true }}
                buttonStyle={{borderRadius: 0}}
                theme={theme}
            />
        </div>
    );
}
