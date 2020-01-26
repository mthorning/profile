let css = ReactDOMRe.Style.make;
let str = React.string;

module App = {
  [@react.component]
  let make = _ => {
    let url = ReasonReactRouter.useUrl();
    Js.log(url);
    <>
      <Nav />
      {switch (url.hash) {
       | ""
       | "/" => <Home />
       | "/about" => <About />
       | _ => <NotFound />
       }}
    </>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");