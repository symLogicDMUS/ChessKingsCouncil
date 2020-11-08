import React from "react";
import { motion } from "framer-motion";
import { stylesObjects } from "./choose-modal-styles-objects";
import "./ImgChoice.scss";

export function ImgChoice({ name, screenCase, imgNameChoice, base64ImgStr, setChoice, setHoverText }) {
    var class_ = "image-choice-container";
    if (name === imgNameChoice) class_ = "selected-image-choice-container";
    return (
        <div
            className={class_}
            onClick={() => setChoice(name)}
            onMouseEnter={() => setHoverText(name)}
            onMouseLeave={() => setHoverText(null)}
            style={stylesObjects[screenCase]["imageContainer"]()}
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
