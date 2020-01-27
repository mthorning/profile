open Utils;

module ArrowIcon = {
  [@bs.module "react-icons/io"] [@react.component]
  external make: (~style: ReactDOMRe.style) => React.element =
    "IoIosArrowRoundForward";
};

module Button = {
  [@react.component]
  let make = (~text, ~href, ~className="") =>
    <a
      href
      className={"button v-center " ++ className}
      style={css(
        ~display="inline-flex",
        ~height="50px",
        ~fontSize="1.5rem",
        (),
      )}>
      text->str
      <ArrowIcon style={css(~fontSize="2rem", ())} />
    </a>;
};

[@react.component]
let make = _ => {
  <>
    <Section className="primary-bg">
      <div className="eight columns">
        <h1> "Matt Thorning"->str </h1>
        <h5 className="secondary-color">
          "I work with people to make great software."->str
        </h5>
      </div>
    </Section>
    <Section className="secondary-bg">
      <div className="eight columns">
        <h5>
          "I have been working professionally as a JavaScript developer since 2017 but my interests expand beyond just JavaScript. At the time of writing this my favourites are Rust, ReasonMl and SvelteJs. Take a look at my Github profile to see what I'm playing with at the moment."
          ->str
        </h5>
      </div>
      <div className="two columns offset-by-one">
        <Button
          text="github"
          href="https://github.com/mthorning"
          className="secondary-button"
        />
      </div>
    </Section>
    <Section className="primary-bg">
      <div className="eight columns">
        <h5>
          "I also enjoy writing blog posts about subjects which I find interesting, please take a look at my other website, hellocode.dev."
          ->str
        </h5>
      </div>
      <div className="two columns offset-by-one">
        <Button text="hellocode" href="https://hellocode.dev" />
      </div>
    </Section>
  </>;
};