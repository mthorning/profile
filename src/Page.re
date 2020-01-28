open Utils;

[@react.component]
let make = (~title, ~children) =>
  <div className="container" style={css(~padding="10rem 0 20rem", ())}>
    <h1> title->str </h1>
    children
  </div>;