import React, {useEffect} from "react";
import "../styles/Background/_backgrounds.scss";
import {Background} from "../styles/Background/Background";
import {icons} from "../styles/icons/top/icons.jss";
import {SvgIcon, Typography} from "@material-ui/core";
import { useStyles } from "./NotFound.jss";
import {Link} from "react-router-dom";

function NotFound() {
    const classes = useStyles();

    useEffect(() => {
        document.body.className = 'tan-background';
    }, [])

    return (
        <>
            <Background theme='tan' />
            <div className={classes.body}>
                <div className={classes.content} align='center'>
                    <SvgIcon className={classes.icon}>
                        {icons.resign_alt2}
                    </SvgIcon>
                    <Typography variant='h2' paragraph>Opps! Something went wrong!</Typography>
                    <Typography variant='h5' paragraph>
                        This page may not exists or an error may have occurred. If you saved your game you can get it from
                        the <Link to='/LoadGame'>Load Game</Link> page.
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default NotFound;