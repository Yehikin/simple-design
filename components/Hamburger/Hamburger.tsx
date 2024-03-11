import React from "react";
import hamburger from "./hamburger.module.css";
import cn from "clsx";

export default function Hamburger() {
  return (
    <>
      <button
        className={cn(
          hamburger.hamburger,
          hamburger.hamburger__3dx_r,
          hamburger.is_active
        )}
        type="button"
        // onClick={handleBtn}
      >
        <span className={hamburger.hamburger_box}>
          <span className={hamburger.hamburger_inner}></span>
        </span>
      </button>
    </>
  );
}
