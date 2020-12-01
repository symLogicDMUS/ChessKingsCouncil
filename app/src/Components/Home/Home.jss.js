import { makeStyles } from "@material-ui/core/styles";

const pageLink = {
    width: window.screen.availWidth * 0.15,
};

export const useStyles = makeStyles({
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
});
