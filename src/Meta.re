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

[@react.component]
let make = _ => {
  <span style={css(~position="absolute", ~bottom="0", ~right="1rem", ())}>
    <ul>
      <li className="li-hz"> "powered by "->str </li>
      {metaItems->mapElements(meta =>
         <li key={meta.title} className="li-hz">
           <a href={meta.href} className="td-none col-p-hv">
             meta.title->str
           </a>
         </li>
       )}
    </ul>
  </span>;
};