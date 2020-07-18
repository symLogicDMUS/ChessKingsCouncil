import React from "react";
import { ItemTypes } from "../../helpers/constants";
import { useDrop } from 'react-dnd';
import { isLegal } from '../Move/isLegal';
import { move } from '../Move/move';
import {getPosPx} from "../gameRootHelpers/getPosPx";
import {adjustSqrColor} from "../gameRootHelpers/adjustSqrColor";
import "../css/interactiveSqr.css";
import "../css/displaySqr.css";

export function Square({sqr_color, pos, gameroot, children}) {

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(gameroot, item.pos, pos),
      canDrop: (item, monitor) => isLegal(gameroot, item, pos),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })

    sqr_color = adjustSqrColor(sqr_color, canDrop)

    return (
        <div ref={drop} className={sqr_color} style={getPosPx(pos)}>
            <div className={sqr_color}>
                {children}
            </div>
        </div>
      );
}