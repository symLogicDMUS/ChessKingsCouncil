import React from "react";
import Square from './Square';
import { canMovePiece, movePiece } from '../Game';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import { isLegal } from '../Game';
import { move } from '../Game';


export default function BoardSquare({sqr_color: sqr_color, pos, children}) {

    const [{ isOver }, drop] = useDrop({
      accept: Object.values(ItemTypes),
      drop: (item, monitor) => move(item, pos),
      canDrop: (item, monitor) => isLegal(item, pos),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })    
    return (
        <div
          ref={drop}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Square sqr_color={sqr_color}>{children}</Square>  
        </div>
      );
}