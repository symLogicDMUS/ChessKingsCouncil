import React from "react";
import { useDrop } from 'react-dnd';
import { move } from '../Move/move';
import { isLegal } from '../Move/isLegal';
import { ItemTypes } from "../../helpers/constants";
import {getInteractiveSqrClass} from "../../styles/getSqrColorClass.jss";
import {useStyles} from "../../Reuseables/Square.jss";
import {fontSize} from "../../styles/fontSize.jss";

export function Square({rf, theme, gameroot, children}) {

    const classes = useStyles({fontSize, theme});

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(gameroot, item.pos, rf),
      canDrop: (item, monitor) => isLegal(gameroot, item, rf),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })

    const className = getInteractiveSqrClass(rf, canDrop, classes)

    return (
        <div ref={drop} className={className}>
            {children}
        </div>
    );
}