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

let tableBody = list =>
  list->mapElements(row =>
    <tbody>
      <tr> {row->mapElements(cell => <td key=cell> cell->str </td>)} </tr>
    </tbody>
  );

module Table = {
  [@react.component]
  let make = (~headings, ~data) =>
    <div style={css(~margin="3rem 0", ())}>
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

module Role = {
  [@react.component]
  let make = (~company, ~role, ~period, ~children) =>
    <div style={css(~marginBottom="4rem", ())}>
      <h3 style={css(~margin="0", ())}> company->str </h3>
      <h5 style={css(~margin="0 10px 0 0", ())}> role->str </h5>
      <h6 style={css(~display="inline-block", ())}> period->str </h6>
      <p> children->str </p>
    </div>;
};

[@react.component]
let make = () =>
  <Page>
    <h1> "Resume"->str </h1>
    <section>
      <P>
        "I have been a JavaScript developer at Headforwards since October 2017 working on products for a large multinational telecommunications company. Previous to this I was employed as a Work Area Manager at Royal Mail where I was involved in their programme of Continuous Improvement (World Class Mail) which has its roots in Lean Manufacturing."
      </P>
    </section>
    <section>
      <h2> "Employment History"->str </h2>
      <Table
        headings=["Employer", "Role", "From", "Until"]
        data=workHistory
      />
      <Role
        company="Headforwards"
        role="UI Developer - Insight project"
        period="Jan 2020 - present">
        "Working on the frontend of a system which helps customers visualize their datacenter services through web pages and customisable dashboards. We have a number of micro-frontends written in React and vanilla JavaScript with some existing legacy code still using Backbone with Marionette."
      </Role>
      <Role
        company="Headforwards"
        role="UI Developer - Nexcenter project"
        period="Oct 2017 - Jan 2020">
        "Building an administration portal for customers and providers of datacenter services to enable them to effectively manage their visitors, deliveries and facilities. When I joined the team they were working on a customer portal Single Page Application written in Backbone. During my time there we rewrote the application in React, splitting it into micro-frontends and creating reusable components which we then used to build a second portal to be used by datacenter providers."
      </Role>
      <Role
        company="Royal Mail"
        role="Work Area Manager"
        period="Feb 2014 - Oct 2017">
        "Line managed a team of approximately thirty people, carrying out attendance and conduct meetings. Responsible for Late Shift automation and collections as well as efficiency in several manual work areas."
      </Role>
      <Role
        company="Royal Mail"
        role="Quality Control Pillar Lead"
        period="Jun 2012 - Nov 2015">
        "Responsible for improving and maintaining the Quality of Service KPI's for the Mail Centre through analysis of RFID data and subesequent countermeasures determined through World Class Mail processes. During my time as Pillar Lead our Mail Centre was consistently listed as one of the top for meeting or exceeding our Quality of Service obligations."
      </Role>
      <Role
        company="Royal Mail"
        role="Workplace Organisation Pillar Lead"
        period="Nov 2015 - Oct 2017">
        "Targetting efficiency KPI's such as Items per Work Hour, I was responsible for increasing the efficiency of manual work areas by analysing and improving the ergonomics and processes within."
      </Role>
    </section>
    <section>
      <h2> "Technical Skills"->str </h2>
      <div className="full-width center">
        <img
          style={css(~maxWidth="700px", ~marginTop="6rem", ())}
          className="full-width"
          src="images/skill-radar.png"
        />
      </div>
    </section>
    <section>
      <P>
        "I have worked with several JavaScript frameworks. In my role at Headforwards I primarily use React but we also maintain legacy code which uses Backbone. Privately I have used Svelte, Vue and (although not strictly a framework) my other site is written using Gatsby. I have written back-ends for applications in Node as side projects, both using REST and GraphQl and have some experience of using Postgres, MongoDB (with or without ORM's) and Redis."
      </P>
      <P>
        "In addition to JavaScript I also have some experience of writing basic CLI applications and web servers in Rust and I've built a few things with Reason and ReasonReact (including this website)."
      </P>
      <P>
        "I'm confident with Linux operating systems, and have experience of continuous Integration tools such as Jenkins and Drone. I've worked with Docker and NGINX and I'm able to set up new domains and create SSL Certificates so that sites are served over HTTPS."
      </P>
      <P>
        "I am able to quickly learn skills as I need them, solve problems by applying and adapting knowledge gained in other areas and most importantly work collaboratively with people to deliver on projects."
      </P>
    </section>
  </Page>;