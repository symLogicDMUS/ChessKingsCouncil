import {rfToXy} from "../../helpers/crdCnvrt";


export function getPxPos (rf) {

    let [x, y] = rfToXy(rf);
    let left, top = [null, null]

    switch(x) {
        case 1:
            left = "0%";
            break;
        case 2:
            left = "12.5%";
            break;
        case 3:
            left = "25%";
            break;
        case 4:
            left = "37.5%";
            break;
        case 5:
            left = "50%";
            break;
        case 6:
            left = "62.5%";
            break;
        case 7:
            left = "75%";
            break;
        case 8:
            left = "87.5%";
            break;
        default:
            break;
    }

    switch(y) {
        case 8:
            top = "0%";
            break;
        case 7:
            top = "12.5%";
            break;
        case 6:
            top = "25%";
            break;
        case 5:
            top = "37.5%";
            break;
        case 4:
            top = "50%";
            break;
        case 3:
            top = "62.5%";
            break;
        case 2:
            top = "75%";
            break;
        case 1:
            top = "87.5%";
            break;
        default:
            break;
    }

    return {left: left, top: top}

}