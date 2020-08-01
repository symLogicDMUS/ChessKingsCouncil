import React from "react";
import {HomeLink} from "./ComponentsRegular/HomeLink";
import {NewGameLink} from "./ComponentsRegular/NewGameLink";
import {LoadGameLink} from "./ComponentsRegular/LoadGameLink";
import {CreatePieceLink} from "./ComponentsRegular/CreatePieceLink";
import {ChessRulesLink} from "./ComponentsRegular/ChessRulesLink";
import {CouncilRulesLink} from "./ComponentsRegular/CouncilRulesLink";
import {MyPiecesLink} from "./ComponentsRegular/MyPiecesLink";
import {AuthorGithubLink} from "./ComponentsRegular/AuthorGithubLink";
import { NavColapse } from "./NavColapse";
import {NavExpand} from "./NavExpand";
import "./NavBarRegular.css";


export class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {navExpanded: true};
        this.togleNav = this.togleNav.bind(this);
        this.class_ = "nav-bar-regular";
    }

    togleNav(boolVal) {
        this.setState({navExpanded: boolVal});
    }

    render() {

        let styles = { iconColor: this.props.iconColor, 
                       iconColorHover: this.props.iconColorHover,
                       backgroundColor: this.props.backgroundColor, 
                       backgroundColorSelected: this.props.backgroundColorSelected, 
                       border: this.props.border }

        if (this.props.navBorder) 
            this.class_ = "nav-bar-regular-wb";
        else
            this.class_ = "nav-bar-regular";

        return ( 
            <div className={this.class_} style={{top: this.props.navBarPosTop, left: this.props.navBarPosLeft}}>
                {this.state.navExpanded && (<HomeLink styles={styles} />)}
                {this.state.navExpanded && (<NewGameLink styles={styles} />)}
                {this.state.navExpanded && (<LoadGameLink styles={styles} />)}
                {this.state.navExpanded && (<CreatePieceLink styles={styles} />)}
                {this.state.navExpanded && (<ChessRulesLink styles={styles} />)}
                {this.state.navExpanded && (<CouncilRulesLink styles={styles} />)}
                {this.state.navExpanded && (<MyPiecesLink styles={styles} />)}
                {this.state.navExpanded && (<AuthorGithubLink styles={styles} />)}
                {this.state.navExpanded && (<NavColapse  styles={styles} togleNav={this.togleNav} /> )}
                {! this.state.navExpanded && (<NavExpand styles={styles} togleNav={this.togleNav} /> )}
            </div>
        )
    }
}