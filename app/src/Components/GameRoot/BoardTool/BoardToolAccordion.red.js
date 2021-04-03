import {getBoardAccordionMeasurements} from "./getBoardAccordionMeasurements";

export function reducer(state, action) {
    switch (action.type) {
        case "reposition":
            return getBoardAccordionMeasurements();
        default:
            throw new Error();
    }
}