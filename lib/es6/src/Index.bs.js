

import * as React from "react";
import * as ReactDOMRe from "reason-react/lib/es6/src/ReactDOMRe.js";
import * as Nav$Profile from "./Nav.bs.js";
import * as Home$Profile from "./Home.bs.js";
import * as Meta$Profile from "./Meta.bs.js";
import * as Utils$Profile from "./Utils.bs.js";
import * as Resume$Profile from "./Resume.bs.js";
import * as Contact$Profile from "./Contact.bs.js";
import * as NotFound$Profile from "./NotFound.bs.js";
import * as ReasonReactRouter from "reason-react/lib/es6/src/ReasonReactRouter.js";

function Index$App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  var tmp;
  tmp = match ? (
      match[0] === "resume" ? (
          match[1] ? React.createElement(NotFound$Profile.make, { }) : React.createElement(Resume$Profile.make, { })
        ) : React.createElement(NotFound$Profile.make, { })
    ) : React.createElement(Home$Profile.make, { });
  var match$1 = url.hash === "contact";
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  style: Utils$Profile.css(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "100vh", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "10rem", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "relative", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)
                }, React.createElement(Nav$Profile.make, { }), tmp, React.createElement(Meta$Profile.make, { })), match$1 ? React.createElement(Contact$Profile.make, { }) : null);
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

export {
  App ,
  
}
/*  Not a pure module */
