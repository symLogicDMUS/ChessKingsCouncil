import React from "react";
import { SeeExampleButton } from "../SeeExampleButton";
import { Typography } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useStyles } from "../HelpText.jss";

export function MakingYourPieceAnOptionForPawnsToPromoteTo(props) {
    const classes = useStyles({ theme: props.theme });

    return (
        <>
            <Typography paragraph className={classes.text}>
                check the box of every piece you would like to be an option to
                promote a Pawn to when it reaches the opposite side of the board
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/help/wide/promo checkboxes.png"}
                    smSrc={"Images/help/wide/promo checkboxes.png"}
                >
                    On larger screens the checkboxes are in plain sight
                </SeeExampleButton>{", "}
                but on
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/help/thin/promo checkboxes.png"}
                    smSrc={"Images/help/thin/promo checkboxes.png"}
                >
                    smaller screens you need to use the{" "}
                    <div className={classes.emphasis}>
                        See More <MoreVert className={classes.icon} />
                    </div>{" "}
                    icon.
                </SeeExampleButton>
            </Typography>
        </>
    );
}
