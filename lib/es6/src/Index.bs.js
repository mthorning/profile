

import * as React from "react";
import * as ReactDOMRe from "reason-react/lib/es6/src/ReactDOMRe.js";
import * as ReasonReactRouter from "reason-react/lib/es6/src/ReasonReactRouter.js";
import * as Nav$ReasonReactExamples from "./Nav.bs.js";
import * as Home$ReasonReactExamples from "./Home.bs.js";
import * as Meta$ReasonReactExamples from "./Meta.bs.js";
import * as About$ReasonReactExamples from "./About.bs.js";
import * as Utils$ReasonReactExamples from "./Utils.bs.js";
import * as Resume$ReasonReactExamples from "./Resume.bs.js";
import * as Contact$ReasonReactExamples from "./Contact.bs.js";
import * as NotFound$ReasonReactExamples from "./NotFound.bs.js";

function Index$App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match) {
    switch (match[0]) {
      case "about" :
          if (match[1]) {
            exit = 1;
          } else {
            tmp = React.createElement(About$ReasonReactExamples.make, { });
          }
          break;
      case "resume" :
          if (match[1]) {
            exit = 1;
          } else {
            tmp = React.createElement(Resume$ReasonReactExamples.make, { });
          }
          break;
      default:
        exit = 1;
    }
  } else {
    tmp = React.createElement(Home$ReasonReactExamples.make, { });
  }
  if (exit === 1) {
    tmp = React.createElement(NotFound$ReasonReactExamples.make, { });
  }
  var match$1 = url.hash === "contact";
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  style: Utils$ReasonReactExamples.css(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "100vh", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "10rem", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "relative", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)
                }, React.createElement(Nav$ReasonReactExamples.make, { }), tmp, React.createElement(Meta$ReasonReactExamples.make, { })), match$1 ? React.createElement(Contact$ReasonReactExamples.make, { }) : null);
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

export {
  App ,
  
}
/*  Not a pure module */
