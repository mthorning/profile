let str = React.string;
let css = ReactDOMRe.Style.make;
let mapElements = (list, callback): React.element =>
  list->Belt.List.map(callback)->Array.of_list->React.array;

let getCurrentPage = _ => {
  let url = ReasonReactRouter.useUrl();
  List.length(url.path) > 1 ? List.hd(url.path) : "";
}