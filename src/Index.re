module App = {
  let str = React.string;
  [@react.component]
  let make = _ => {
    <div className="container">
      <div className="row">
        <div className="one-half column"> <h1> "hello"->str </h1> </div>
      </div>
    </div>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");