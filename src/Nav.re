open Utils;

module NavItem = {
  [@react.component]
  let make = (~page) => {
    let currentPage = getCurrentPage();
    <li className="li-hz">
      {switch (page) {
       | "" =>
         <a className="col-p-hv navbar-item" href="/">
           <Icons.Home className="font-3" />
         </a>
       | "contact" =>
         <a className="navbar-item border-p-hv" href="#contact"> page->str </a>
       | _ => <a className="navbar-item border-p-hv" href=page> page->str </a>
       }}
    </li>;
  };
};

let pages = ["", "about", "resume", "contact"];

[@react.component]
let make = _ => {
  let currentPage = getCurrentPage();
  <>
    <nav
      className="bg-p"
      style={css(
        ~position="fixed",
        ~display="flex",
        ~justifyContent="flex-end",
        ~right="0",
        ~left="0",
        ~height="6rem",
        ~zIndex="1",
        ~padding="1rem",
        (),
      )}>
      <ul style={css(~display="flex-inline", ~padding="1rem", ())}>
        {pages
         ->Belt.List.keep(page => page !== currentPage)
         ->mapElements(page => <NavItem key=page page />)}
      </ul>
    </nav>
  </>;
};