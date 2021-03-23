import React from "react";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import {useStyles as useEvenMoreStyles} from "./Profile.jss";
import {useStyles as useMoreStyles} from "./ProfileWB/ProfileWB.jss";
import {useStyles} from "./ProfileSkeleton.jss";

export function ProfileSkeleton({theme}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});
    const classes3 = useEvenMoreStyles({theme});

    return (
        <div className={classes3.profile}>
            <Box className={classes2.profile_wb}>
                <Box className={classes2.sqr_item_area}>
                    <Box className={classes.flash_box_header1}><Skeleton/></Box>
                    <Box className={classes.flash_box1}><Skeleton/></Box>
                </Box>
                <Box className={classes2.sqr_item_area}>
                    <Box className={classes.flash_box_header2}><Skeleton/></Box>
                    <Box className={classes.flash_box2}><Skeleton/></Box>
                </Box>
                <Box className={classes2.sqr_item_area}>
                    <Box className={classes.flash_box_header3}><Skeleton/></Box>
                    <Box className={classes.flash_box3}><Skeleton/></Box>
                </Box>
            </Box>
            <Box className={classes2.profile_wb}>
                <Box className={classes2.profile_wb}>
                    <Box className={classes2.sqr_item_area}>
                        <Box className={classes.flash_box_header1}><Skeleton/></Box>
                        <Box className={classes.flash_box1}><Skeleton/></Box>
                    </Box>
                    <Box className={classes2.sqr_item_area}>
                        <Box className={classes.flash_box_header2}><Skeleton/></Box>
                        <Box className={classes.flash_box2}><Skeleton/></Box>
                    </Box>
                    <Box className={classes2.sqr_item_area}>
                        <Box className={classes.flash_box_header3}><Skeleton/></Box>
                        <Box className={classes.flash_box3}><Skeleton/></Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}