import { listContainsComponent } from "./listContainsComponent";

export function objectContainsListContainingComponent(obj) {
    for (const list of Object.values(obj)) {
        if (listContainsComponent(list)) {
            return true;
        }
    }
    return false;
}
