open Utils;

module App = {
  [@react.component]
  let make = _ => {
    let url = ReasonReactRouter.useUrl();
    <>
      <div
        style={css(
          ~minHeight="100vh",
          ~position="relative",
          ~paddingBottom="10rem",
          (),
        )}>
        <Nav />
        {switch (url.path) {
         | [] => <Home />
         | ["about"] => <About />
         | ["resume"] => <Resume />
         | _ => <NotFound />
         }}
        <Meta />
      </div>
      {url.hash === "contact" ? <Contact /> : React.null}
    </>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");