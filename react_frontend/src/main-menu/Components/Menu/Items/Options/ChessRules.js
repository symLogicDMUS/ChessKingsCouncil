import React from "react";
import "../../MenuComponents.css";

export class ChessRules extends React.Component {
    render(){
        return (
            <g transform="translate(876.411 514.579)" className="icon">
                <path d="M23.589,10.421v150h150v-150Zm82.191,4.764c1.512-.064,2.756,2.136,4.425,6.753,1.746,4.828,5.893,9.238,12.941,13.76,13.191,8.465,23.34,20.307,27.081,31.6,1.916,5.784,2.965,18.569,3.028,36.909.053,15.433.858,31.568,1.79,35.855l1.694,7.794H106.624c-46.687,0-50.116-.253-50.116-3.7,0-13.743,12.9-39.945,19.671-39.945,1.4,0,4.242-1.871,6.311-4.157a14.735,14.735,0,0,1,9.779-4.157c13.677,0,26.653-12.092,26.51-24.7l-.086-7.514L114.1,72.9c-6.8,13.667-13.381,17.594-29.93,17.86-12.82.206-14.2.69-19.264,6.755l-5.455,6.533L51.477,99.24,43.5,94.426l4.784-3.351c4.291-3.006,4.412-3.494,1.168-4.738a6.084,6.084,0,0,0-5.971.967c-4.381,4.381-5.68,2.389-5.68-8.71V67.529l14.3-9.772c7.866-5.375,16.567-11.871,19.334-14.435A143.631,143.631,0,0,1,87.107,31.832c5.85-3.754,12.137-9.115,13.97-11.913,2.014-3.074,3.45-4.682,4.7-4.735Z" />
                <text className="b" transform="translate(103.964 210.499)">
                    <tspan x={-48.397} y={0}>
                        {"Chess"}
                    </tspan>
                    <tspan x={-45.632} y={52.92}>
                        {"Rules"}
                    </tspan>
                </text>
            </g>

          );
    }
}