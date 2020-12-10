import React from "react";
import { saveImg } from "../../../../API/saveImg";
import { useStyles } from "./UploadButton.jss"
import {Button} from "@material-ui/core";

export function UploadButtonBlack({setPieceImg}) {

    const classes = useStyles()

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
                    setPieceImg("black", imgStr);
                });
            },
            false
        );
        myFileItemReader.readAsDataURL(currentFile);
    }

    return (
        <div>
            <label htmlFor="choose-img">
                <Button className={classes.upload_black} size={'large'} variant="contained" component="span">
                    Upload...
                </Button>
            </label>
            <input id="choose-img" type="file" onChange={handleChange} style={{ display: "none" }} />
        </div>
    );
}