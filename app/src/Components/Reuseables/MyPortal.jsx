import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const MyPortal = ({children}) => {
  const mount = document.getElementById("root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el)
};

export default MyPortal;