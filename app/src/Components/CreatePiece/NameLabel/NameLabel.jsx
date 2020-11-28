import React from "react";
import {styles} from "NameLabel.jss";
import withStyles from "@material-ui/core/styles/withStyles";

class NameLabel extends React.Component {

    getStyle() {
        return {
            left: window.screen.availWidth * 0.17,
            top: window.screen.availHeight * 0.14,
            width: window.screen.availWidth * 0.39,
            height: window.screen.availHeight * 0.037
        }
    }

    render() {
        return (
            <div className={this.props.classes.name_label} style={this.getStyle()}>
                {this.props.name}
            </div>
        )
    }
}

export default withStyles(styles)(NameLabel);