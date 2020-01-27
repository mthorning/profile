open Utils;

[@react.component]
let make = (~children, ~className) => {
  let containerStyle = css(~minHeight="80vh", ~width="100%", ());
  let rowStyle = css(~display="flex", ~alignItems="center", ());
  <div className={"v-center " ++ className} style=containerStyle>
    <div className="container">
      <div className="row" style=rowStyle> children </div>
    </div>
  </div>;
};