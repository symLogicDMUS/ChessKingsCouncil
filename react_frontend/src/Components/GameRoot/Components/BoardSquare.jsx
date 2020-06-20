import React from "react";
import Square from './Square';
import { ItemTypes } from "../../helpers/constants";
import { useDrop } from 'react-dnd';
import { isLegal } from '../Move/isLegal';
import { move } from '../Move/move';
import {adjustSqrColor} from "../helpers/adjustSqrColor";
import "../GameRoot.css";

export function BoardSquare({sqr_color: sqr_color, pos, data, children}) {

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(data, item.pos, pos),
      canDrop: (item, monitor) => isLegal(data, item, pos),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })

    sqr_color = adjustSqrColor(sqr_color, canDrop)

    return (
        <div ref={drop}>
          <Square class_={sqr_color}>{children}</Square>
        </div>
      );
}