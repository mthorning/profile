open Utils;

[@react.component]
let make = (~title, ~children) =>
  <div className="container" style={css(~paddingTop="100px", ())}>
    <h1> title->str </h1>
    children
  </div>;