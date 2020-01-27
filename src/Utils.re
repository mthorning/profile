let str = React.string;
let css = ReactDOMRe.Style.make;
let mapElements = (list, callback): React.element =>
  list->Belt.List.map(callback)->Array.of_list->React.array;