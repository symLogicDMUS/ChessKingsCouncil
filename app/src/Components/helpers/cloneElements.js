import React from "react";

export const cloneElements = (componentList) => {
    const newComponentList = []
    for (let element of componentList) {
        newComponentList.push(React.cloneElement(element))
    }
    return newComponentList;
};
