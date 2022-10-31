import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Review } from "../../../src";

renderingTest(Review, {
  value: 3,
  max: 6,
  user: "Test user",
  description: "Test description",
  icon: <div>Test icon</div>,
  url: "test-url",
  logo: "facebook",
});

describeTest("External link icon test", () => {
  test("If logo prop is set, the icon is showed also when no url is provided", () => {
    const wrapper = mount(<Review rate={3} max={6} logo="github" />);
    expect(wrapper.find('svg[data-id="github-logo"]'));
  });

  test("If url is provided but logo is not set, the default icon is used", () => {
    const wrapper = mount(
      <Review rate={3} max={6} url="https://www.example.com/" />
    );
    expect(wrapper.find('svg[data-id="default-logo"]'));
  });
});
