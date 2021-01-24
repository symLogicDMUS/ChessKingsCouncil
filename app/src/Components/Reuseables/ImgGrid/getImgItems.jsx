import React from "react";
import {v4 as uuidv4} from "uuid";
import {ImgChoice} from "./ImgChoice";

export const getImgItems = (
    imgDict,
    setChoice,
    imgNameChoice,
    searchText,
    showNames,
    screenCase,
    theme
) => {
    let names;
    if (searchText && searchText !== '') {
        names = Object.keys(imgDict).filter(name => name.toLowerCase().startsWith(searchText))
    }
    else {
        names = Object.keys(imgDict);
    }
    let imgItems = [];
    names.forEach((name) => {
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