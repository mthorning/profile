'use strict';

var React = require("react");
var Section$ReasonReactExamples = require("./Section.bs.js");

function str(prim) {
  return prim;
}

function About(Props) {
  return React.createElement(Section$ReasonReactExamples.make, {
              render: (function (param) {
                  return React.createElement("p", undefined, "hello");
                }),
              containerClass: "primary-bg"
            });
}

var make = About;

exports.str = str;
exports.make = make;
/* react Not a pure module */
