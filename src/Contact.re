open Utils;

module MenuItem = {
  [@react.component]
  let make = (~page, ~href, ~className, ~setShowContact) => {
    let onClick = event => {
      ReactEvent.Mouse.preventDefault(event);
      setShowContact(previous => !previous);
    };

    <a onClick className href> page->str </a>;
  };
};

module Details = {
  [@react.component]
  let make = _ => {
    <div className="container">
      <h2> "Get in touch"->str </h2>
      <h5>
        "You can reach me by "->str
        <a className="hv" href="mailto:matthewthorning@gmail.com">
          "email "->str
        </a>
        "or through one of these platforms."->str
      </h5>
    </div>;
  };
};

[@react.component]
let make = (~showContact, ~setShowContact) => {
  <>
    {showContact
       ? <div
           onClick={_ => setShowContact(_ => false)}
           className="v-center"
           style={css(
             ~position="fixed",
             ~top="0",
             ~height="100vh",
             ~width="100%",
             ~boxSizing="border-box",
             ~background="rgba(0, 0, 0, 0.8",
             ~zIndex="2",
             (),
           )}>
           <div
             onClick={event => ReactEvent.Mouse.stopPropagation(event)}
             className="v-center secondary-bg container"
             style={css(~minHeight="50vh", ~borderRadius="25px", ())}>
             <Details />
           </div>
         </div>
       : React.null}
  </>;
};