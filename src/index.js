import React from "react";
import { render } from "react-dom";
import { Segment } from "semantic-ui-react";
import Dropdown from "./Dropdown";
import countryOptions from "./countryOptions";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

const CODE_STYLE = {
  borderRadius: 2,
  padding: "0 0.25em",
  backgroundColor: "rgba(65, 131, 196, 0.25)"
};

const App = () => (
  <Segment>
    <h1>Fullscreen Mobile Dropdown Dropin</h1>
    <p>
      This dropdown becomes fullscreen on mobile and hangs from the bottom on
      desktop.
    </p>
    <p>
      The trick is that the component generates a dummy clone, since the
      original elements, including the menu listbox, has to be used and modified
      for the fullscreen effect.
    </p>

    <p>
      An example of this happens in
      {" "}
      <a href="http://patw0929.github.io/react-intl-tel-input/">
        <code style={CODE_STYLE}>patw0929/react-intl-tel-input</code>
      </a>.
      {" "}
      View from a phone, or use a device emulator on your browser.
    </p>

    <Dropdown
      fluid
      placeholder="Select your country"
      options={countryOptions}
    />

    <p />
    <h3>Keep scrolling! It's a fixed position.</h3>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
    <p>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test
    </p>
  </Segment>
);

render(<App />, document.getElementById("root"));
