import React from "react";
import "../Home.css";

/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * NOTE: has since been modified.
 *
 **/

export class AuthorsGithubIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { iconClass: "main-menu-icon-normal" };
        this.setHover = this.setHover.bind(this);
    }

    setHover(iconClass) {
        this.setState({ iconClass: iconClass });
    }
    render() {
        return (
            <>
                <g transform="translate(1460.619 522.902)" className={this.state.iconClass}>
                    <g transform="translate(-28.575 -44.45)">
                        <path d="M29.093,44.548v150h150v-150ZM103,57.992c35.1,0,63.564,26.646,63.564,61.742,0,28.062-17.156,52.076-42.461,60.477-3.214.582-4.378-1.417-4.378-3.062,0-2.075.076-12.627.076-21.154,0-5.946-1.974-9.742-4.3-11.741,14.145-1.594,29.049-3.543,29.049-27.961,0-6.933-2.48-10.425-6.529-14.9.658-1.645,2.809-8.4-.658-17.182-5.289-1.67-17.46,6.832-17.46,6.832a59.782,59.782,0,0,0-31.782,0s-12.171-8.477-17.46-6.832c-3.467,8.755-1.316,15.537-.658,17.182-4.049,4.454-5.972,7.945-5.972,14.9,0,24.343,14.271,26.393,28.416,27.961a14.063,14.063,0,0,0-4.049,8.527c-3.618,1.67-12.905,4.479-18.447-5.289a13.357,13.357,0,0,0-9.767-6.529c-6.2-.076-.4,3.9-.4,3.9,4.15,1.9,7.035,9.261,7.035,9.261,3.72,11.336,21.433,7.541,21.433,7.541,0,5.314.076,13.968.076,15.537,0,1.645-1.139,3.644-4.378,3.062-25.228-8.452-42.89-32.465-42.89-60.527,0-35.1,26.848-61.742,61.945-61.742Zm-39.514,84.97a1.678,1.678,0,0,1,.52.078c.506.253.759.658.582.987a.753.753,0,0,1-1.088.177c-.506-.253-.759-.658-.582-.987a.686.686,0,0,1,.568-.255ZM66.1,145.1a1.346,1.346,0,0,1,.862.424c.43.481.506,1.063.177,1.316-.329.329-.911.152-1.316-.253-.43-.481-.506-1.063-.177-1.316A.6.6,0,0,1,66.1,145.1Zm2.563,3.265a1.262,1.262,0,0,1,.981.652,1.154,1.154,0,0,1,0,1.569c-.329.253-1.012,0-1.417-.582s-.4-1.24,0-1.493A.658.658,0,0,1,68.666,148.36Zm3.074,3.612a1.534,1.534,0,0,1,1.019.506c.506.481.658,1.24.329,1.569-.329.4-1.063.329-1.645-.253-.582-.481-.734-1.24-.329-1.569a.748.748,0,0,1,.626-.253Zm4.618,2.779a1.646,1.646,0,0,1,.374.055c.759.228,1.24.81,1.088,1.316a1.187,1.187,0,0,1-1.569.506c-.759-.152-1.265-.734-1.088-1.24a1.182,1.182,0,0,1,1.195-.638Zm10.261.2c.623.019,1.155.323,1.221.744.076.506-.43.987-1.164,1.164-.759.177-1.417-.152-1.493-.658-.076-.582.43-1.063,1.164-1.24a2.131,2.131,0,0,1,.272-.01Zm-4.863.659c.7-.016,1.276.374,1.276.919,0,.506-.582.911-1.316.911-.835.076-1.417-.329-1.417-.911,0-.506.582-.911,1.316-.911.047-.005.094-.007.141-.009Z" />
                        <text className="b" transform="translate(102.956 243.803)">
                            <tspan x={-71.227} y={0}>
                                {"Author's"}
                            </tspan>
                            <tspan x={-60.795} y={52.92}>
                                {"GitHub"}
                            </tspan>
                        </text>
                    </g>
                </g>
                <rect
                    x={1460.6}
                    y={522.9}
                    width={151}
                    height={254}
                    opacity="0%"
                    onMouseEnter={() => this.setHover("main-menu-icon-highlighted")}
                    onMouseLeave={() => this.setHover("main-menu-icon-normal")}
                />
            </>
        );
    }
}
