import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { ProfilesModal } from "./ProfilesModal";
import { ToolButton } from "../../Reuseables/Clickables/ToolButton";
import { Option } from "./Option";

export function Load({
    load,
    theme,
    className,
    buttonType,
}) {
    const [modal, setModal] = useState(false);

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
            {buttonType === "option" ? (
                <Option
                    iconType="load"
                    theme={theme}
                    key="load-option"
                    className={className}
                    onClick={() => setModal(true)}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    onClick={() => setModal(true)}
                    isActive={modal}
                    iconName={"load_alt"}
                    text={"Load"}
                />
            )}
        </>
    );
}
