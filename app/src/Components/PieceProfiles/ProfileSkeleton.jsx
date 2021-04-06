import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import {useStyles as useMoreStyles} from "./Profile.jss";
import {useStyles} from "./ProfileSkeleton.jss";

export function ProfileSkeleton({theme}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    return (
        <div className={classes2.profile}>
            <Box className={clsx(classes.profile_wb, {
                [classes.profile_w]: true,
            })}>
                <Box className={clsx(classes.sqr_item_area, {
                    [classes.item1]: true,
                })}>
                    <Box className={classes.sqr_item_header}><Skeleton/></Box>
                    <Box className={classes.sqr_item}><Skeleton/></Box>
                </Box>
                <Box className={clsx(classes.sqr_item_area, {
                    [classes.item2]: true,
                })}>
                    <Box className={classes.sqr_item_header}><Skeleton/></Box>
                    <Box className={classes.sqr_item}><Skeleton/></Box>
                </Box>
                <Box className={clsx(classes.sqr_item_area, {
                    [classes.item3]: true,
                })}>
                    <Box className={classes.sqr_item_header}><Skeleton/></Box>
                    <Box className={classes.sqr_item}><Skeleton/></Box>
                </Box>
            </Box>
            <Box className={clsx(classes.profile_wb, {
                [classes.profile_b]: true,
            })}>
                <Box className={classes.profile_wb}>
                    <Box className={clsx(classes.sqr_item_area, {
                        [classes.item1]: true,
                    })}>
                        <Box className={classes.sqr_item_header}><Skeleton/></Box>
                        <Box className={classes.sqr_item}><Skeleton/></Box>
                    </Box>
                    <Box className={clsx(classes.sqr_item_area, {
                        [classes.item2]: true,
                    })}>
                        <Box className={classes.sqr_item_header}><Skeleton/></Box>
                        <Box className={classes.sqr_item}><Skeleton/></Box>
                    </Box>
                    <Box className={clsx(classes.sqr_item_area, {
                        [classes.item3]: true,
                    })}>
                        <Box className={classes.sqr_item_header}><Skeleton/></Box>
                        <Box className={classes.sqr_item}><Skeleton/></Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}