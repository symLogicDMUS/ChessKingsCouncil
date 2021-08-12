import React from "react";
import { Typography } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { useStyles } from "../HelpText.jss";
import { SeeExampleButton } from "../SeeExampleButton";

export function SubbingYourPiecesForRegularOnes({ theme }) {
    const classes = useStyles({ theme: theme });

    return (
        <Typography className={classes.text} paragraph>
            For each piece you would like to start the game, select the icon of
            the piece you want it to start in place of then click the OK button.{" "}
            <SeeExampleButton
                isText={true}
                theme={theme}
                lgSrc={"Images/Help/wide/sub buttons.png"}
                smSrc={"Images/Help/wide/sub buttons.png"}
            >
                On larger screens the icons are on the right side of a piece's
                profile header.
            </SeeExampleButton>
            <SeeExampleButton
                isText={true}
                theme={theme}
                lgSrc={"Images/Help/thin/subs dropdown.png"}
                smSrc={"Images/Help/thin/subs dropdown.png"}
            >
                On smaller screens the icons are in a dropdown.
            </SeeExampleButton>
            <SeeExampleButton
                smSrc={"/Images/Help/thin/subbing piece.gif"}
                lgSrc={"/Images/Help/thin/subbing piece.gif"}
                theme={theme}
            />
        </Typography>
    );
}
