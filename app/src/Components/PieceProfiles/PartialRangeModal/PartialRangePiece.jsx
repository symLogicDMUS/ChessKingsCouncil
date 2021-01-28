import {useStyles} from "./PartialRangePiece.jss";

export function PartialRangePiece({src}) {
    const classes = useStyles()
    return (
        <img src={src} className={classes.piece} />
    )
}