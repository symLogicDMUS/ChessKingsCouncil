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
            
        return ( 
            <div className="nav-bar-regular" style={{top: this.props.navBarPosTop, left: this.props.navBarPosLeft}}>
                {this.state.navExpanded && (<HomeLink styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<NewGameLink currentPage={this.props.currentPage} setHelpText={this.props.setHelpText} togleHelpModal={this.props.togleHelpModal} styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<LoadGameLink currentPage={this.props.currentPage} setHelpText={this.props.setHelpText} togleHelpModal={this.props.togleHelpModal} styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<CreatePieceLink currentPage={this.props.currentPage} setHelpText={this.props.setHelpText} togleHelpModal={this.props.togleHelpModal} styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<ChessRulesLink styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<CouncilRulesLink currentPage={this.props.currentPage} setHelpText={this.props.setHelpText} togleHelpModal={this.props.togleHelpModal} styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<MyPiecesLink currentPage={this.props.currentPage} setHelpText={this.props.setHelpText} togleHelpModal={this.props.togleHelpModal} styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<AuthorGithubLink styles={styles} unsavedProgress={this.props.unsavedProgress} setConfirmRedirect={this.props.setConfirmRedirect} />)}
                {this.state.navExpanded && (<NavColapse  styles={styles} togleNav={this.togleNav} unsavedProgress={this.props.unsavedProgress} /> )}
                {! this.state.navExpanded && (<NavExpand styles={styles} togleNav={this.togleNav} unsavedProgress={this.props.unsavedProgress} /> )}
            </div>
        )
    }
}