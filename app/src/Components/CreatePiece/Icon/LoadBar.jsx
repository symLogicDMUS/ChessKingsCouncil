import React, {useEffect, useState} from "react";
import * as firebase from "firebase";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import { getDef } from "../../../API/getDef";
import { saveImg } from "../../../API/saveImg";
import { saveDef } from "../../../API/saveDef";
import { Backdrop, Portal,} from "@material-ui/core";
import Loading from "../../Reuseables/Animations/Loading";
import { filterSamples } from "../../../API/filterSamples";
import { updateCountsOnOverwrite } from "../../../API/updateCountsOnOverwrite";
import { incrementImgRefCounts } from "../../../API/incrementImgRefCounts";
import Typography from "@material-ui/core/Typography";
import {themes} from "../../styles/themes/themes.jss";
import { useStyles } from "./LoadBar.jss";
import {copy} from "../../helpers/copy";

function LoadBar({
    newPiece,
    pieceName,
    saveInstance,
    close,
    theme,
}) {
    const [whiteImgStr, setWhiteImgStr] = useState(null);
    const [blackImgStr, setBlackImgStr] = useState(null);
    const [percentage, setPercentage] = useState(0);
    const classes = useStyles({ theme: theme });

    const updateImgStr = (color, url) => {
        if (color==='W') {
            setWhiteImgStr(url)
        }
        else {
            setBlackImgStr(url)
        }
    };

    const uploadStorageImg = async (file, name, uid, color) => {
        const storageRef = firebase.storage().ref(`users/images/${uid}`);
        const task = storageRef.child(`${name}`).put(file);
        task.on('state_changed',
            function progress(snapshot) {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPercentage(percentage)
            },
            function error(err) {},
            async function complete() {
                return await firebase
                    .storage()
                    .ref(`users/images/${uid}/${name}`)
                    .getDownloadURL()
                    .then(async url => {
                        const imgName = name.replace(".", "-");
                        saveImg(imgName, url).then(async r => {
                            updateImgStr(color, url)
                        })
                    });
            }
        )
    };

    const saveStorageImg = async (imgFileObj, color) => {
        if (! imgFileObj) {
            updateImgStr(color, newPiece[color].img)
            return Promise.resolve(null)
        }

        const user = firebase.auth().currentUser;
        const uid = user.uid;
        return await firebase
            .storage()
            .ref(`users/images/${uid}/${imgFileObj.name}`)
            .getDownloadURL()
            .then(async r => {
                const filePartitions = imgFileObj.name.split(".");
                const name = filePartitions[0];
                const exten = filePartitions[filePartitions.length - 1];
                const fileCopyName = name + " - copy" + "." + exten;
                return await uploadStorageImg(imgFileObj, fileCopyName, uid, color)
            })
            .catch(async err => {
                return await uploadStorageImg(imgFileObj, imgFileObj.name, uid, color)
            });
    };

    useEffect(() => {
        saveStorageImg(newPiece.W.imgFileObj, 'W').then(async r => {
            return await saveStorageImg(newPiece.B.imgFileObj, 'B')
        })
    }, [saveInstance]);

    useEffect(() => {
        if (whiteImgStr && blackImgStr) {
            save();
        }
    }, [whiteImgStr, blackImgStr])

    const save = () => {
        let oldUrlStrs, newUrlStrs;
        const pendingUpload = copy(newPiece);
        pendingUpload.W.img = whiteImgStr;
        pendingUpload.B.img = blackImgStr;

        getDef(pieceName).then(([oldPieceFromDb]) => {
            if (oldPieceFromDb) {
                newUrlStrs = filterSamples([pendingUpload.W.img, pendingUpload.B.img]);
                oldUrlStrs = filterSamples([
                    oldPieceFromDb.W.img,
                    oldPieceFromDb.B.img,
                ]);
                updateCountsOnOverwrite(oldUrlStrs, newUrlStrs).then((r) => {
                    saveDef(pieceName, pendingUpload).then((r) => {});
                });
            } else {
                newUrlStrs = filterSamples([pendingUpload.W.img, pendingUpload.B.img]);
                incrementImgRefCounts(Array.from(new Set(newUrlStrs))).then(
                    (r) => {
                        saveDef(pieceName, pendingUpload).then((r) => {
                            close()
                        });
                    }
                );
            }
        });
    };

    return (
        <Portal>
            <Backdrop open className={classes.backdrop}>
                {percentage < 100 ? (
                    <motion.div className={classes.window}>
                        <Typography className={classes.title} variant={'h5'} paragraph>
                            Uploading new images...
                        </Typography>
                        <Box className={classes.load_bar}>
                            <Box
                                style={{
                                    height: '3.5rem',
                                    width: percentage,
                                    backgroundColor: themes[theme].text,
                                }}
                            />
                        </Box>
                    </motion.div>
                ) : (
                    <Loading />
                )}
            </Backdrop>
        </Portal>
    );
}

export default LoadBar;
