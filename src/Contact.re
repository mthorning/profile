open Utils;

module Details = {
  [@react.component]
  let make = _ => {
    let className = "col-s-hv font-5 m-2";
    <div className="container">
      <h2> "Get in touch"->str </h2>
      <h5>
        "You can reach me by "->str
        <a className="col-s-hv" href="mailto:matthewthorning@gmail.com">
          "email "->str
        </a>
        "or through social media."->str
      </h5>
      <div className="row pull-right">
        <a className href="mailto:matthewthorning@gmail.com">
          <Icons.Envelope />
        </a>
        <a className href="https://twitter.com/mattthorning">
          <Icons.Twitter />
        </a>
        <a
          className
          href="https://www.linkedin.com/in/matt-thorning-39a858120/">
          <Icons.Linkedin />
        </a>
      </div>
    </div>;
  };
};

[@react.component]
let make = _ => {
  let currentPage =
    switch (getCurrentPage()) {
    | "contact" => ""
    | page => page
    };
  let closeContact = _ => {
    ReasonReactRouter.replace("/" ++ currentPage);
  };
  <div
    onClick=closeContact
    className="v-center"
    style={css(
      ~position="fixed",
      ~top="0",
      ~bottom="0",
      ~width="100%",
      ~boxSizing="border-box",
      ~background="rgba(0, 0, 0, 0.8",
      ~zIndex="2",
      (),
    )}>
    <div
      onClick={event => ReactEvent.Mouse.stopPropagation(event)}
      className="v-center bg-s container"
      style={css(~minHeight="50vh", ~borderRadius="25px", ())}>
      <Details />
    </div>
  </div>;
};