import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from "@material-ui/icons/Storage";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { MuiButton, MuiButton as Button } from "../../Reuseables/MuiButton";
import { fontSize } from "../../styles/fontSize.jss";
import { StandardModal } from "../../Reuseables/StandardModal";
import { deleteDef } from "../../../API/deleteDef";
import { button, getButtonMargin, useStyles } from "./LoadDeleteHeader.jss";
import { MuiDeleteButton } from "../../Reuseables/MuiDeleteButton";

export function LoadDeleteHeader({
    load,
    def,
    pieceName,
    parentPage,
    screenCase,
    theme,
    style,
}) {
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
                    <MuiDeleteButton
                        onAcceptDelete={() => deletePiece(pieceName)}
                        modalTitle={`You are asking to delete piece ${pieceName}.`}
                        modalText={`Game in progress will no be effected but the record of the piece for new games will be 
                                    destroyed. This action can not be undone. Are you sure you want to delete piece ${pieceName}?`}
                        startIcon={<DeleteForever />}
                        isDisabled={false}
                        theme={theme}
                        style={{
                            ...button(fontSize, theme),
                            marginLeft: getButtonMargin(screenCase),
                        }}
                    />
                </Box>
            </div>
        </>
    );
}
