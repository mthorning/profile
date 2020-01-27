open Utils;

[@react.component]
let make = _ => {
  <Page title="Uh oh!">
    <h5> "Something's gone wrong, this page doesn't seem to exist!"->str </h5>
  </Page>;
};