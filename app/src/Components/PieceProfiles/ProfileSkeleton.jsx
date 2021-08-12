import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles as useMoreStyles } from "./Profile.jss";
import { useStyles } from "./ProfileSkeleton.jss";

function ProfileSkeleton({ theme }) {
    const [timeEnded, setTimeEnded] = useState(false);
    const [seconds, setSeconds] = useState(12);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setTimeEnded(true);
        }
    });

    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    const createPieceLink = (
        <Link to="/CreatePiece" className={classes.text_link}>
            Create Piece page
        </Link>
    );

    return (
        <>
            {timeEnded ? (
                <div className={classes.no_pieces}>
                    <Typography
                        variant={"caption"}
                        className={classes.time_ended}
                    >
                        No saved pieces. To create one, go the the{" "}
                        {createPieceLink}.
                    </Typography>
                </div>
            ) : (
                <div className={classes2.profile}>
                    <Box
                        className={clsx(classes.profile_wb, {
                            [classes.profile_w]: true,
                        })}
                    >
                        <Box
                            className={clsx(classes.sqr_item_area, {
                                [classes.item1]: true,
                            })}
                        >
                            <Box className={classes.sqr_item_header}>
                                <Skeleton />
                            </Box>
                            <Box className={classes.sqr_item}>
                                <Skeleton />
                            </Box>
                        </Box>
                        <Box
                            className={clsx(classes.sqr_item_area, {
                                [classes.item2]: true,
                            })}
                        >
                            <Box className={classes.sqr_item_header}>
                                <Skeleton />
                            </Box>
                            <Box className={classes.sqr_item}>
                                <Skeleton />
                            </Box>
                        </Box>
                        <Box
                            className={clsx(classes.sqr_item_area, {
                                [classes.item3]: true,
                            })}
                        >
                            <Box className={classes.sqr_item_header}>
                                <Skeleton />
                            </Box>
                            <Box className={classes.sqr_item}>
                                <Skeleton />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        className={clsx(classes.profile_wb, {
                            [classes.profile_b]: true,
                        })}
                    >
                        <Box className={classes.profile_wb}>
                            <Box
                                className={clsx(classes.sqr_item_area, {
                                    [classes.item1]: true,
                                })}
                            >
                                <Box className={classes.sqr_item_header}>
                                    <Skeleton />
                                </Box>
                                <Box className={classes.sqr_item}>
                                    <Skeleton />
                                </Box>
                            </Box>
                            <Box
                                className={clsx(classes.sqr_item_area, {
                                    [classes.item2]: true,
                                })}
                            >
                                <Box className={classes.sqr_item_header}>
                                    <Skeleton />
                                </Box>
                                <Box className={classes.sqr_item}>
                                    <Skeleton />
                                </Box>
                            </Box>
                            <Box
                                className={clsx(classes.sqr_item_area, {
                                    [classes.item3]: true,
                                })}
                            >
                                <Box className={classes.sqr_item_header}>
                                    <Skeleton />
                                </Box>
                                <Box className={classes.sqr_item}>
                                    <Skeleton />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
            )}
        </>
    );
}

export default ProfileSkeleton;
