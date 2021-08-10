import { darken } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

function SvgBanner({ className, theme, style }) {
    const darkFill = darken(themes[theme].menu_container, 0.2);
    const lightFill = themes[theme].menu_container;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="583.239"
            height="114.134"
            viewBox="0 0 583.239 114.134"
            className={className}
            style={style}
        >
            <g id="banner" transform="translate(-0.001)">
                <g id="light" transform="translate(172.128 -0.516)">
                    <rect
                        id="rect847-9-8"
                        width="58.316"
                        height="57.027"
                        transform="translate(-113.771 0.556)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-0-7"
                        width="58.316"
                        height="57.027"
                        transform="translate(-172.087 57.583)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-4-6"
                        width="58.316"
                        height="57.027"
                        transform="translate(-55.455 57.583)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-5-3"
                        width="58.316"
                        height="57.027"
                        transform="translate(2.861 0.556)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-7-9"
                        width="58.316"
                        height="57.027"
                        transform="translate(61.177 57.583)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-8"
                        width="58.316"
                        height="57.027"
                        transform="translate(119.493 0.556)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-7"
                        width="58.316"
                        height="57.027"
                        transform="translate(177.809 57.583)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-0-7-2"
                        width="58.316"
                        height="57.027"
                        transform="translate(294.441 57.583)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-3-1"
                        width="58.316"
                        height="57.027"
                        transform="translate(236.125 0.556)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-0-7-2-3"
                        width="58.316"
                        height="57.027"
                        transform="translate(352.757 0.556)"
                        fill={lightFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                </g>
                <g id="dark" transform="translate(172.128 -0.516)">
                    <rect
                        id="rect847-9"
                        width="58.316"
                        height="57.027"
                        transform="translate(-55.455 0.556)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-0"
                        width="58.316"
                        height="57.027"
                        transform="translate(-113.771 57.583)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-4"
                        width="58.316"
                        height="57.027"
                        transform="translate(2.861 57.583)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-5"
                        width="58.316"
                        height="57.027"
                        transform="translate(61.177 0.556)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-7"
                        width="58.316"
                        height="57.027"
                        transform="translate(119.493 57.583)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40"
                        width="58.316"
                        height="57.027"
                        transform="translate(177.809 0.556)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5"
                        width="58.316"
                        height="57.027"
                        transform="translate(236.125 57.583)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-0-7"
                        width="58.316"
                        height="57.027"
                        transform="translate(352.757 57.583)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-40-5-3"
                        width="58.316"
                        height="57.027"
                        transform="translate(294.441 0.556)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                    <rect
                        id="rect847-9-0-71"
                        width="58.316"
                        height="57.027"
                        transform="translate(-172.087 0.556)"
                        fill={darkFill}
                        strokeLinejoin="round"
                        strokeWidth="0.08"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgBanner;
