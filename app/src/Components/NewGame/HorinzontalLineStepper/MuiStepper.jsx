import React from "react";
import { Stepper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./MuiStepper.jss";

export const MuiStepper = withStyles(styles)((props) => (
    <Stepper {...props}>{props.children}</Stepper>
));
