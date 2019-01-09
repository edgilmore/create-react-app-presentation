import React, { Component } from "react";
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  List,
  ListItem,
  Link,
  BlockQuote
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import image from "./images/EdGIlmore_Alamo_Modified_Small.jpg";
import "./Presentation.css";

const theme = createTheme(
  {
    primary: "black",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        contentHeight={850}
      >
        <Slide>
          <Heading textColor="tertiary" size={1} caps fill lineHeight={1}>
            Create React App 2.0 Overview
          </Heading>
          <Text size={6} textColor="quaternary" margin="10px 0 0" fit bold>
            Let's chat about what's new in the recent CRA release
          </Text>
        </Slide>
        <Slide>
          <Heading>Who Am I?</Heading>
          <Text textColor="quaternary">Edward Gilmore: Software Developer</Text>
          <Image src={image} className="Presentation-Image" />
          <Text textSize="1em" textColor="quaternary">
            6 Years of experience developing applictions for companies with a
            background in E-Commerce, Manufacturing & Packaging Automation,
            Content Management Systems.
          </Text>
        </Slide>
        <Slide>
          <Heading>What's New in 2.0</Heading>
          <List>
            <ListItem textColor="quaternary">
              🎉 More styling options: you can use Sass and CSS Modules out of
              the box.
            </ListItem>
            <ListItem textColor="quaternary">
              🐠 Facebook updated CRA to Babel 7, including support for the
              React fragment syntax and many bugfixes.
            </ListItem>
            <ListItem textColor="quaternary">
              📦 Facebook updated CRA to webpack 4, which automatically splits
              JS bundles more intelligently.
            </ListItem>
            <ListItem textColor="quaternary">
              🃏 Facebook updated CRA to Jest 23, which includes an interactive
              mode for reviewing snapshots.
            </ListItem>
            <ListItem textColor="quaternary">
              💄 Facebook added PostCSS support in CRA so you can use new CSS
              features in old browsers.
            </ListItem>
            <ListItem textColor="quaternary">
              💎 You can use Apollo, Relay Modern, MDX, and other third-party
              Babel Macros transforms.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>What's New in 2.0</Heading>
          <List>
            <ListItem textColor="quaternary">
              🌠 You can now import an SVG as a React component, and use it in
              JSX.
            </ListItem>
            <ListItem textColor="quaternary">
              🐈 You can try the experimental Yarn Plug’n’Play mode that removes
              node_modules.
            </ListItem>
            <ListItem textColor="quaternary">
              🕸 You can now plug your own proxy implementation in development to
              match your backend API.
            </ListItem>
            <ListItem textColor="quaternary">
              🚀 You can now use packages written for latest Node versions
              without breaking the build.
            </ListItem>
            <ListItem textColor="quaternary">
              ✂️ You can now optionally get a smaller CSS bundle if you only
              plan to target modern browsers.
            </ListItem>
            <ListItem textColor="quaternary">
              👷‍♀️ Service workers are now opt-in and are built using Google’s
              Workbox.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>What had to be changed from 1.0 to 2.0?</Heading>
          <List className="add-list-style">
            <ListItem textColor="quaternary" textSize="1em">
              Node 6 is no longer supported.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              Support for older browsers (such as IE 9 to IE 11) is now opt-in
              with a separate package.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              Code-splitting with import() now behaves closer to specification,
              while require.ensure() is disabled.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              The default Jest environment now includes jsdom.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              Support for specifying an object as proxy setting was replaced
              with support for a custom proxy module.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              Support for .mjs extension was removed until the ecosystem around
              it stabilizes.
            </ListItem>
            <ListItem textColor="quaternary" textSize="1em">
              PropTypes definitions are automatically stripped out of the
              production builds.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Demos</Heading>
        </Slide>
        <Slide>
          <Text textColor="quaternary">
            <FontAwesomeIcon icon={faTwitter} />: @edward_gilmore
          </Text>
          <Text textColor="quaternary">
            <FontAwesomeIcon icon={faGithub} />:{" "}
            <Link href="https://www.github.com/edgilmore">
              https://www.github.com/edgilmore
            </Link>
            <Text />
            <BlockQuote textColor="quaternary">Sources:</BlockQuote>
            <List>
              <ListItem textColor="quaternary">
                <Link href="https://reactjs.org/blog/2018/10/01/create-react-app-v2.html">
                  Create React App Blog
                </Link>
              </ListItem>
              <ListItem textColor="quaternary">
                <Link href="https://elijahmanor.com/cra2-playlist/">
                  Elijah Manor
                </Link>
              </ListItem>
            </List>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
