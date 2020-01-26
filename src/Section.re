let css = ReactDOMRe.Style.make;

[@react.component]
let make = (~render, ~containerClass) => {
  let containerStyle = css(~height="80vh", ~width="100%", ());
  let rowStyle = css(~display="flex", ~alignItems="center", ());
  <div className={"v-center " ++ containerClass} style=containerStyle>
    <div className="container">
      <div className="row" style=rowStyle> {render()} </div>
    </div>
  </div>;
};