open Utils;

type meta = {
  title: string,
  href: string,
};
let metaItems = [
  {href: "https://reasonml.github.io/en/", title: "ReasonML"},
  {href: "https://reasonml.github.io/reason-react/", title: "ReasonReact"},
  {href: "http://getskeleton.com/", title: "Skeleton CSS"},
];
let liStyle =
  css(~float="left", ~listStyleType="none", ~marginRight="15px", ());

[@react.component]
let make = _ => {
  <span style={css(~position="absolute", ~bottom="0", ~right="10px", ())}>
    <ul>
      <li style=liStyle> "powered by "->str </li>
      {metaItems->mapElements(meta =>
         <li key={meta.title} style=liStyle>
           <a href={meta.href} style={css(~textDecoration="none", ())}>
             meta.title->str
           </a>
         </li>
       )}
    </ul>
  </span>;
};