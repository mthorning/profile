open Utils;

module App = {
  [@react.component]
  let make = _ => {
    let url = ReasonReactRouter.useUrl();
    if(List.length(url.path) > 1) {
      Js.log(url.path);
      Js.log(url.path->List.nth(1));
    };
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
       | [""] => <Home />
       | ["about"] => <About />
       | ["resume"] => <Resume />
       | _ => <NotFound />
       }}
      <Meta />
    </div>
    {
      List.length(url.path) > 1 && url.path->List.nth(1) === "contact"
        ? <Contact />
        : React.null;
    }
    </>
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");