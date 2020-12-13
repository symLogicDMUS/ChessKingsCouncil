import React from "react";
import {saveImg} from "../../../API/saveImg";
import {Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export function UploadButton({color, className, setPieceImg, id, theme}) {

    const handleChange = (e) => {
        const files = e.target.files;
        const currentFile = files[0];
        const imgName = currentFile.name.replace(".", "-");
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load",
            () => {
                const imgStr = myFileItemReader.result;
                saveImg('production', imgName, imgStr).then(([res]) => {
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
            className={className}
            startIcon={<CloudUploadIcon/>}
        >
            Upload
            <input id={id} type="file" onChange={(e) => handleChange(e)} hidden/>
        </Button>
    );
}