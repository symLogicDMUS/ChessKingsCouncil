import React from "react";
import { ImgChoice } from "../../CreatePiece/Icon/ImgChoicesModal/ImgChoice";

export const getImgComponents = (
    imgDict,
    setChoice,
    imgNameChoice,
    searchText,
    showNames,
    theme
) => {
    let names;
    if (searchText && searchText !== "") {
        names = Object.keys(imgDict).filter((name) =>
            name.toLowerCase().startsWith(searchText)
        );
    } else {
        names = Object.keys(imgDict);
    }
    const imgComponents = [];
    names.forEach((name) => {
        imgComponents.push(
            <ImgChoice
                key={name}
                name={name}
                theme={theme}
                showName={showNames}
                setChoice={setChoice}
                src={imgDict[name]}
                isSelected={name === imgNameChoice}
            />
        );
    });
    return imgComponents;
};
