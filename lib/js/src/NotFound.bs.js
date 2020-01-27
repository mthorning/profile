'use strict';

var React = require("react");
var Page$ReasonReactExamples = require("./Page.bs.js");
var Utils$ReasonReactExamples = require("./Utils.bs.js");

function NotFound(Props) {
  return React.createElement(Page$ReasonReactExamples.make, {
              title: "Uh oh!",
              children: React.createElement("h5", undefined, Utils$ReasonReactExamples.str("Something's gone wrong, this page doesn't seem to exist!"))
            });
}

var make = NotFound;

exports.make = make;
/* react Not a pure module */
