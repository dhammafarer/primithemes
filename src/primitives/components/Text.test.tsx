import * as React from "react";
import * as renderer from "react-test-renderer";

import { Text } from "./Text";

it("should render a div", () => {
  const tree = renderer.create(<Text />).toJSON();

  expect(tree).toMatchSnapshot();
});
