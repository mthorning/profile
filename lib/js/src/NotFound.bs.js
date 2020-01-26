'use strict';

var React = require("react");
var Section$ReasonReactExamples = require("./Section.bs.js");

function str(prim) {
  return prim;
}

function NotFound(Props) {
  return React.createElement(Section$ReasonReactExamples.make, {
              render: (function (param) {
                  return React.createElement("div", {
                              className: "twelve columns"
                            }, React.createElement("h2", undefined, "Uh oh!"), React.createElement("h5", undefined, "Something's gone wrong, this page doesn't seem to exist!"));
                }),
              containerClass: "primary-bg"
            });
}

var make = NotFound;

exports.str = str;
exports.make = make;
/* react Not a pure module */
