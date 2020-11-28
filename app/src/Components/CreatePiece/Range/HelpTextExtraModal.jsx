/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import ReactDOM from "react-dom";
import {useStyles} from "./HelpTextExtraModal.jss";

export const RangeHelpTextExtraModal = () => {
    const classes = useStyles()
    return (
        <div className={classes.range_help_extra_modal}>
            <svg viewBox="0 0 776 340">
                <defs>
                    <pattern id="rthem-a" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 750 752">
                        <image width={747} height={750} xlinkHref="/Images/Diagrams/RangeExample2.png"/>
                    </pattern>
                    <clipPath id="rthem-b">
                        <rect className={classes.rthem_a} width={217} height={43} transform="translate(584 274)"/>
                    </clipPath>
                    <clipPath id="rthem-c">
                        <rect className={classes.rthem_a} width={209} height={43} transform="translate(903 274)"/>
                    </clipPath>
                </defs>
                <g transform="translate(-457 -227)">
                    <g className={classes.rthem_b} transform="translate(465 241)">
                        <rect className={classes.rthem_g} width={768} height={325} rx={15}/>
                        <rect className={classes.rthem_h} x={2.5} y={2.5} width={763} height={320} rx={12.5}/>
                    </g>
                    <rect className={classes.rthem_c} width={220} height={220} transform="translate(583 318)"/>
                    <g className={classes.rthem_d} transform="translate(4 0)">
                        <text className={classes.rthem_e} transform="translate(581 288)">
                            <tspan x={2} y={0}>
                                {"In the diagram, spans and "}
                            </tspan>
                            <tspan x={2} y={23}>
                                {"offsets for hover-off are added."}
                            </tspan>
                        </text>
                    </g>
                    <g className={classes.rthem_f} transform="translate(4 0)">
                        <text className={classes.rthem_e} transform="translate(901 286)">
                            <tspan x={2} y={2}>
                                {"The mirror image is added"}
                            </tspan>
                            <tspan x={2} y={24}>
                                {"to black automatically."}
                            </tspan>
                            <tspan x={0} y={48}/>
                        </text>
                    </g>
                    <image
                        width={220}
                        height={220}
                        transform="translate(903 320)"
                        xlinkHref="/Images/Diagrams/RangeExample1.png"
                    />
                </g>
            </svg>
        </div>

    )
};

export default RangeHelpTextExtraModal;

