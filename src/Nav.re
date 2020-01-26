let css = ReactDOMRe.Style.make;
let str = React.string;

module HomeIcon = {
  [@bs.module "react-icons/io"] [@react.component]
  external make:
    (~className: string, ~style: ReactDOMRe.style) => React.element =
    "IoMdHome";
};

type menuItem = {
  title: string,
  href: string,
};

let menuItems = [
  {title: "about", href: "#/about"},
  {title: "meta", href: "#/meta"},
  {title: "contact", href: "#/contact"},
];
[@react.component]
let make = _ => {
  let url = ReasonReactRouter.useUrl();
  <nav
    className="primary-bg"
    style={css(
      ~position="fixed",
      ~display="flex",
      ~justifyContent="space-between",
      ~right="0",
      ~left="0",
      ~height="60px",
      ~zIndex="1",
      ~padding="10px",
      (),
    )}>
    {switch (url.hash) {
     | ""
     | "/" => <span />
     | _ =>
       <a href="/#/">
         <HomeIcon
           className="primary-hover"
           style={css(~fontSize="3rem", ~padding="5px", ())}
         />
       </a>
     }}
    <ul style={css(~display="flex-inline", ~padding="10px", ())}>
      {menuItems
       ->Belt.List.map(item =>
           <li
             key={item.title}
             style={css(~float="left", ~listStyleType="none", ())}>
             <a className="navbar-item" href={item.href}> item.title->str </a>
           </li>
         )
       ->Array.of_list
       ->React.array}
    </ul>
  </nav>;
};