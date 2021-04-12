import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {MoreVert} from "@material-ui/icons";
import {SeeMore} from "../../UserInput/SeeMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./TwoItemAppBarContent.jss";

export function TwoItemAppBarContent({theme, className, seeMoreIcon, children}) {
    const sm = useMediaQuery("(max-width: 500px)");
    const classes = useStyles({theme: theme})

    return (
        <Box
            className={clsx(classes.two_item_app_bar, {
                [className]: className,
            })}
        >
            <div className={classes.child1}>
                {children[0]}
            </div>
            {sm ? (
                <SeeMore theme={theme} icon={seeMoreIcon ? seeMoreIcon : <MoreVert className={classes.icon} />}>
                    {children[1]}
                </SeeMore>
            ) : (
                <div className={classes.child2}>
                    {children[1]}
                </div>
            )}
        </Box>
    );
}