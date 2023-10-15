import React from "react";
import { mount } from "enzyme";
import { DatePicker } from "../../../src";
import {
  defaultDays,
  defaultMonths,
} from "../../../src/components/organisms/Calendar/constants";

const datePickerTest = () => {
  describe("DatePicker", () => {
    test("Rendering test", () => {
      let wrapper = mount(<DatePicker />);
      expect(wrapper);
      wrapper = mount(
        <DatePicker a11yDark={true} months={defaultMonths} days={defaultDays} />
      );
      expect(wrapper.props().months).toBe(defaultMonths);
      wrapper = mount(<DatePicker value={{ month: -1, year: -1, day: -1 }} />);
      expect(wrapper.props().value.day).toBe(-1);
    });

    test("Selecting a day trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <DatePicker
          onChange={onChangeStub}
          months={defaultMonths}
          days={defaultDays}
        />
      );
      wrapper.find('[data-mobrix-ui-test="date_picker_day_selector"]').simulate("click");
      wrapper
        .find(
          '[data-mobrix-ui-test="date_picker_day_selector"] [data-mobrix-ui-test="dropdown_option_0"]'
        )
        .simulate("click");
      expect(onChangeStub).toBeCalled;
      onChangeStub.mockReset();

      wrapper.find('[data-mobrix-ui-test="date_picker_day_selector"]').simulate("click");
      wrapper
        .find(
          '[data-mobrix-ui-test="date_picker_month_selector"] [data-mobrix-ui-test="dropdown_option_0"]'
        )
        .simulate("click");
      expect(onChangeStub).toBeCalled;
      onChangeStub.mockReset();

      wrapper.find('[data-mobrix-ui-test="date_picker_day_selector"]').simulate("click");
      wrapper
        .find(
          '[data-mobrix-ui-test="date_picker_year_selector"] [data-mobrix-ui-test="dropdown_option_0"]'
        )
        .simulate("click");
      expect(onChangeStub).toBeCalled;

      onChangeStub.mockReset();
      wrapper = mount(<DatePicker fromToday={false} onChange={onChangeStub} />);
      wrapper.find('[data-mobrix-ui-test="date_picker_calendar_button"]').simulate("click");
      wrapper
        .find("[data-mobrix-ui-id='calendar']")
        .find('[data-mobrix-ui-test="date_button_4"]')
        .simulate("click");

      wrapper
        .find('[data-mobrix-ui-test="close_button"]')
        .simulate("click");

      expect(onChangeStub).toBeCalled;
    });
  });
};

export default datePickerTest;
