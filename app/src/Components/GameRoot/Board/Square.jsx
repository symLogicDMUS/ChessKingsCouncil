import React from "react";
import { useDrop } from 'react-dnd';
import { move } from '../Move/move';
import { isLegal } from '../Move/isLegal';
import { ItemTypes } from "../../helpers/constants";
import {getInteractiveSqrClass} from "../../styles/getSqrClass.jss";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss"
import {useStyles} from "../../Reuseables/Square.jss";

export function Square({rf, theme, gameroot, children}) {

    const classes = useStyles({fontSize, theme: theme});

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes,
      drop: (item, monitor) => move(gameroot, item.pos, rf),
      canDrop: (item, monitor) => isLegal(gameroot, item, rf),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    })

    const className = getInteractiveSqrClass(rf, canDrop)

    return (
        <div ref={drop} className={classes[className]}>
            {children}
        </div>
    );
}