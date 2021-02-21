import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {SignOutMobile} from "./SignOutMobile";
import {PageLinkMobile} from "./PageLinkMobile";
import {Background} from "../Reuseables/Background";
import {resolveScreenCase} from "../helpers/resolveScreenCase";
import {
    create_piece_adjuster,
    my_pieces_adjuster,
    sign_out_adjuster,
    icon_adjuster,
    useStyles
} from "./MainMenuMobile.jss";


export function MainMenuMobile(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Background isFixed={true} theme={props.theme} />
            <div className={classes.main_menu}>
                <MediaQuery maxAspectRatio={'834/1194'}>
                    <Box className={classes.title_box}>
                        <img
                            src={`/Images/titles/mobile/main-menu/title-${props.theme}.svg`}
                            className={classes.title}
                        />
                    </Box>
                </MediaQuery>
                <MediaQuery minAspectRatio={'7/10'}>
                    <Box className={classes.title_box}>
                        <img
                            src={`/Images/titles/desktop/title-${props.theme}.svg`}
                            className={classes.title}
                        />
                    </Box>
                </MediaQuery>
                <Box className={classes.page_links}>
                    <SignOutMobile
                        signOut={props.signOut}
                        theme={props.theme}
                        style={sign_out_adjuster(resolveScreenCase('mobile'))}
                        iconStyle={icon_adjuster()}
                    />
                    <PageLinkMobile
                        path="/NewGame"
                        pathType="local"
                        icon="new-game"
                        pageName="New Game"
                        theme={props.theme}
                    />
                    <PageLinkMobile
                        path="/LoadGame"
                        pathType="local"
                        icon="load-game"
                        pageName="Load Game"
                        theme={props.theme}
                    />
                    <PageLinkMobile
                        path="/CreatePiece"
                        pathType="local"
                        icon="create-piece"
                        pageName="Create Piece"
                        theme={props.theme}
                        style={create_piece_adjuster(resolveScreenCase('mobile'))}
                    />
                    <PageLinkMobile
                        path="/MyPieces"
                        pathType="local"
                        icon="my-pieces"
                        pageName="My Pieces"
                        theme={props.theme}
                        style={my_pieces_adjuster()}
                        iconStyle={icon_adjuster()}
                    />
                    <PageLinkMobile
                        path="https://www.chess.com/learn-how-to-play-chess"
                        pathType="remote"
                        icon="chess-rules"
                        pageName="Chess Rules"
                        theme={props.theme}
                    />
                    <PageLinkMobile
                        path="/CouncilRules"
                        pathType="local"
                        icon="council-rules"
                        pageName="Council Rules"
                        theme={props.theme}
                    />
                    <PageLinkMobile
                        path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                        pathType="remote"
                        icon="author-github"
                        pageName="Author GitHub"
                        theme={props.theme}
                    />
                </Box>
            </div>
        </>
    );
}
