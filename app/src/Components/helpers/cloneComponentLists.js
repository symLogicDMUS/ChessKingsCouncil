import React from "react";
import { cloneElements } from "./cloneElements";

/**
 * @param componentListsObj: object of lists containing React components
 */
export const cloneComponentLists = (componentListsObj) => {
    const newListsObj = {};
    for (let [key, list] of Object.entries(componentListsObj)) {
        newListsObj[key] = cloneElements(list);
    }
    return newListsObj;
};
