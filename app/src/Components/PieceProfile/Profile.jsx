import React from "react";
import {ProfileWB } from "./ProfileWB"
import "./Profile.scss";

export class Profile extends React.Component {
    render() {
        return (
            <div className="piece-profile">
                {this.props.children}
                <ProfileWB
                    def={this.props.displayDefs[this.props.pieceName]["W"]}
                    color="W"
                    pieceName={this.props.pieceName}
                    expand={this.props.expand}
                />
                <ProfileWB
                    def={this.props.displayDefs[this.props.pieceName]["B"]}
                    color="B"
                    pieceName={this.props.pieceName}
                    expand={this.props.expand}
                />
            </div>
        );
    }
}
