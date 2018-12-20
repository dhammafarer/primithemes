import * as React from "react";
import * as renderer from "react-test-renderer";

import { Box } from "./Box";

test("should render a div", () => {
  const tree = renderer.create(<Box />).toJSON();

  expect(tree).toMatchSnapshot();
});
