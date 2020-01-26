let str = React.string;

[@react.component]
let make = _ => {
  <Section
    containerClass="primary-bg"
    render={_ =>
      <div className="twelve columns">
        <h2> "Uh oh!"->str </h2>
        <h5>
          "Something's gone wrong, this page doesn't seem to exist!"->str
        </h5>
      </div>
    }
  />;
};