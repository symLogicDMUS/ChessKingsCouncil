import React from "react";
import { useStyles } from "./MuiSkeleton.jss";
import MediaQuery from "react-responsive/src";
import {FlashingBoxes} from "./FlashingBoxes";

export function MuiSkeleton(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <div>
            <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
                <FlashingBoxes numRows={2} boxesPerRow={6} theme={props.theme} />
            </MediaQuery>
            <MediaQuery maxAspectRatio={'1/1'}>
                <FlashingBoxes numRows={3} boxesPerRow={2} theme={props.theme} />
            </MediaQuery>
        </div>
    );
}