import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import StorageIcon from "@material-ui/icons/Storage";
import { deleteDef } from "../../../API/deleteDef";
import DeleteForever from "@material-ui/icons/DeleteForever";
import {decrementImgRefCount} from "../../../API/decrementImgRefCount";
import { MuiButton as Button } from "../../Reuseables/Clickables/MuiButton";
import { MuiDeleteButton as DeleteButton } from "../../Reuseables/Clickables/MuiDeleteButton";
import {useStyles as useMoreStyles} from "../../PieceProfiles/Header/ProfileHeader.jss"
import {PieceName} from "./PieceName";
import {useStyles} from "./LoadDeleteHeader.jss";
import {decrementImgRefCounts} from "../../../API/decrementImgRefCounts";

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
        decrementImgRefCounts([def.W.img, def.B.img]).then(r => {
            deleteDef(pieceName).then(([r]) => {
                dispatch({type: 'delete', payload: pieceName})
            });
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
                <PieceName theme={theme} tooltipPlacement={'left-start'}>
                    {pieceName}
                </PieceName>
                <Button
                    theme={theme}
                    rootClassName={classes.button}
                    addedClassName={classes.load_button}
                    startIcon={<StorageIcon className={classes.icon}/>}
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
