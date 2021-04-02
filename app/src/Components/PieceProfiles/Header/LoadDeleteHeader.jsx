import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from "@material-ui/icons/Storage";
import { deleteDef } from "../../../API/deleteDef";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { MuiButton as Button } from "../../Reuseables/Clickables/MuiButton";
import { MuiDeleteButton as DeleteButton } from "../../Reuseables/Clickables/MuiDeleteButton";
import {decrementImgRefCount} from "../../../API/decrementImgRefCount";
import {useStyles as useMoreStyles}
    from "../../PieceProfiles/Header/ProfileHeader.jss"
import {useStyles} from "./LoadDeleteHeader.jss";

export function LoadDeleteHeader({
    def,
    load,
    theme,
    dispatch,
    pieceName,
    parentPage,
    toggleModal,
}) {
    const history = useHistory();

    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme});

    const deletePiece = (pieceName) => {
        decrementImgRefCount(def.W.img).then(r => {
            decrementImgRefCount(def.B.img).then(r => {
                deleteDef(pieceName).then(([r]) => {
                    dispatch({type: 'delete', payload: pieceName})
                });
            })
        })
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
            <div className={clsx(classes.header, {
                [classes2.header]: true,
            })}>
                <Typography variant='subtitle2' className={classes2.piece_name}>
                    {pieceName}
                </Typography>
                <Button
                    theme={theme}
                    startIcon={<StorageIcon className={classes.icon}/>}
                    rootClassName={classes.button}
                    addedClassName={classes.load_button}
                    onClick={loadMethod}
                >
                    Load
                </Button>
                <DeleteButton
                    onAcceptDelete={() => deletePiece(pieceName)}
                    modalTitle={`You are asking to delete piece ${pieceName}.`}
                    modalText={`Game in progress will no be effected but the record of the piece for new games will be 
                                    destroyed. This action can not be undone. Are you sure you want to delete piece ${pieceName}?`}
                    startIcon={<DeleteForever className={clsx(classes.icon, {
                        [classes.delete_icon]: true
                    })}/>}
                    variant='outlined'
                    rootClassName={classes.button}
                    addedClassName={classes.delete_button}
                    isDisabled={false}
                    theme={theme}
                />
            </div>
        </>
    );
}
