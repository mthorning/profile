

import * as React from "react";
import * as Page$Profile from "./Page.bs.js";
import * as Utils$Profile from "./Utils.bs.js";

function NotFound(Props) {
  return React.createElement(Page$Profile.make, {
              children: null
            }, React.createElement("h1", undefined, Utils$Profile.str("Uh oh!")), React.createElement("h5", undefined, Utils$Profile.str("Something's gone wrong, this page doesn't seem to exist!")));
}

var make = NotFound;

export {
  make ,
  
}
/* react Not a pure module */
