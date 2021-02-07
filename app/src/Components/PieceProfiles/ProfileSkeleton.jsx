import React from "react";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import {useStyles} from "./ProfileSkeleton.jss";

export function ProfileSkeleton({theme}) {
    const classes = useStyles({theme});
    return (
        <div className={classes.profile}>
            <Skeleton className={classes.profile_header}/>
            <Box className={classes.profile_wb}>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
            </Box>
            <Box className={classes.profile_wb}>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
                <Box className={classes.item}>
                    <Skeleton className={classes.item_header}/>
                    <Skeleton className={classes.item_content}/>
                </Box>
            </Box>
        </div>
    )
}