module Home = {
  [@bs.module "react-icons/fa"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "FaHome";
};

module Arrow = {
  [@bs.module "react-icons/io"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "IoIosArrowRoundForward";
};

module Linkedin = {
  [@bs.module "react-icons/fa"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "FaLinkedin";
};

module Twitter = {
  [@bs.module "react-icons/fa"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "FaTwitterSquare";
};

module Envelope = {
  [@bs.module "react-icons/fa"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "FaEnvelopeSquare";
};

module Cat = {
  [@bs.module "react-icons/fa"] [@react.component]
  external make:
    (~className: string=?, ~style: ReactDOMRe.style=?) => React.element =
    "FaCat";
};