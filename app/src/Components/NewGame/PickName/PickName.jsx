import React, {useEffect, useState} from "react";
import {NavBar} from '../../NavBar/NavBar'
import {MessageModal} from "../../NavBar/Help/MessageModal";
import {getNameStatus} from "../../helpers/getNameStatus";
import { useStyles } from "./PickName.jss";
import "./PickName.scss";

export function PickName({setName, nextStep}) {

    let [userInput, setUserInput] = useState('')
    let [nameStatus, setNameStatus] = useState('none')
    let [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.body.className = "pick-name-body";
    });

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    const classes = useStyles()

    return (
        <>
            <NavBar
                currentPage="LoadGame"
                theme={theme}
                unsavedChanges={false}
            />
            <div class={classes.pick_name}>
                <img
                    src="/Images/text-labels/enter-name.svg"
                    className="game-name-form"
                    alt="title to enter name"
                />
                <input
                    type="text"
                    id="gname"
                    value={userInput}
                    onChange={handleUserInput}
                    className="game-name-form"
                />
                <button className={classes.accept_button} onClick={() => setNameStatus(getNameStatus(userInput))}>
                    Submit
                </button>
            </div>

            {nameStatus === "blank" && (
                <MessageModal messageText="You can't leave the name of a game blank"
                              toggleMessageModal={() => setNameStatus(null)}/>)}

            {nameStatus === "valid" && setName(userInput)}
        </>
    );

}