import {rfToXy} from "../../helpers/crdCnvrt";


export function getPxPos (rf) {

    let [x, y] = rfToXy(rf);
    let [left, top] = [-1, -1];

    switch(x) {
        case 1:
            left = 0;
            break;
        case 2:
            left = 75;
            break;
        case 3:
            left = 150;
            break;
        case 4:
            left = 225;
            break;
        case 5:
            left = 300;
            break;
        case 6:
            left = 375;
            break;
        case 7:
            left = 450;
            break;
        case 8:
            left = 525;
            break;
        default:
            break;
    }

    switch(y) {
        case 8:
            top = 0;
            break;
        case 7:
            top = 75;
            break;
        case 6:
            top = 150;
            break;
        case 5:
            top = 225;
            break;
        case 4:
            top = 300;
            break;
        case 3:
            top = 375;
            break;
        case 2:
            top = 450;
            break;
        case 1:
            top = 525;
            break;
        default:
            break;
    }

    return {left: left, top: top}

}