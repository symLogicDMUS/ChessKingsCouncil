import React from "react";
import {saveImg} from "../../../../API/saveImg";
import {Button} from "@material-ui/core";
import {useStyles} from "./UploadButton.jss";


export function UploadButtonWhite({setPieceImg}) {

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
                    setPieceImg("white", imgStr);
                });
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    return (
        <div>
            {/*<label htmlFor="choose-img2">*/}
                <Button className={classes.upload_white} variant="contained">
                    Upload...
                </Button>
            {/*</label>*/}
            <input id="choose-img2" type="file" onChange={handleChange} style={{display: "none"}}/>
        </div>
    );
}