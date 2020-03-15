

import * as React from "react";
import * as Page$Profile from "./Page.bs.js";
import * as Utils$Profile from "./Utils.bs.js";

function About(Props) {
  return React.createElement(Page$Profile.make, {
              children: null
            }, React.createElement("h1", undefined, Utils$Profile.str("About Me")), React.createElement(Utils$Profile.P.make, {
                  children: "My name is Matt and I'm a Software Developer. I live in Cornwall which is in the South West of England, with my partner, daughter and cat."
                }));
}

var make = About;

export {
  make ,
  
}
/* react Not a pure module */
