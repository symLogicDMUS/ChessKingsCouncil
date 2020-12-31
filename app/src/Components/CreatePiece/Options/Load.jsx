import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Portal} from "@material-ui/core";
import {ProfilesModal} from "./ProfilesModal";
import {Option} from "./Option";

export function Load({load, defs, deletePiece, theme}) {

    let [modal, setModal] = useState();

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
                clickMethod={() => setModal(true)}
                iconType="load"
                theme={theme}
                key={uuidv4()}
            />
        </>
    )
}