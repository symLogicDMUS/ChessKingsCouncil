import React from "react";
import "../scss/AcceptPromo.scss";


export function AcceptPromo({selected, promote}) {
    
    if (selected!= null)
        return <button className="accept-promo promo-selected" onClick={promote}>Ok</button>
    else
        return <button className="accept-promo promo-unselected">Ok</button>;
        
}