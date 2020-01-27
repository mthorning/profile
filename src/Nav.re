open Utils;

module HomeIcon = {
  [@bs.module "react-icons/io"] [@react.component]
  external make:
    (~className: string, ~style: ReactDOMRe.style) => React.element =
    "IoMdHome";
};

module NavItem = {
  [@react.component]
  let make = (~page, ~setShowContact) =>
    <li
      style={css(
        ~float="left",
        ~listStyleType="none",
        ~marginRight="15px",
        (),
      )}>
      {switch (page) {
       | "" =>
         <a className="navbar-item" href="#/">
           <HomeIcon
             className="primary-hover"
             style={css(~fontSize="3rem", ())}
           />
         </a>
       | "contact" =>
         <Contact.MenuItem
           className="navbar-item navbar-item-hv"
           href={"#/" ++ page}
           setShowContact
           page
         />
       | _ =>
         <a className="navbar-item navbar-item-hv" href={"#/" ++ page}>
           page->str
         </a>
       }}
    </li>;
};

let pages = ["", "about", "resume", "contact"];

[@react.component]
let make = _ => {
  let (showContact, setShowContact) = React.useState(_ => false);
  let url = ReasonReactRouter.useUrl();
  <>
    <Contact showContact setShowContact />
    <nav
      className="primary-bg"
      style={css(
        ~position="fixed",
        ~display="flex",
        ~justifyContent="flex-end",
        ~right="0",
        ~left="0",
        ~height="60px",
        ~zIndex="1",
        ~padding="10px",
        (),
      )}>
      <ul style={css(~display="flex-inline", ~padding="10px", ())}>
        {pages
         ->Belt.List.keep(page => "/" ++ page !== url.hash)
         ->mapElements(page => <NavItem key=page page setShowContact />)}
      </ul>
    </nav>
  </>;
};