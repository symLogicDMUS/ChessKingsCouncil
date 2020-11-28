import React from "react";
import { useDrop } from 'react-dnd';
import { ItemTypes } from "../../helpers/constants";
import { isLegal } from '../Move/isLegal';
import { move } from '../Move/move';
import {useStyles} from "./Square.jss";
import {getSqrClassName} from "../../helpers/getSqrClassName";

export function Square({rf, gameroot, children}) {

    const classes = useStyles(rf)

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(gameroot, item.pos, rf),
      canDrop: (item, monitor) => isLegal(gameroot, item, rf),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })

    const className = getSqrClassName(rf, canDrop, classes)

    return (
        <div ref={drop} className={className}>
            {/*<div className={sqr_color}>*/}
                {children}
            {/*</div>*/}
        </div>
      );
}