import React, {useState} from "react";
import {Portal} from "@material-ui/core";
import {ProfilesModal} from "./ProfilesModal";
import {Option} from "./Option";
import {useStyles} from "./Load.jss";

export function Load({load, theme}) {
    let [modal, setModal] = useState(false);

    const classes = useStyles();

    return (
        <div className={classes.load}>
            {modal ? (
                <Portal>
                    <ProfilesModal
                        load={load}
                        theme={theme}
                        close={() => setModal(false)}
                    />
                </Portal>
            ) : null}
            <Option
                iconType="load"
                theme={theme}
                key='load-option'
                onClick={() => setModal(true)}
            />
        </div>
    )
}