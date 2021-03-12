import React from "react";
import {ImgChoice} from "./ImgChoice";

export const getImgItems = (
    imgDict,
    setChoice,
    imgNameChoice,
    searchText,
    showNames,
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
                key={name}
                name={name}
                theme={theme}
                showName={showNames}
                setChoice={setChoice}
                base64ImgStr={imgDict[name]}
                isSelected={name === imgNameChoice}
            />
        );
    });
    return {
        imgDict: imgDict,
        imgItems: imgItems,
        imgNameChoice: imgNameChoice,
        showNames: showNames,
    };
};