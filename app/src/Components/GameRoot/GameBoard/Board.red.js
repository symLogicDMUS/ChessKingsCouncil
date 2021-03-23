import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export function reducer(state, action) {
    switch (action.type) {
        case "update":
            return {
                sqrSizes: {
                    desktop: viewHeight() * 0.095,
                    mobile: viewWidth() * 0.95
                },
                boardSizes: {
                    desktop: viewHeight() * 0.095 * 8,
                    mobile: viewWidth() * 0.95 * 8,
                },
                boardPos: {
                    desktop: {
                        left: viewWidth() * 0.45 - viewHeight() * 0.095 * 8 * 0.5,
                        top: viewHeight() * 0.47 - viewHeight() * 0.095 * 8 * 0.5,
                    },
                    mobile: {
                        left: viewWidth() * 0.5 - viewWidth() * 0.95 * 8 * 0.5,
                        top: appBarHeight * 1.1,
                    },
                }
            }
        default:
            throw new Error();
    }
}