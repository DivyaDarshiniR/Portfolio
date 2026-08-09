"use client";

import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen || typeof console === "undefined") return;

    console.clear();
    console.log(
      "%cHello, curious visitor! Type %cdivya%c and hit Enter.",
      "color: #FFD700; font-size: 16px; font-weight: bold; background: black; padding: 10px;",
      "color: #00FF00; font-size: 16px; font-weight: bold; background: black; padding: 10px;",
      "color: #FFD700; font-size: 16px; font-weight: bold; background: black; padding: 10px;"
    );

    ["divya", "Divya", "DIVYA"].forEach((name) => {
      if (Object.hasOwn(window, name)) return;
      Object.defineProperty(window, name, {
        get() {
          console.log(
            "%cWelcome to Divya's portfolio. Thanks for exploring!",
            "color: #FF69B4; font-size: 16px; font-weight: bold; background: black; padding: 10px;"
          );
          return "";
        },
      });
    });
  }, [isDevToolsOpen]);

  return <NyanCat />;
};

export default EasterEggs;
