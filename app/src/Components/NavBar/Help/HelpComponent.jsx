import React from "react";
import { findDidUserVisitPage, recordUserVisitedPage } from "../../../API/findRecordDidUserVisitPage";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "./HelpComponent.jss";


class HelpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
    }
    componentDidMount() {
        findDidUserVisitPage(this.props.currentPage).then(([exists]) => {
            recordUserVisitedPage(this.props.currentPage).then(([res]) => {
                const firstTime = !exists;
                this.props.setFirstTime(firstTime);
            });
        });
    }
    getIconColor() {
        if (this.props.theme === "light") return "b1faae";
        if (this.props.theme === "dark") return "969696";
    }

    unselect() {
        this.setState({ selected: false });
    }

    select() {
        this.setState({ selected: true });
    }

    render() {
        return (
            <div
                className={this.props.classes.help}
                onMouseEnter={this.select}
                onMouseLeave={this.unselect}
                onClick={() => this.props.togleHelpModal(true)}
            >
                <img
                    src={`/Images/Navbar/${this.props.pageIcon}-${this.getIconColor()}.svg`}
                    className={this.props.classes.help_icon_image}
                    alt=""
                />
            </div>
        );
    }
}

export default withStyles(styles)(HelpComponent)