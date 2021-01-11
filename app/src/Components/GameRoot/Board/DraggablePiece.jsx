import React, {useEffect} from 'react';
import {useDrag} from 'react-dnd';
import {ItemTypes} from './ItemTypes';
import {Piece2} from './Piece2';
import {getEmptyImage} from 'react-dnd-html5-backend';
import {updatePosition} from "./DraggablePiece.jss";
import {useStyles} from "./Piece.jss";

export const DraggablePiece = (props) => {

    const {id, src, left, top} = props;
    let itemType = id.slice(0, 2)
    const [{isDragging}, drag, preview] = useDrag({
        item: {type: itemType, id, left, top, src},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const classes = useStyles();

    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true});
    }, []);

    return (
        <div ref={drag} style={updatePosition(left, top, isDragging)}>
            <Piece2 src={src} />
        </div>
    );
};
