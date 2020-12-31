import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from "@material-ui/icons/Storage";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { MuiButton as Button } from "../../Reuseables/MuiButton";
import { fontSize } from "../../styles/fontSize.jss";
import { button, useStyles } from "./LoadDeleteHeader.jss";
import { ConfirmModal } from "../../Reuseables/ConfirmModal";
import { deleteDef } from "../../../API/deleteDef";

export function LoadDeleteHeader({
    pieceName,
    load,
    data,
    theme,
    style,
    parentPage,
    screenCase,
}) {
    const classes = useStyles({
        theme: theme,
        style: style,
        fontSize: fontSize,
    });
    let history = useHistory();
    let [confirmDelete, setConfirmDelete] = useState(false);

    const deletePiece = (pieceName) => {
        deleteDef(pieceName).then(([r]) => {
            //TODO: need to tell PieceProfiles to trigger new API call
        });
    };

    const getButtonMargin = () => {
        switch (screenCase) {
            case "desktop":
                return "0.5em";
            case "mobile":
                return "0.9em";
        }
    };

    let loadMethod = () =>
        load({
            name: data.name,
            whiteImg: data.whiteImg,
            blackImg: data.blackImg,
            offsets: data.whiteOffsets,
            spans: data.whiteSpans
        });
    if (parentPage === "MyPieces") {
        loadMethod = () =>
            history.push({
                path: "/CreatePiece",
                state: {
                    // location state
                    pieceName: pieceName,
                    whiteImg: data.whiteImg,
                    blackImg: data.blackImg,
                    spans: data.whiteSpans,
                    offsets: data.whiteOffsets,
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
                        style={button(fontSize, theme, screenCase)}
                        onClick={loadMethod}
                    >
                        Load
                    </Button>
                    <Button
                        theme={theme}
                        startIcon={<DeleteForever />}
                        style={{
                            ...button(fontSize, theme, screenCase),
                            marginLeft: getButtonMargin(),
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
