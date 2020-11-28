import React, {useEffect, useState} from "react";
import NavBar from "../../NavBar/NavBar";
import {Standard} from "./IconComponents/Standard";
import {Council} from "./IconComponents/Council";
import {Custom} from "./IconComponents/Custom";
import {Title} from "./IconComponents/Title";
import {MessageModal} from "../../NavBar/Help/MessageModal";
import {styles} from "./PickType.jss";
import "./PickType.scss";

export function PickType({setType}) {


    useEffect(() => {
        document.body.className = "pick-type-body";
    })

    let [theme, setTheme] = useState('dark')
    let [type, setType] = useState(null)

    const classes = useStyles()

    return (
        <>
            <NavBar currentPage="PickType" theme={theme} unsavedChanges={false}/>
            <svg viewBox="0 0 1920 1080">
                <defs>
                    <clipPath id="b">
                        <rect width={1920} height={1080}/>
                    </clipPath>
                </defs>
                <g id="a" className={classes.a}>
                    <Council setType={() => setType('Council')}/>
                    <Custom setType={() => setType('Custom')}/>
                    <Standard setType={() => setType('Standard')}/>
                    <Title/>
                </g>
            </svg>
        </>
    );
}

export default PickType;
