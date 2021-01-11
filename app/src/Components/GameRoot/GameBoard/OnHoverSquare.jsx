import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "./ItemTypes";
import { useStyles } from "../../Reuseables/Square.jss";

export function OnHoverSquare({ isActive, theme }) {

    let [isOver, setIsOver] = useState();

    const [, drop] = useDrop({
        accept: [],
        hover: (item, monitor) =>
        {
            setIsOver(true)
        },
    })
    const classes = useStyles({ theme, type: "dnd" });

    return (
        <div ref={drop} className={classes.transparent}>
            {isActive  && (
                <img
                    src="/Images/sqr/sqr-outline-ffd700.svg"
                    style={{ width: "100%", height: "100%" }}
                />
            )}
        </div>
    );
}
