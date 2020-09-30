import React from "react";
import {HomeLink} from "./ComponentsRegular3/HomeLink";
import {NewGameLink} from "./ComponentsRegular3/NewGameLink";
import {LoadGameLink} from "./ComponentsRegular3/LoadGameLink";
import {CreatePieceLink} from "./ComponentsRegular3/CreatePieceLink";
import {ChessRulesLink} from "./ComponentsRegular3/ChessRulesLink";
import {CouncilRulesLink} from "./ComponentsRegular3/CouncilRulesLink";
import {MyPiecesLink} from "./ComponentsRegular3/MyPiecesLink";
import {AuthorGithubLink} from "./ComponentsRegular3/AuthorGithubLink";
import {NavColapseLarge} from "./NavColapseLarge";
import {NavExpandLarge} from "./NavExpandLarge";
import "./NavBarRegular3.css";

export class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bValue: true};
        this.navExpanded = true;
        this.togleNav = this.togleNav.bind(this);
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({bValue: ! this.state.bValue});
    }

    render() {
        return (
            <div className="nav-bar-regular3" style={{position:this.props.navBarPos, top: this.props.navBarPosTop, left: this.props.navBarPosLeft}}>
                {this.navExpanded && (<HomeLink srcNormal="/Images/Navbar/home-reg-000000.svg" 
                                                srcSelected="/Images/Navbar/home-reg-ffffff.svg" />)}
                {this.navExpanded && (<NewGameLink currentPage={this.props.currentPage} 
                                                   setHelpText={this.props.setHelpText} 
                                                   togleHelpModal={this.props.togleHelpModal}
                                                   srcNormal="/Images/Navbar/new-game-reg-000000.svg" 
                                                   srcSelected="/Images/Navbar/new-game-reg-ffffff.svg" />)}
                {this.navExpanded && (<LoadGameLink currentPage={this.props.currentPage} 
                                                    setHelpText={this.props.setHelpText} 
                                                    togleHelpModal={this.props.togleHelpModal}
                                                    srcNormal="/Images/Navbar/load-game-reg-000000.svg" 
                                                    srcSelected="/Images/Navbar/load-game-reg-ffffff.svg" />)}
                {this.navExpanded && (<CreatePieceLink currentPage={this.props.currentPage} 
                                                       setHelpText={this.props.setHelpText} 
                                                       togleHelpModal={this.props.togleHelpModal}
                                                       srcNormal="/Images/Navbar/create-piece-reg-000000.svg" 
                                                       srcSelected="/Images/Navbar/create-piece-reg-ffffff.svg" />)}
                {this.navExpanded && (<ChessRulesLink  srcNormal="/Images/Navbar/chess-rules-reg-000000.svg" 
                                                       srcSelected="/Images/Navbar/chess-rules-reg-ffffff.svg" />)}
                {this.navExpanded && (<CouncilRulesLink currentPage={this.props.currentPage} 
                                                        setHelpText={this.props.setHelpText} 
                                                        togleHelpModal={this.props.togleHelpModal}
                                                        srcNormal="/Images/Navbar/council-rules-reg-000000.svg" 
                                                        srcSelected="/Images/Navbar/council-rules-reg-ffffff.svg" />)}
                {this.navExpanded && (<MyPiecesLink currentPage={this.props.currentPage} 
                                                    setHelpText={this.props.setHelpText} 
                                                    togleHelpModal={this.props.togleHelpModal}
                                                    srcNormal="/Images/Navbar/my-pieces-reg-000000.svg" 
                                                    srcSelected="/Images/Navbar/my-pieces-reg-ffffff.svg" />)}
                {this.navExpanded && (<AuthorGithubLink  srcNormal="/Images/Navbar/author-github-reg-000000.svg" 
                                                         srcSelected="/Images/Navbar/author-github-reg-ffffff.svg" />)}
                {this.navExpanded && (<NavColapseLarge color={this.props.expandColapseColor} togleNav={this.togleNav} />)}
                {! this.navExpanded && (<NavExpandLarge color={this.props.expandColapseColor} togleNav={this.togleNav} />)}
            </div>
        )
    }
}