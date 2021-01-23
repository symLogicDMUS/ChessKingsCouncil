import { useStyles } from "./Divider.jss";

export function Divider({theme}) {
    const classes = useStyles({theme})
    return (
        <div className={classes.divider} />
    )
}