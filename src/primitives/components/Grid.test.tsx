import * as React from "react";
import * as renderer from "react-test-renderer";

import { Grid } from "./Grid";

it("should render a div", () => {
  const tree = renderer.create(<Grid />).toJSON();

  expect(tree).toMatchSnapshot();
});
