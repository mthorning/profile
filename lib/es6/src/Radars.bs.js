

import * as Block from "bs-platform/lib/es6/block.js";
import * as React from "react";
import * as Recharts from "recharts";
import * as BsRecharts__BarChart from "@ahrefs/bs-recharts/lib/es6/src/BsRecharts__BarChart.bs.js";
import * as BsRecharts__ResponsiveContainer from "@ahrefs/bs-recharts/lib/es6/src/BsRecharts__ResponsiveContainer.bs.js";

function Radars$TestChart(Props, _children) {
  var data = Props.data;
  return React.createElement(Recharts.ResponsiveContainer, BsRecharts__ResponsiveContainer.makeProps(undefined, undefined, /* Px */Block.__(0, [200.0]), undefined, undefined, /* Px */Block.__(0, [300.0]), React.createElement(Recharts.BarChart, BsRecharts__BarChart.makeProps(data, /* Px */Block.__(0, [1.0]), undefined, undefined, undefined, undefined, undefined, {
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0
                        }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, null, /* () */0), React.createElement(Recharts.Bar, {
                          dataKey: "pv",
                          fill: "#2078b4",
                          name: "Some bar",
                          stackId: "a"
                        }), React.createElement(Recharts.Bar, {
                          dataKey: "uv",
                          fill: "#ff7f02",
                          name: "Other bar",
                          stackId: "a"
                        }), React.createElement(Recharts.Tooltip, { }), React.createElement(Recharts.Legend, {
                          align: "left",
                          iconType: "circle"
                        })), /* () */0));
}

var TestChart = {
  make: Radars$TestChart
};

export {
  TestChart ,
  
}
/* react Not a pure module */
