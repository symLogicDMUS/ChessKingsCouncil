import React from "react";
import {useDrag} from "react-dnd";
import {usePreview} from "react-dnd-preview";
import MediaQuery from "react-responsive/src";
import {useStyles} from "./Piece.jss";
import {Portal} from "@material-ui/core";

export function Piece({rf, id, pieceImgBase64Str, alt}) {
    const classes = useStyles({rf});
    let iType = id.slice(0, 2);
    const [{isDragging}, drag] = useDrag({
        item: {type: iType, pos: rf, id_: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const {display, itemType, item, style} = usePreview();

    console.log(item, itemType, display)

    return (
        <>
            <img
                ref={drag}
                src={pieceImgBase64Str}
                className={classes.piece}
                alt={`${alt} (icon of piece)`}
            />
            <MediaQuery maxDeviceWidth={767}>
                {isDragging ? (
                    <Portal>
                        <img
                            src={pieceImgBase64Str}
                            alt={`${alt} (icon of piece)`}
                            style={{...style, width: '3.5em', height: '3.5em', zIndex: 3}}
                        />
                    </Portal>)
                : null}
            </MediaQuery>
        </>
    );
}
