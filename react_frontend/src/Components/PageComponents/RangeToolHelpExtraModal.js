/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import ReactDOM from "react-dom";
import "./RangeToolHelpExtraModal.css";

export const RangeToolHelpExtraModal = () => (

  <div style={{position: "absolute",
               zIndex: 6,
               width: 768,
               height: 325,
               left: 384,
               top: 504 
              }}>
    <svg viewBox="0 0 776 340">
      <defs>
      <pattern
        id="rthem-a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 750 752"
      >
        <image width={747} height={750} xlinkHref="/Images/Diagrams/RangeExample2.png" />
      </pattern>
      <clipPath id="rthem-b">
        <rect
          className="rthem-a"
          width={217}
          height={43}
          transform="translate(584 274)"
        />
      </clipPath>
      <clipPath id="rthem-c">
        <rect
          className="rthem-a"
          width={209}
          height={43}
          transform="translate(903 274)"
        />
      </clipPath>
    </defs>
      <g transform="translate(-457 -227)">
      <g className="rthem-b" transform="translate(465 241)">
        <rect className="rthem-g" width={768} height={325} rx={15} />
        <rect
          className="rthem-h"
          x={2.5}
          y={2.5}
          width={763}
          height={320}
          rx={12.5}
        />
      </g>
      <rect
        className="rthem-c"
        width={220}
        height={220}
        transform="translate(583 318)"
      />
      <g className="rthem-d" transform="translate(4 0)">
        <text className="rthem-e" transform="translate(581 288)">
          <tspan x={2} y={0}>
            {"In the diagram, spans and "}
          </tspan>
          <tspan x={2} y={23}>
            {"offsets for white are added."}
          </tspan>
        </text>
      </g>
      <g className="rthem-f" transform="translate(4 0)">
        <text className="rthem-e" transform="translate(901 286)">
          <tspan x={2} y={2}>
            {"The mirror image is added"}
          </tspan>
          <tspan x={2} y={24}>
            {"to black automatically."}
          </tspan>
          <tspan x={0} y={48} />
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

);

export default RangeToolHelpExtraModal;

export let test = () => ReactDOM.render(<RangeToolHelpExtraModal />, document.getElementById('root'))