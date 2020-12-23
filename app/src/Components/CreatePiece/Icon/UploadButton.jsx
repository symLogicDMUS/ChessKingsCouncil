import React from "react";
import {Button} from "@material-ui/core";
import {saveImg} from "../../../API/saveImg";
import {fontSize} from "../../styles/fontSize.jss";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from "../../Reuseables/MuiButton.jss";


export function UploadButton({color, setPieceImg, id, theme, style}) {

    const classes = useStyles({style: style, theme: theme});

    const handleChange = (e) => {
        const files = e.target.files;
        const currentFile = files[0];
        const imgName = currentFile.name.replace(".", "-");
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load",
            () => {
                const imgStr = myFileItemReader.result;
                saveImg(imgName, imgStr).then(([res]) => {
                    setPieceImg(color, imgStr);
                });
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    return (
        <Button
            variant="contained"
            component="label"
            className={classes.button}
            startIcon={<CloudUploadIcon/>}
        >
            Upload
            <input id={id} type="file" onChange={(e) => handleChange(e)} hidden/>
        </Button>
    );
}