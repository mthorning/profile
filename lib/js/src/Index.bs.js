'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");

function str(prim) {
  return prim;
}

function Index$App(Props) {
  return React.createElement("div", {
              className: "container"
            }, React.createElement("div", {
                  className: "row"
                }, React.createElement("div", {
                      className: "one-half column"
                    }, React.createElement("h1", undefined, "hello"))));
}

var App = {
  str: str,
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.App = App;
/*  Not a pure module */
