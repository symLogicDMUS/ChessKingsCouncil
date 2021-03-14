import React, { useState } from "react";
import { HelpItems } from "./HelpItems";
import { HelpTable } from "./HelpTable";
import { Portal } from "@material-ui/core";

export function HelpModal({onClose, theme, screenCase }) {
    const [helpItem, setHelpItem] = useState(null);
    return (
        <>
            {helpItem ? (
                <Portal>
                    <HelpItems
                        theme={theme}
                        helpItem={helpItem}
                        screenCase={screenCase}
                        setHelpItem={setHelpItem}
                    />
                </Portal>
            ) : null}
            <Portal>
                <HelpTable setHelpItem={setHelpItem} theme={theme} onClose={onClose} />
            </Portal>
        </>
    );
}