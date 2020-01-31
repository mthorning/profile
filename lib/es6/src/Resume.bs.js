

import * as React from "react";
import * as Page$ReasonReactExamples from "./Page.bs.js";
import * as Utils$ReasonReactExamples from "./Utils.bs.js";

var workHistory = /* :: */[
  /* :: */[
    "Headforwards, Redruth",
    /* :: */[
      "JavaScript Developer",
      /* :: */[
        "October 2017",
        /* :: */[
          "Present",
          /* [] */0
        ]
      ]
    ]
  ],
  /* :: */[
    /* :: */[
      "Royal Mail, Truro",
      /* :: */[
        "Work Area Manager",
        /* :: */[
          "February 2014",
          /* :: */[
            "October 2017",
            /* [] */0
          ]
        ]
      ]
    ],
    /* :: */[
      /* :: */[
        "Royal Mail, Truro",
        /* :: */[
          "Deputy Manager",
          /* :: */[
            "May 2012",
            /* :: */[
              "February 2014",
              /* [] */0
            ]
          ]
        ]
      ],
      /* :: */[
        /* :: */[
          "Royal Mail, Truro",
          /* :: */[
            "Postal Worker",
            /* :: */[
              "March 2003",
              /* :: */[
                "May 2012",
                /* [] */0
              ]
            ]
          ]
        ],
        /* :: */[
          /* :: */[
            "City Music, Truro",
            /* :: */[
              "Sales Assistant",
              /* :: */[
                "February 2002",
                /* :: */[
                  "March 2003",
                  /* [] */0
                ]
              ]
            ]
          ],
          /* :: */[
            /* :: */[
              "Penrose Outdoors, Truro",
              /* :: */[
                "Sales Assistant",
                /* :: */[
                  "July 1999",
                  /* :: */[
                    "May 2001",
                    /* [] */0
                  ]
                ]
              ]
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ]
];

var educationHistory = /* :: */[
  /* :: */[
    "Truro College",
    /* :: */[
      "BTEC National Diploma in Music Technology",
      /* :: */[
        "September 2004",
        /* :: */[
          "July 2006",
          /* [] */0
        ]
      ]
    ]
  ],
  /* :: */[
    /* :: */[
      "Truro College",
      /* :: */[
        "BTEC National Diploma in Computer Studies (1st year)",
        /* :: */[
          "September 2000",
          /* :: */[
            "July 2002",
            /* [] */0
          ]
        ]
      ]
    ],
    /* :: */[
      /* :: */[
        "Penair School, Truro",
        /* :: */[
          "GCSE's x 9",
          /* :: */[
            "September 1995",
            /* :: */[
              "July 2000",
              /* [] */0
            ]
          ]
        ]
      ],
      /* [] */0
    ]
  ]
];

function tableBody(list) {
  return Utils$ReasonReactExamples.mapElements(list, (function (row) {
                return React.createElement("tbody", undefined, React.createElement("tr", undefined, Utils$ReasonReactExamples.mapElements(row, (function (cell) {
                                      return React.createElement("td", {
                                                  key: cell
                                                }, Utils$ReasonReactExamples.str(cell));
                                    }))));
              }));
}

function Resume$Table(Props) {
  var headings = Props.headings;
  var data = Props.data;
  var title = Props.title;
  return React.createElement("div", {
              style: Utils$ReasonReactExamples.css(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "6rem", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)
            }, React.createElement("h2", undefined, Utils$ReasonReactExamples.str(title)), React.createElement("div", {
                  style: Utils$ReasonReactExamples.css(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "auto", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)
                }, React.createElement("table", {
                      className: "full-width"
                    }, React.createElement("thead", undefined, React.createElement("tr", undefined, Utils$ReasonReactExamples.mapElements(headings, (function (heading) {
                                    return React.createElement("th", {
                                                key: heading
                                              }, Utils$ReasonReactExamples.str(heading));
                                  })))), tableBody(data))));
}

var Table = {
  make: Resume$Table
};

function Resume(Props) {
  return React.createElement(Page$ReasonReactExamples.make, {
              title: "Resume",
              children: null
            }, React.createElement("p", undefined, Utils$ReasonReactExamples.str("I have been a JavaScript developer at Headforwards since October 2017. The client that my team works for is a large multinational telecommunications company, we build software which enables their customers to visualise and monitor their datacenter assets from customisable dashboard views. Previous to this I was employed as a Work Area Manager at Royal Mail where I line-managed a team of 30 people in addition to being responsible for maintaining the Quality of Service of the Mail Centre through a system of Continuous Improvement which has its roots in Lean Manufacturing.")), React.createElement("p", undefined, Utils$ReasonReactExamples.str("I have worked with several JavaScript frameworks. In my role at Headforwards I primarily use React but we also maintain legacy code which uses Backbone. Privately I have used Svelte, Vue and my blog site is written using Gatsby. I have written backends for applications in Node as side projects, both using REST and GraphQl and have some experience of using MongoDb and Redis.")), React.createElement("p", undefined, Utils$ReasonReactExamples.str("In addition to JavaScript I also have some experience of writing basic CLI applications in Rust and I wrote this website in ReasonML with ReasonReact.")), React.createElement("p", undefined, Utils$ReasonReactExamples.str("I'm confident with Linux operating systems, and have experience of continuous Integration tools such as Jenkins and Drone. I've worked with Docker and NGINX and I'm able to set up new domains and create SSL Certificates so that sites are served over HTTPS.")), React.createElement(Resume$Table, {
                  headings: /* :: */[
                    "Employer",
                    /* :: */[
                      "Role",
                      /* :: */[
                        "From",
                        /* :: */[
                          "Until",
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  data: workHistory,
                  title: "Employment History"
                }), React.createElement(Resume$Table, {
                  headings: /* :: */[
                    "Employer",
                    /* :: */[
                      "Role",
                      /* :: */[
                        "From",
                        /* :: */[
                          "Until",
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  data: educationHistory,
                  title: "Education"
                }));
}

var make = Resume;

export {
  workHistory ,
  educationHistory ,
  tableBody ,
  Table ,
  make ,
  
}
/* react Not a pure module */
