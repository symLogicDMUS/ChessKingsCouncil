import { makeStyles } from "@material-ui/core/styles";
import {fullScreenImg} from "../styles/fullScreenImg.jss";

const pageLink = {
    width: window.screen.availWidth * 0.15,
};

export const styles = {
    home: {
        ...fullScreenImg,
        backgroundImage: "url('/Images/Background/light-background.svg')"
    },
    new_game: {
        ...pageLink,
    },
    load_game: {
        ...pageLink,
    },
    create_piece: {
        ...pageLink,
    },
    chess_rules: {
        ...pageLink,
    },
    council_rules: {
        ...pageLink,
    },
    my_pieces: {
        ...pageLink,
    },
    author_github: {
        ...pageLink,
    },
};
