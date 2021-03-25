import {fontSizes, widths} from "./RangeToolExample.jss";
import {themes} from "../../styles/themes.jss";

export const img_example = (screenCase, theme) => {
    switch (screenCase) {
        case 'wide':
            return {
                fontSize: fontSizes.wide,
                width: widths.wide,
                height: widths.wide,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
        case 'ipad':
            return {
                fontSize: fontSizes.ipad,
                width: widths.thin,
                height: widths.thin,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
        default:
            return {
                fontSize: fontSizes.thin,
                width: widths.thin,
                height: widths.thin,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1vh',
                marginBottom: '1vh',
                outline: `0.05em solid ${themes[theme].outline}`,
            }
    }
};