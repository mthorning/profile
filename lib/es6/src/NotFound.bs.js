

import * as React from "react";
import * as Page$ReasonReactExamples from "./Page.bs.js";
import * as Utils$ReasonReactExamples from "./Utils.bs.js";

function NotFound(Props) {
  return React.createElement(Page$ReasonReactExamples.make, {
              title: "Uh oh!",
              children: React.createElement("h5", undefined, Utils$ReasonReactExamples.str("Something's gone wrong, this page doesn't seem to exist!"))
            });
}

var make = NotFound;

export {
  make ,
  
}
/* react Not a pure module */
