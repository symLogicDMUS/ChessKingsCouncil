import React from "react";
import "firebase/storage";
import "firebase/database";
import clsx from "clsx";
import {Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {useStyles} from "./UploadImgButton.jss";


export function UploadImgButton({color, id, setImgFileObj, setPieceImg, close, theme, className, addedClassName, style, children}) {

    const classes = useStyles({theme});

    const handleChange = (e) => {
        const files = e.target.files;
        const currentFile = files[0];
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load",
            () => {
                const b64Str = myFileItemReader.result;
                setPieceImg(color, b64Str);
                setImgFileObj(color, currentFile)
                close();
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    return (
        <>
            <Button
                variant="text"
                component="label"
                className={clsx(classes.button, {
                    [className]: className,
                    [addedClassName]: addedClassName,
                })}
                style={style}
                startIcon={<CloudUploadIcon className={classes.icon}/>}
            >
                {children}
                <input id={id} type="file" onChange={(e) => handleChange(e)} hidden/>
            </Button>
        </>

    );
}