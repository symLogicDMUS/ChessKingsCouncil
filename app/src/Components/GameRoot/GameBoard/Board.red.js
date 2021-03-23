import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export function reducer(state, action) {
    switch (action.type) {
        case "update":
            return {
                sqrSizes: {
                    desktop: viewHeight() * 0.11,
                    mobile: viewWidth() * 0.11875
                },
                boardSizes: {
                    desktop: viewHeight() * 0.11 * 8,
                    mobile: viewWidth() * 0.11875 * 8,
                },
                boardPos: {
                    desktop: {
                        left: viewWidth() * 0.45 - viewHeight() * 0.11 * 8 * 0.5,
                        top: (viewHeight()*0.5+appBarHeight*0.5) - viewHeight() * 0.11 * 8 * 0.5,
                    },
                    mobile: {
                        left: viewWidth()*0.5 - viewWidth() * 0.11875*8 * 0.5,
                        top: appBarHeight*1.1,
                    },
                }
            }
        default:
            throw new Error();
    }
}