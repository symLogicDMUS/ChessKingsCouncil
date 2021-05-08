import React, {useState} from "react";
import * as firebase from "firebase";
import "firebase/storage";
import "firebase/database";
import clsx from "clsx";
import LoadBar from "./LoadBar";
import {Button} from "@material-ui/core";
import {saveImg} from "../../API/saveImg";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import {useStyles} from "./UploadImgButton.jss";

export function Upload(props) {

    const [percentage, setPercentage] = useState(0);
    const [loadBar, setLoadBar] = useState(false);

    const classes = useStyles({theme: props.theme});

    const saveCopy = (file, uid) => {
        const filePartitions = file.name.split('.')
        const name = filePartitions[0]
        const exten = filePartitions[filePartitions.length - 1]
        const fileCopyName = name + " - copy" + "." + exten;
        const storageRef = firebase.storage().ref(`users/images/${uid}`) //create a storage ref
        const task = storageRef.child(`${fileCopyName}`).put(file); //upload file
        task.on('state_changed',
            function progress(snapshot) {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPercentage(percentage)
            },
            function error(err) {},
            function complete() {
                firebase.storage().ref(`users/images/${uid}/${fileCopyName}`).getDownloadURL().then(url => {
                    const imgName = fileCopyName.replace('.', '-')
                    saveImg(imgName, url).then(r => {
                        setLoadBar(false);
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
            function progress(snapshot) {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPercentage(percentage)
            },
            function error(err) {},
            function complete() {
                firebase.storage().ref(`users/images/${uid}/${file.name}`).getDownloadURL().then(url => {
                    const imgName = file.name.replace('.', '-')
                    saveImg(imgName, url).then(r => {
                        setLoadBar(false);
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
        setLoadBar(true);
        firebase.storage().ref(`users/images/${uid}/${file.name}`).getDownloadURL()
            .then((r) => {
                saveCopy(file, uid)
            })
            .catch((err) => {
                saveNew(file, uid)
            })
    };

    return (
        <>
            {loadBar && (
                <LoadBar theme={theme}>
                    {percentage}
                </LoadBar>
            )}
        </>

    );
}