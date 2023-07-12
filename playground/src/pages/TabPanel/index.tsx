import { Button } from "mobrix-ui-preview";
import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const TabPanelPage = () => (
  <ComponentPage
    name="TabPanel"
    translations
    render={(t, componentLabel) => {
      const contentLabel = t("props_children");
      const clickMessage = t("common_click");

      return (
        <DemoComponent
          label={componentLabel}
          startColor="#BFBABA"
          props={{
            children: StringProp(contentLabel),
            disabled: BooleanProp(false),
            ...demoProps,
          }}
          rows={[["children", "disabled"], ...demoRows]}
          parseProps={(props, setProps) => ({
            ...props,
            onClick: () => alert(clickMessage),
          })}
        >
          {Button}
        </DemoComponent>
      );
    }}
  />
);

export default TabPanelPage;
