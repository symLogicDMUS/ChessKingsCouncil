import React from "react";
import {Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from "../../Reuseables/MuiButton.jss";
import * as firebase from "firebase";
import {saveImg} from "../../../API/saveImg";

export function UploadButton({color, id, setPieceImg, close, theme, style}) {

    const classes = useStyles({style: style, theme: theme});

    const handleChange = (e) => {
        const user = firebase.auth().currentUser;
        const uid = user.uid;

        //get file
        const file = e.target.files[0];

        // Create a storage ref
        const storageRef = firebase.storage().ref(`images/${uid}`);

        //upload file
        const task = storageRef.child(`${file.name}`).put(file);

        task.on('state_changed',
            function progress(snapshot) {},
            function error(err) {},
            function complete() {
                firebase.storage().ref(`images/${uid}/${file.name}`).getDownloadURL().then(url => {
                    console.log(url)
                    const imgName = file.name.replace('.', '-')
                    saveImg(imgName, url).then(r => {
                        base64Reader(file)
                    })
                })
            }
        )
    };

    const base64Reader = (file) => {
        const myFileItemReader = new FileReader();
        myFileItemReader.readAsDataURL(file);
        myFileItemReader.addEventListener(
            "load",
            () => {
                const imgStr = myFileItemReader.result;
                setPieceImg(color, imgStr);
                close();
            },
            false
        );
    };

    return (
        <Button
            variant="contained"
            component="label"
            className={classes.button}
            startIcon={<CloudUploadIcon style={{fontSize: 'inherit'}}/>}
        >
            Upload
            <input id={id} type="file" onChange={(e) => handleChange(e)} hidden/>
        </Button>
    );
}