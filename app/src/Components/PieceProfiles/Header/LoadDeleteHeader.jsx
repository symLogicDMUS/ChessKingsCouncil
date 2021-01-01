import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from "@material-ui/icons/Storage";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { MuiButton as Button } from "../../Reuseables/MuiButton";
import { fontSize } from "../../styles/fontSize.jss";
import { ConfirmModal } from "../../Reuseables/ConfirmModal";
import { deleteDef } from "../../../API/deleteDef";
import {button, getButtonMargin, useStyles} from "./LoadDeleteHeader.jss";

export function LoadDeleteHeader({
    load,
    def,
    pieceName,
    parentPage,
    screenCase,
    theme,
    style,
}) {
    let [confirmDelete, setConfirmDelete] = useState(false);
    let history = useHistory();
    const classes = useStyles({
        theme: theme,
        style: style,
        fontSize: fontSize,
    });

    const deletePiece = (pieceName) => {
        deleteDef(pieceName).then(([r]) => {
            //TODO: need to tell PieceProfiles to trigger new API call
        });
    };

    let loadMethod;
    if (parentPage === "CreatePiece") {
        loadMethod = () =>
            load({
                name: pieceName,
                whiteImg: def.W.img,
                blackImg: def.B.img,
                spans: def.W.spans,
                offsets: def.W.offsets,
            });
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
            {confirmDelete ? (
                <ConfirmModal
                    theme={theme}
                    title={`You are asking to delete piece "${pieceName}". Games in progress will not be
                                effected but the piece's record for new games will be destroyed. This action cannot be undone.
                                Are you sure you want to delete piece "${pieceName}"?`}
                    yesClick={() => deletePiece(pieceName)}
                    noClick={() => setConfirmDelete(false)}
                    closeClick={() => setConfirmDelete(false)}
                />
            ) : null}
            <div className={classes.header}>
                <Typography className={classes.piece_name}>
                    {pieceName}
                </Typography>
                <Box className={classes.buttons_flexbox}>
                    <Button
                        theme={theme}
                        startIcon={<StorageIcon />}
                        style={button(fontSize, theme)}
                        onClick={loadMethod}
                    >
                        Load
                    </Button>
                    <Button
                        theme={theme}
                        startIcon={<DeleteForever />}
                        style={{
                            ...button(fontSize, theme),
                            marginLeft: getButtonMargin(screenCase),
                        }}
                        onClick={() => setConfirmDelete(true)}
                    >
                        Delete
                    </Button>
                </Box>
            </div>
        </>
    );
}
