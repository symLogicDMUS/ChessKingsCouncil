import React from "react";
import { useStyles } from "./MuiSkeleton.jss";
import MediaQuery from "react-responsive/src";
import {FlashingBoxes} from "./FlashingBoxes";

export function MuiSkeleton(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <div>
            <MediaQuery minDeviceHeight={768}>
                <FlashingBoxes numRows={2} boxesPerRow={6} theme={props.theme} />
            </MediaQuery>
            <MediaQuery maxDeviceHeight={767}>
                <FlashingBoxes numRows={3} boxesPerRow={2} theme={props.theme} />
            </MediaQuery>
        </div>
    );
}