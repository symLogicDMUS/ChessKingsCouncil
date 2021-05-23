import React, {useContext, useState} from "react";
import * as firebase from "firebase";
import "firebase/auth";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import {KeyboardBackspace} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {SeeMore} from "../../../Reuseables/UserInput/SeeMore";
import {PageTitle} from "../../../Reuseables/AppBar/PageTitle";
import {SearchBox} from "../../../Reuseables/UserInput/SearchBox";
import {MuiCheckbox} from "../../../Reuseables/Clickables/MuiCheckbox";
import { useStyles as useMoreStyles } from "../CustomizeTitle.jss";
import { pawn } from "../../../styles/icons/customize/pawn.jss";
import { useStyles } from "./CustomizeTitleContentXSm.jss";
import {UserContext} from "../../../../Context/UserContext";

const SignInWindow = React.lazy(() => import("../../../Home/Sign In/SignInWindow"));

export function CustomizeTitleContentXSm(props) {
    const {theme, className, promoAllClick, updateSearchText, ...other} = props;

    const uid = useContext(UserContext);
    const isSignedIn = Boolean(uid);

    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    const [signInWindow, setSignInWindow] = useState(false);
    const [action, setAction] = useState("");

    const getList = () => {
        if (action === "search") {
            return (
                <List className={classes.list_items}>
                    <ListItem>
                        <SearchBox
                            theme={theme}
                            isMenuItem={true}
                            className={classes2.search}
                            updateSearchText={updateSearchText}
                        />
                    </ListItem>
                    <ListItem onClick={() => setAction(null)} button>
                        <Button startIcon={<KeyboardBackspace />}>
                            Go Back
                        </Button>
                    </ListItem>
                </List>
            )
        }

        if (action==="promote") {
            return (
                <div className={classes.list_items}>
                    <MuiCheckbox
                        noWrap={true}
                        theme={theme}
                        variant="caption"
                        onClick={promoAllClick}
                        className={classes2.promo_all}
                    >
                        Promo All
                    </MuiCheckbox>
                    <Button
                        onClick={() => setAction(null)}
                        startIcon={<KeyboardBackspace />}
                    >
                        Go Back
                    </Button>
                </div>
            )
        }

        return (
            <List className={classes.list_items}>
                <ListItem onClick={() => setAction("promote")} button>
                    <ListItemIcon>
                        <SvgIcon>
                            {pawn}
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText>
                        Promote All
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setAction("search")} button>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Search Piece
                    </ListItemText>
                </ListItem>
                {isSignedIn ? (
                    <ListItem onClick={() => firebase.auth().signOut()} button>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Sign Out
                        </ListItemText>
                    </ListItem>
                ) : (
                    <ListItem onClick={() => setSignInWindow(true)} button>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Sign In
                        </ListItemText>
                    </ListItem>
                )}
            </List>
        )
    };

    return (
        <>
            {signInWindow ? (
                <SignInWindow
                    theme={theme}
                    close={() => setSignInWindow(false)}
                    goBack={() => setSignInWindow(false)}
                />
            ) : (
                <Box
                    className={clsx(classes.content, {
                        [className]: className
                    })}
                    {...other}
                >
                    <PageTitle theme={theme} className={classes2.title}>
                        Customize Game
                    </PageTitle>
                    <SeeMore theme={theme}>
                        {getList()}
                    </SeeMore >
                </Box>
            )}

        </>
    );
}