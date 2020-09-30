import React from "react";
import "../Home.css";
import {Link} from "react-router-dom";
/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * NOTE: has since been modified.
 * 
 **/
export const NewGameIcon = () => {
    return (
        <Link to="/NewGame">
            <g transform="translate(338.827 525.928)">
                <g transform="translate(-24.877 -14.81)"  className="icon">
                    <path d="M25.051,14.882v150h150v-150ZM101.687,25.3c8.273,0,19.518,9.488,21.4,18.054a21.429,21.429,0,0,1-2.222,14.012L117.176,64.7l10.287,9.006c5.658,4.954,10.279,9.714,10.268,10.578s-4.92,1.877-10.91,2.251l-10.892.68L119.348,99.6c2.746,9.949,6.006,14.93,16.576,25.328,13.164,12.951,18.742,22.358,16.588,27.973-1.68,4.378-99.968,4.378-101.648,0-2.155-5.615,3.424-15.022,16.588-27.973,10.57-10.4,13.83-15.38,16.576-25.328l3.419-12.384-10.892-.68c-5.991-.374-10.9-1.387-10.91-2.251s4.611-5.624,10.268-10.578L86.2,64.7,82.51,57.362a21.428,21.428,0,0,1-2.222-14.012c1.882-8.567,13.127-18.054,21.4-18.054Z" />
                    <text className="b" transform="translate(101.203 213.294)">
                        <tspan x={-37.589} y={0}>
                            {"New"}
                        </tspan>
                        <tspan x={-48.745} y={52.92}>
                            {"Game"}
                        </tspan>
                    </text>
                </g>
            </g>
        </Link>
        )
}