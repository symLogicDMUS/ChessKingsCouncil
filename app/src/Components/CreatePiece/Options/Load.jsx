import React, {useState} from "react";
import {Portal} from "@material-ui/core";
import {ProfilesModal} from "./ProfilesModal";
import {Option} from "./Option";

export function Load({load, theme, className}) {
    let [modal, setModal] = useState(false);

    return (
        <>
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
                className={className}
                onClick={() => setModal(true)}
            />
        </>
    )
}