import React from "react";
import { motion } from "framer-motion";
import { useStyles } from "./ImgChoice.jss";

export function ImgChoice({ name, imgNameChoice, base64ImgStr, setChoice, setHoverText }) {
    const classes = useStyles()
    return (
        <div
            className={name === imgNameChoice ? classes.selected : classes.normal}
            onClick={() => setChoice(name)}
            onMouseEnter={() => setHoverText(name)}
            onMouseLeave={() => setHoverText(null)}
        >
            <motion.img
                src={base64ImgStr}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                className="image-choice"
                alt="list of icons that can be used as pieces"
            />
        </div>
    );
}
