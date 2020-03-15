open Utils;

[@react.component]
let make = _ => {
  <Page>
    <h1> "About Me"->str </h1>
    <p>
      "Hello, my name is Matt and I'm a Software Developer. I live in Cornwall which is in the South West of England, with my partner, daughter and cat.  "
      ->str
      <Icons.Cat />
    </p>
    <p>
      "I have a passion for learning and spend most of my time "->str
      <a className="link" href="https://github.com/mthorning">"coding "->str</a>
      "and "->str
      <a className="link" href="https://hellocode.dev">"writing blog posts "->str</a>
      "about coding. I also enjoy listening to music, occasionally play the guitar and like to spend time on the coast."->str
    </p>
    <P>
      "I've worked as a Software Developer since late 2017, before this, I was a manager at Royal Mail. I'm self-taught (by that I mean I was taught by other people online!) which has enabled me to learn at a much faster pace than would otherwise have been possible at college or university. By allowing myself to choose my own curriculum and rate of study I have created a desire within myself for learning which has not decreased even after achieving my goal of becoming a Software Developer."
    </P>
    <P>
        "I have been surprised to find that the skills that I gained in my previous roles at Royal Mail transfer easily into Software Development. I value good processes and have found that there are many similarities between the work I did with World Class Mail (similar to Lean Manufacturing) and the Agile methodologies which we follow at Headforwards. Also, the ability to collaborate and act as a member of a team, sometimes taking the lead and sometimes following the lead of others, is important both when moving large volumes of mail to strict deadlines and when developing complex web applications."
    </P>
    <P>
    "Although JavaScript is my main language, I have also developed an affection for languages with strong type systems, in particular Rust and Reason. In a similar way to the above, I have found that there are many lessons we can learn as JavaScript developers from using other languages, particularly those which operate at a lower level than JS. Through my use of these and React (which was originally written in StandardML) I have developed a love of functional programming paradigms, and I now look for opportunities to use these lessons to make the software I am developing as composable and robust as possible."
    </P>
  </Page>;
};
