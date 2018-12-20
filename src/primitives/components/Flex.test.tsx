import * as React from "react";
import * as renderer from "react-test-renderer";

import { Flex } from "./Flex";

it("should render a div", () => {
  const tree = renderer.create(<Flex />).toJSON();

  expect(tree).toMatchSnapshot();
});
