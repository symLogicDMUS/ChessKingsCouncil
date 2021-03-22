import React from "react";
import * as firebase from "firebase";
import "firebase/storage";
import "firebase/database";
import {Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from "../../Reuseables/Clickables/MuiButton.jss";
import {saveImg} from "../../../API/saveImg";
import clsx from "clsx";

export function UploadImgButton({color, id, setPieceImg, close, theme, classProp, addedClassProp}) {

    const classes = useStyles({ theme: theme});

    const saveCopy = (file, uid) => {
        const filePartitions = file.name.split('.')
        const name = filePartitions[0]
        const exten = filePartitions[filePartitions.length - 1]
        const fileCopyName = name + " - copy" + "." + exten;
        const storageRef = firebase.storage().ref(`users/images/${uid}`)
        const task = storageRef.child(`${fileCopyName}`).put(file); //upload file
        task.on('state_changed',
            function progress(snapshot) {},
            function error(err) {},
            function complete() {
                firebase.storage().ref(`users/images/${uid}/${fileCopyName}`).getDownloadURL().then(url => {
                    const imgName = fileCopyName.replace('.', '-')
                    saveImg(imgName, url).then(r => {
                        setPieceImg(color, url);
                        close();
                    })
                })
            }
        )
        return null;
    };

    const saveNew = (file, uid) => {
        const storageRef = firebase.storage().ref(`users/images/${uid}`)
        const task = storageRef.child(`${file.name}`).put(file); //upload file
        task.on('state_changed',
            function progress(snapshot) {},
            function error(err) {},
            function complete() {
                firebase.storage().ref(`users/images/${uid}/${file.name}`).getDownloadURL().then(url => {
                    const imgName = file.name.replace('.', '-')
                    saveImg(imgName, url).then(r => {
                        setPieceImg(color, url);
                        close();
                    })
                })
            }
        )
        return null;
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        firebase.storage().ref(`users/images/${uid}/${file.name}`).getDownloadURL()
        .then((r) => {
            saveCopy(file, uid)
        })
        .catch((err) => {
            saveNew(file, uid)
        })
    };

    return (
        <Button
            variant="contained"
            component="label"
            className={clsx(classes.button, {
                [classProp]: classProp,
                [addedClassProp]: addedClassProp,
            })}
            startIcon={<CloudUploadIcon style={{fontSize: 'inherit'}}/>}
        >
            Upload
            <input id={id} type="file" onChange={(e) => handleChange(e)} hidden/>
        </Button>
    );
}