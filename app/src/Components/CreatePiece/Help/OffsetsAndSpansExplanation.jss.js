import {fontSizes, widths} from "./RangeToolExample.jss";
import {themes} from "../../styles/themes.jss";

export const img_example = (screenCase, theme) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSizes.desktop,
                width: widths.desktop,
                height: widths.desktop,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
        case 'ipad':
            return {
                fontSize: fontSizes.ipad,
                width: widths.mobile,
                height: widths.mobile,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
        default:
            return {
                fontSize: fontSizes.mobile,
                width: widths.mobile,
                height: widths.mobile,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
    }
};