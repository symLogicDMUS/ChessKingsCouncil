import React from "react";

export const listContainsComponent = (array) => {
    for (const element of array) {
        if (React.isValidElement(element)) {
            return true
        }
    }
    return false;
};