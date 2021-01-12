import React from "react";
import { SpanArrowButtons } from "./SpanArrowButtons/SpanArrowButtons";
import { fontSizeAlt4 as fontSize } from "../../styles/fontSize.jss";
import { Typography } from "@material-ui/core";
import { angleToText } from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable";
import { useStyles } from "./Range.jss";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { themes } from "../../styles/themes.jss";

export function getPangram() {
    const sentences = [];
    for (let index = 0; index < 7; index++) {
        sentences.push("The quick brown fox jumps over the lazy dog.");
    }
    return sentences;
}

export function Range({ spans, offsets, toggleSpan, theme, screenCase }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    const getSpanTextLabels = () => {
        const newSpans = [];
        for (const angle of Object.keys(spans)) {
            if (spans[angle]) {
                newSpans.push(angleToText[angle]);
            }
        }
        return newSpans;
    };

    const getFontSize = () => {
        switch (screenCase) {
            case 'desktop': return fontSize * 1.089;
            case 'mobile': return fontSize * 1.32;
        }
    }

    return (
        <>
            <div className={classes.range_tool}>
                <Box className={classes.box}>
                    <MediaQuery minDeviceWidth={768}>
                        <Typography className={classes.title}>Range</Typography>
                    </MediaQuery>
                    <ScrollTable
                        numRows={5}
                        listItems={getPangram()}
                        theme={theme}
                        isBorder={true}
                        style={{
                            fontSize: getFontSize(),
                            width: "11.5em",
                            borderRadius: "0.175em",
                            border: `0.05em solid ${themes[theme].outline}`,
                        }}
                        buttonStyle={{borderRadius: 0}}
                    />
                    <SpanArrowButtons
                        spans={spans}
                        toggleSpan={toggleSpan}
                        theme={theme}
                    />
                </Box>
            </div>
        </>
    );
}
