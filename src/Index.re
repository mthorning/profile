open Utils;

module App = {
  [@react.component]
  let make = _ => {
    let url = ReasonReactRouter.useUrl();
    <div
      style={css(
        ~minHeight="100vh",
        ~position="relative",
        ~paddingBottom="100px",
        (),
      )}>
      <Nav />
      {switch (url.hash) {
       | ""
       | "/" => <Home />
       | "/about" => <About />
       | "/resume" => <Resume />
       | _ => <NotFound />
       }}
      <Meta />
    </div>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");