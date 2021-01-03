import React from "react";
import {useDrag} from "react-dnd";
import {motion} from "framer-motion"
import {useStyles} from "./Piece.jss";

export function Piece({rf, id, pieceImgBase64Str, alt}) {
    const classes = useStyles({rf});
    let iType = id.slice(0, 2);
    const [{isDragging}, drag] = useDrag({
        item: {type: iType, pos: rf, id_: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
            <motion.img
                ref={drag}
                src={pieceImgBase64Str}
                className={classes.piece}
                alt={`${alt} (icon of piece)`}
            />
    );
}
