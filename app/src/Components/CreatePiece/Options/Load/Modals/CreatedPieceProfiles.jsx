import React from "react";
import MediaQuery from "react-responsive";
import {ProfilesWindow} from "../../../../PieceProfile/ProfilesWindow";
import "./CreatedPieceProfiles.scss";

export class CreatedPieceProfiles extends React.Component {
    constructor(props) {
        super(props);
        // this.accept = this.accept.bind(this);
    }

    getComponents(screenCase) {
        return (
            <>
                <NavBar
                    screenCase={screenCase}
                    currentPage="LoadGame"
                    theme={this.state.theme}
                    startingProperties={{ initLeft: 0, initTop: 0 }}
                />
                {this.state.messageModal && (
                    <MessageModal
                        screenCase={screenCase}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                <ProfilesWindow screenCase={screenCase} load={this.props.load} />
            </>
        );
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>{this.getComponents("desktop")}</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery>
            </>
        );
    }
}
