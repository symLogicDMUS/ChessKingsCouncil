import React, { useState } from "react";
import { HelpSlides } from "./HelpSlides";
import { HelpTable } from "./HelpTable";
import { Portal } from "@material-ui/core";

export function HelpModal({ onClose, theme, screenCase }) {
    const [helpItem, setHelpItem] = useState(null);
    return (
        <>
            {helpItem ? (
                <Portal>
                    <HelpSlides
                        theme={theme}
                        helpItem={helpItem}
                        screenCase={screenCase}
                        setHelpItem={setHelpItem}
                    />
                </Portal>
            ) : null}
            <Portal>
                <HelpTable
                    setHelpItem={setHelpItem}
                    theme={theme}
                    onClose={onClose}
                />
            </Portal>
        </>
    );
}
