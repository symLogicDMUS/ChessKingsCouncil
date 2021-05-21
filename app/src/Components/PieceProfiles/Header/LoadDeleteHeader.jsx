import React from "react";
import clsx from "clsx";
import {PieceName} from "./PieceName";
import {useHistory} from "react-router-dom";
import StorageIcon from "@material-ui/icons/Storage";
import {deleteDef} from "../../../API/deleteDef";
import DeleteForever from "@material-ui/icons/DeleteForever";
import {decrementImgRefCounts} from "../../../API/decrementImgRefCounts";
import {MuiButton as Button} from "../../Reuseables/Clickables/MuiButton";
import {MuiDeleteButton as DeleteButton} from "../../Reuseables/Clickables/MuiDeleteButton";
import {useStyles as useMoreStyles} from "../../PieceProfiles/Header/ProfileHeader.jss";
import {filterSamples} from "../../../API/filterSamples";
import {marginRight, useStyles} from "./LoadDeleteHeader.jss";
import {getModalText, getModalTitle} from "./deleteModalTitleAndText";


function LoadDeleteHeader(props) {
    const {
        def,
        load,
        erase,
        theme,
        dispatch,
        pieceName,
        parentPage,
        toggleModal,
    } = props;

    const history = useHistory();

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const deletePiece = (pieceName) => {
        const imgStrs = filterSamples([def.W.img, def.B.img]);

        decrementImgRefCounts(Array.from(new Set(imgStrs))).then((r) => {
            deleteDef(pieceName).then(([r]) => {
                dispatch({ type: "delete", payload: pieceName });
                if (parentPage === "CreatePiece") {
                    erase();
                }
            });
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
            toggleModal();
        };
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
            <div
                className={clsx(classes.header, {
                    [classes2.header]: true,
                })}
            >
                <PieceName
                    theme={theme}
                    style={marginRight}
                    tooltipPlacement={"left-start"}
                >
                    {pieceName}
                </PieceName>
                <Button
                    theme={theme}
                    className={clsx(classes.button, {[classes.load_button]:true})}
                    startIcon={<StorageIcon className={classes.icon} />}
                    onClick={loadMethod}
                >
                    Load
                </Button>
                <DeleteButton
                    onAcceptDelete={() => deletePiece(pieceName)}
                    modalTitle={getModalTitle(pieceName)}
                    modalText={getModalText(pieceName)}
                    startIcon={
                        <DeleteForever
                            className={clsx(classes.icon, {
                                [classes.delete_icon]: true,
                            })}
                        />
                    }
                    variant="outlined"
                    className={clsx(classes.button, {[classes.delete_button]:true})}
                    isDisabled={false}
                    theme={theme}
                />
            </div>
        </>
    );
}
export default LoadDeleteHeader;
