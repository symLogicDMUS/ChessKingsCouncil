import React from "react";
import { Link } from "react-router-dom";
import "../PickType.css";

export class Council extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.setType("council")
    }
    render() {
        return (
            <Link>
                <g transform="translate(1075.593 405.978)" onClick={this.handleChange}>
                    <g transform="translate(-24.871 -34.396)" className="icon">
                        <path d="M25.278,34.418v150h150.9v-150Zm73.284,8.451q4.105,0,4.105,4.08t4.1,4.081c2.281,0,4.105,1.36,4.105,3.061s-1.825,3.06-4.105,3.06c-6.224,0-5.492,10.678,1.188,17.318l5.293,5.261L120,75.581c17.454-10.723,42.1,1.583,45.558,22.745,1.6,9.819-5.984,26.248-17.563,38.032l-8.663,8.816,2.191,10.158c4.273,19.806,8.277,18.118-42.965,18.118-42.686,0-45.157-.208-45.157-3.8a111.51,111.51,0,0,1,1.946-14l1.946-10.2-8.929-9.531C26.413,112.482,25.992,90.39,47.226,76.024c8.865-6,22.093-6.158,29.511-.358L82.15,79.9l6.04-4.742c7.535-5.917,8.986-18,2.161-18-2.281,0-4.1-1.36-4.1-3.06s1.824-3.061,4.1-3.061q4.105,0,4.105-4.081t4.105-4.08Z" />
                        <text className="b" transform="translate(99.719 216.863)">
                            <tspan x={-52.134} y={0}>
                                {"Council"}
                            </tspan>
                        </text>
                    </g>
                </g>
            </Link>
        );
    }
}