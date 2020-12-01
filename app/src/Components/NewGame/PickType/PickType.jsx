import React, {useEffect, useState} from "react";
import NavBar from "../../NavBar/NavBar";
import {GameType} from "./GameType";
import {Title} from "../Title";
import {useStyles} from "./PickType.jss";
import "./PickType.scss";

export function PickType({setType}) {

    useEffect(() => {
        document.body.className = "pick-type-body";
    })

    const classes = useStyles()

    return (
        <>
            <NavBar currentPage="PickType" unsavedChanges={false}/>
            <Title/>
            <GameType className={classes.standard} setType={setType} gameType="Standard"/>
            <GameType className={classes.custom} setType={setType} gameType="Custom"/>
            <GameType className={classes.council} setType={setType} gameType="Council"/>
        </>
    );
}

export default PickType;
