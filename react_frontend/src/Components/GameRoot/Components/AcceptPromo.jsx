import React from "react";
import "../css/AcceptPromo.css";


export function AcceptPromo({selected, promote}) {
    
    if (selected!= null)
        return <button className="accept-promo promo-selected" onClick={promote}>Ok</button>
    else
        return <button className="accept-promo promo-unselected">Ok</button>;
        
}