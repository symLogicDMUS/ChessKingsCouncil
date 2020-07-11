import React from "react";
import Square from './Square';
import { ItemTypes } from "../../helpers/constants";
import { useDrop } from 'react-dnd';
import { isLegal } from '../Move/isLegal';
import { move } from '../Move/move';
import {getPosPx} from "../helpers/getPosPx";
import {adjustSqrColor} from "../helpers/adjustSqrColor";
import "../css/interactiveSqr.css";
import "../css/displaySqr.css";

export function BoardSquare({rf:rf, sqr_color: sqr_color, pos, data, children}) {

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
      <div ref={drop} className={sqr_color} style={getPosPx(rf)}>
          <Square class_={sqr_color}>{children}</Square>
      </div>
      );
}