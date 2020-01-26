let str = React.string;

[@react.component]
let make = _ => {
  <Section containerClass="primary-bg" render={_ => <p> "hello"->str </p>} />;
};