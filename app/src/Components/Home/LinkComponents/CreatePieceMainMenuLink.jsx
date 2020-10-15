import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * NOTE: has since been modified.
 *
 **/

export class CreatePieceIcon extends React.Component {
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
            <Link to="/CreatePiece">
                <g transform="translate(712.64 524.411)" className={this.state.iconClass}>
                    <g transform="translate(-27.517 -25.929)">
                        <path d="M27.877,26.519v150h150v-150ZM81.818,38.547c6.855,0,13.131,14.187,7.78,17.584-1.879,1.193,11.668,32.17,14.069,32.17s15.948-30.977,14.069-32.17c-5.7-3.616,1.041-17.584,8.481-17.584,7.65,0,12.724,13.533,6.927,18.475-2.393,2.041-2.246,5.061.99,20.274,2.092,9.832,4.245,18.331,4.785,18.886s4.166-1.225,8.058-3.954c4.86-3.409,6.735-6.075,5.988-8.513a9.355,9.355,0,0,1,8.893-12c12.063,0,14.5,12.177,3.748,18.7-12.329,7.473-22.735,34.029-20.982,53.547.579,6.444,1.7,13.815,2.482,16.38L148.533,165H58.8l1.429-4.664c2.945-9.613,3.478-28.236,1.032-36.059C55.716,106.556,49.03,94.839,42.043,90.6c-11.052-6.7-8.837-18.888,3.432-18.888a9.355,9.355,0,0,1,8.893,12c-.747,2.438,1.128,5.1,5.988,8.513,3.892,2.73,7.518,4.509,8.058,3.954S71.107,87.128,73.2,77.3c3.236-15.214,3.384-18.234.99-20.274-6.1-5.2-.622-18.475,7.628-18.475Z" />
                        <text className="b" transform="translate(98.232 225.999)">
                            <tspan x={-54.022} y={0}>
                                {"Create"}
                            </tspan>
                            <tspan x={-42.678} y={52.92}>
                                {"Piece"}
                            </tspan>
                        </text>
                    </g>
                </g>
                <rect
                    x={712.64}
                    y={524.411}
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
