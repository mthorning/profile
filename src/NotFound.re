open Utils;

[@react.component]
let make = _ => {
  <Page>
    <h1> "Uh oh!"->str </h1>
    <h5> "Something's gone wrong, this page doesn't seem to exist!"->str </h5>
  </Page>;
};