open Utils;

let workHistory = [
  [
    "Headforwards, Redruth",
    "JavaScript Developer",
    "October 2017",
    "Present",
  ],
  ["Royal Mail, Truro", "Work Area Manager", "February 2014", "October 2017"],
  ["Royal Mail, Truro", "Deputy Manager", "May 2012", "February 2014"],
  ["Royal Mail, Truro", "Postal Worker", "March 2003", "May 2012"],
  ["City Music, Truro", "Sales Assistant", "February 2002", "March 2003"],
  ["Penrose Outdoors, Truro", "Sales Assistant", "July 1999", "May 2001"],
];

let educationHistory = [
  [
    "Truro College",
    "BTEC National Diploma in Music Technology",
    "September 2004",
    "July 2006",
  ],
  [
    "Truro College",
    "BTEC National Diploma in Computer Studies (1st year)",
    "September 2000",
    "July 2002",
  ],
  ["Penair School, Truro", "GCSE's x 9", "September 1995", "July 2000"],
];

let tableBody = list => {
  list->mapElements(row =>
    <tbody>
      <tr> {row->mapElements(cell => <td key=cell> cell->str </td>)} </tr>
    </tbody>
  );
};

module Table = {
  [@react.component]
  let make = (~headings, ~data, ~title) => {
    <div style={css(~marginTop="6rem", ())}>
      <h2> title->str </h2>
      <div style={css(~overflowX="auto", ())}>
        <table className="full-width">
          <thead>
            <tr>
              {headings->mapElements(heading =>
                 <th key=heading> heading->str </th>
               )}
            </tr>
          </thead>
          {tableBody(data)}
        </table>
      </div>
    </div>;
  };
};

[@react.component]
let make = () => {
  <Page title="Resume">
    <p>
      "I have been a JavaScript developer at Headforwards since October 2017. The client that my team works for is a large multinational telecommunications company, we build software which enables their customers to visualise and monitor their datacenter assets from customisable dashboard views. Previous to this I was employed as a Work Area Manager at Royal Mail where I line-managed a team of 30 people in addition to being responsible for maintaining the Quality of Service of the Mail Centre through a system of Continuous Improvement which has its roots in Lean Manufacturing."
      ->str
    </p>
    <p>
      "I have worked with several JavaScript frameworks. In my role at Headforwards I primarily use React but we also maintain legacy code which uses Backbone. Privately I have used Svelte, Vue and my blog site is written using Gatsby. I have written backends for applications in Node as side projects, both using REST and GraphQl and have some experience of using MongoDb and Redis."
      ->str
    </p>
    <p>
      "In addition to JavaScript I also have some experience of writing basic CLI applications in Rust and I wrote this website in ReasonML with ReasonReact."
      ->str
    </p>
    <p>
      "I'm confident with Linux operating systems, and have experience of continuous Integration tools such as Jenkins and Drone. I've worked with Docker and NGINX and I'm able to set up new domains and create SSL Certificates so that sites are served over HTTPS."
      ->str
    </p>
    <Table
      title="Employment History"
      headings=["Employer", "Role", "From", "Until"]
      data=workHistory
    />
    <Table
      title="Education"
      headings=["Employer", "Role", "From", "Until"]
      data=educationHistory
    />
  </Page>;
};