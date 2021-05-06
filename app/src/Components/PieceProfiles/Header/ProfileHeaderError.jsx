import React from "react";
import {Typography} from "@material-ui/core";

const style = {width: "20%", height: "20%", color: "red"}

export function ProfileHeaderError() {
    return <Typography style={style} variant='button'>
        Error: Invalid Header Type in Piece Profiles.
    </Typography>;
}