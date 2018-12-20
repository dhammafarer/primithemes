import * as React from "react";
import * as renderer from "react-test-renderer";

import { Button } from "./Button";

test("should render a div", () => {
  const tree = renderer.create(<Button />).toJSON();

  expect(tree).toMatchSnapshot();
});
