import React from 'react';
import {useDrag} from 'react-dnd';
import {useStyles} from "./Piece.jss";

export function Piece({rf, id, pieceImgBase64Str, alt}) {

    const classes = useStyles()

    let iType = id.slice(0, 2);
    const [drag] = useDrag({
        item: {type: iType, pos: rf, id_: id},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    })

    return (
        <>
            <div ref={drag}>
                <img src={pieceImgBase64Str} className={classes.piece} alt={`${alt} (icon of piece)`}/>
            </div>
        </>
    );
}