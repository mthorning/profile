open Utils;

module Button = {
  [@react.component]
  let make = (~text, ~href, ~className="") =>
    <a
      href
      className={"button v-center font-2" ++ className}
      style={css(~display="inline-flex", ~height="5.5rem", ())}>
      text->str
      <Icons.Arrow className="font-2" />
    </a>;
};

[@react.component]
let make = _ => {
  let pTop = css(~paddingTop="2.5rem", ());
  <>
    <Banner className="bg-p">
      <div className="eight columns">
        <h1> "Matt Thorning"->str </h1>
        <h5 className="col-s">
          "I work with people to make great software."->str
        </h5>
      </div>
    </Banner>
    <Banner className="bg-s">
      <div className="eight columns">
        <h5>
          "I have been working professionally as a JavaScript developer since 2017 but my interests expand beyond just JavaScript. At the time of writing this my favourites are Rust, ReasonMl and SvelteJs. Take a look at my Github profile to see what I'm playing with at the moment."
          ->str
        </h5>
      </div>
      <div style=pTop className="two columns">
        <Button
          text="github"
          href="https://github.com/mthorning"
          className="button col-s-hv border-s-hv pull-right"
        />
      </div>
    </Banner>
    <Banner className="bg-p">
      <div className="eight columns">
        <h5>
          "I also enjoy writing blog posts about subjects which I find interesting, please take a look at my other website, hellocode.dev."
          ->str
        </h5>
      </div>
      <div style=pTop className="two columns">
        <Button
          className="button pull-right"
          text="hellocode"
          href="https://hellocode.dev"
        />
      </div>
    </Banner>
  </>;
};