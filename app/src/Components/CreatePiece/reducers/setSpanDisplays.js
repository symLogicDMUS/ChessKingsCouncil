import {setDisplaySpan} from "./setSpanDisplay";

export const setSpanDisplays = (newState) => {
    Object.entries(newState.spans).forEach(([angle, isActive]) => {
        if (isActive) {
            setDisplaySpan(newState, angle);
        }
    });
};