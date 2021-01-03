import React from "react";
import { motion } from "framer-motion";
import {fontSize} from "../../../styles/fontSize.jss";
import { useStyles } from "./ImgChoice.jss";

export function ImgChoice({theme, name, imgNameChoice, base64ImgStr, setChoice, setHoverText }) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <div
            onClick={() => setChoice(name)}
            className={name === imgNameChoice ? classes.selected : classes.normal}
        >
            <motion.img
                src={base64ImgStr}
                whileHover={{ scale: 1.3 }}
                className={classes.img_choice}
                alt="list of icons that can be used as pieces"
            />
        </div>
    );
}