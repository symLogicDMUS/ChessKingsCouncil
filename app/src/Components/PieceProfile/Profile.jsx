import React from "react";
import {ProfileWB } from "./ProfileWB"
import "./Profile.scss";

export class Profile extends React.Component {
    render() {
        return (
            <div className="piece-profile">
                {this.props.children}
                <ProfileWB
                    color="W"
                    def={this.props.displayDefs[this.props.pieceName]["W"]}
                    pieceName={this.props.pieceName}
                    expand={this.props.expand}
                />
                <ProfileWB
                    color="B"
                    def={this.props.displayDefs[this.props.pieceName]["B"]}
                    pieceName={this.props.pieceName}
                    expand={this.props.expand}
                />
            </div>
        );
    }
}
