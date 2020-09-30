open Utils

@react.component
let make = (~children) =>
  <div className="container" style={css(~padding="10rem 20px 20rem", ())}> children </div>
