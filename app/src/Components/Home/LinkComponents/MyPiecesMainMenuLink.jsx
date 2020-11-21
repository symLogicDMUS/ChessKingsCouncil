import React from "react";
import "../Home.scss";
import { Link } from "react-router-dom";
/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * NOTE: has since been modified.
 *
 **/
export class MyPiecesIcon extends React.Component {
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
            <Link to="/MyPieces">
                <g transform="translate(1273.497 523.103)" className={this.state.iconClass}>
                    <text className="b" transform="translate(76.879 199.284)">
                        <tspan x={-25.859} y={0}>
                            {"My"}
                        </tspan>
                        <tspan x={-49.286} y={52.92}>
                            {"Pieces"}
                        </tspan>
                    </text>
                    <path d="M.5-.1v150h150V-.1ZM75.65,10.906A12.784,12.784,0,0,1,81,12.107c5.335,2.431,6.8,11.28,2.564,15.513-1.268,1.268-1.925,2.572-1.461,2.9C96.4,40.567,106.539,49.829,110.321,56.282c6.795,11.594,6.221,19.843-2.236,32.137-6.822,9.917-7.392,13.248-3.752,21.907,1.211,2.881.345,3.409-5.592,3.409-3.864,0-7.025.9-7.025,2,0,3.437,9.472,5.794,23.282,5.794,14.872,0,20.442,3,22.614,12.172l1.268,5.356H117.148c-11.519,0-18.873-.434-24.222-1.929a14.089,14.089,0,0,1-3.358-1.187c-3.758-1.662-6.477-4.147-9.365-7.82l-4.067-5.171-4.067,5.171c-7.177,9.124-13.3,10.935-36.946,10.935H13.391l1.268-5.356c2.172-9.174,7.742-12.172,22.614-12.172,8.1,0,14.7-.812,18.782-2.176,1.135-.61,2.278-1.183,3.416-1.712a2.534,2.534,0,0,0,1.083-1.906c0-1.1-3.161-2-7.025-2-5.938,0-6.8-.528-5.592-3.409,3.64-8.659,3.069-11.991-3.752-21.907-8.842-12.855-9.2-21.1-1.436-33.335C45.81,50.257,53.041,42.91,58.817,38.756S69.7,30.917,70.163,30.565s-.193-1.677-1.461-2.945-2.3-4.777-2.3-7.8c0-5.371,4.121-8.89,9.253-8.915ZM71.259,117.2l-.162.11q.069.077.136.156c.009-.089.02-.179.025-.266Zm16.292,1.783-1.707.053H87.6l-.05-.053Zm7.849,8.708-.019.1.039,0,.023-.1Zm10.893,1.328,0,.019,2.338.266-2.339-.285Zm-65.125,1.656-3.118.029h3.094l.024-.029Z" />
                </g>
                <rect
                    x={1273.497}
                    y={523.103}
                    width={151}
                    height={254}
                    opacity="0%"
                    onMouseEnter={() => this.setHover("main-menu-icon-highlighted")}
                    onMouseLeave={() => this.setHover("main-menu-icon-normal")}
                />
            </Link>
        );
    }
}
