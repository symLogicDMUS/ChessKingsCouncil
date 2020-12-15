import React, {useState} from "react";
import {useStyles} from "./SearchBox.jss";

export function SearchBox({updateSearch}) {

    let [userInput, setUserInput] = useState(null)

    const classes = useStyles()

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
        updateSearch(userInput.toLowerCase());
    }

    return (
        <div className={classes.search_tool}>
            <img
                src="/Images/other/magnifying-glass-b6n6n6.svg"
                className={classes.magnifying_glass}
                alt="magnifying glass symbol for search boxes"
            />
            <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                className={classes.box}
            />
        </div>
    );
}