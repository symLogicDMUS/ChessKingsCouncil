import React from "react";
import {v4 as uuidv4} from "uuid";
import {ImgChoice} from "./ImgChoice";

export const getImgItems = (
    imgDict,
    setChoice,
    imgNameChoice,
    showNames,
    screenCase,
    theme
) => {
    let imgItems = [];
    Object.keys(imgDict).forEach((name) => {
        imgItems.push(
            <ImgChoice
                name={name}
                key={uuidv4()}
                theme={theme}
                setChoice={setChoice}
                base64ImgStr={imgDict[name]}
                screenCase={screenCase}
                showName={showNames}
                isSelected={name === imgNameChoice}
            />
        );
    });
    return {
        showNames: showNames,
        imgItems: imgItems,
    };
};