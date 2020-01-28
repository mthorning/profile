open Utils;

[@react.component]
let make = (~children, ~className) => {
  let containerStyle = css(~minHeight="80vh", ~width="100%", ());
  <div className={"v-center " ++ className} style=containerStyle>
    <div className="container"> <div className="row"> children </div> </div>
  </div>;
};