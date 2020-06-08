import React from "react";
import Square from './Square';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import { isLegal } from '../Move/isLegal';
import { move } from '../Move/move';


export function BoardSquare({sqr_color: sqr_color, pos, data, children}) {
    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(data, item.pos, pos),
      canDrop: (item, monitor) => isLegal(data, item, pos),
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