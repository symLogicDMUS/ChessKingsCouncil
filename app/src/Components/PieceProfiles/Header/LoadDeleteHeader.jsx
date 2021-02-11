import React from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from "@material-ui/icons/Storage";
import { deleteDef } from "../../../API/deleteDef";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { MuiButton as Button } from "../../Reuseables/MuiButton";
import { MuiDeleteButton as DeleteButton } from "../../Reuseables/MuiDeleteButton";
import { useStyles } from "./LoadDeleteHeader.jss";

export function LoadDeleteHeader({
    def,
    load,
    theme,
    style,
    dispatch,
    pieceName,
    parentPage,
    screenCase,
    toggleModal,
}) {
    let history = useHistory();

    const classes = useStyles({theme: theme, style: style});

    const deletePiece = (pieceName) => {
        deleteDef(pieceName).then(([r]) => {
            dispatch({type: 'delete', payload: pieceName})
        });
    };

    let loadMethod;
    if (parentPage === "CreatePiece") {
        loadMethod = () => {
            load({
                name: pieceName,
                whiteImg: def.W.img,
                blackImg: def.B.img,
                spans: def.W.spans,
                offsets: def.W.offsets,
            });
            toggleModal()
        }
    } else {
        loadMethod = () =>
            history.push({
                pathname: "/CreatePiece",
                state: {
                    name: pieceName,
                    whiteImg: def.W.img,
                    blackImg: def.B.img,
                    spans: def.W.spans,
                    offsets: def.W.offsets,
                },
            });
    }

    return (
        <>
            <div className={classes.header}>
                <Typography className={classes.piece_name}>
                    {pieceName}
                </Typography>
                <Box className={classes.buttons_outer_flexbox}>
                    <Box className={classes.buttons_inner_flexbox}>
                        <Button
                            theme={theme}
                            startIcon={<StorageIcon classes={{root: classes.icon}} />}
                            classesObj={{root: classes.load_button}}
                            onClick={loadMethod}
                        >
                            Load
                        </Button>
                        <DeleteButton
                            onAcceptDelete={() => deletePiece(pieceName)}
                            modalTitle={`You are asking to delete piece ${pieceName}.`}
                            modalText={`Game in progress will no be effected but the record of the piece for new games will be 
                                    destroyed. This action can not be undone. Are you sure you want to delete piece ${pieceName}?`}
                            startIcon={<DeleteForever classes={{root: classes.icon}} />}
                            classesObj={{root: classes.delete_button}}
                            isDisabled={false}
                            theme={theme}
                        />
                    </Box>
                </Box>
            </div>
        </>
    );
}
