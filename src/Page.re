open Utils;

[@react.component]
let make = (~title, ~children) =>
  <div className="container" style={css(~padding="10rem 20px 20rem", ())}>
    <h1> title->str </h1>
    children
  </div>;