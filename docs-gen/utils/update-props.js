const fs = require("fs");
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];

try {
  let externalProps = {};
  let groupProps = {};
  const groups = require("../components/props-groups.json");
  const settings = require(
    "../components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/mbx-settings.json"
  );
  let props = require(
    "../components/" + COMPONENT_TYPE + "/" + COMPONENT_NAME + "/props.json"
  );

  if (settings.extend) {
    if (settings.extend.group) {
      Object.keys(settings.extend.group).forEach((groupName) => {
        groups[groupName].forEach((groupProp) => {
          groupProps[groupProp.prop] = {
            type: groupProp.type.replace(
              "TYPE",
              settings.extend.group[groupName].type
            ),
            default: groupProp.default,
            description:
              settings.extend.group[groupName].overrideDescription ||
              groupProp.description.replace("COMPONENT", COMPONENT_NAME),
          };
        });
      });
    }

    if (settings.extend.component) {
      const component = settings.extend.component.name;
      const type = settings.extend.component.type || COMPONENT_TYPE;
      externalProps = require(
        "../components/" + type + "/" + component + "/props.json"
      );

      if (settings.extend.component.exclude) {
        let excludedProps = settings.extend.component.exclude || [];
        excludedProps.forEach((excludedProp) => {
          delete externalProps[excludedProp];
        });
      }

      if (settings.extend.component.map) {
        let mappedProps = settings.extend.component.map || {};
        Object.keys(mappedProps).forEach((mappedProp) => {
          externalProps = {
            ...externalProps,
            [mappedProps[mappedProp]]: externalProps[mappedProp],
          };
          delete externalProps[mappedProp];
        });
      }

      Object.keys(externalProps).forEach((externalProp) => {
        externalProps[externalProp].comment =
          externalProps[externalProp].description +
          ` - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/${type}/${component} ${component}}`;

        externalProps[externalProp].description +=
          ` - extended from [${component} component](../../${type}/${component}/props.md#${externalProp})`;
      });
    }
  }

  fs.writeFileSync(
    "docs-gen/components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/props.json",
    JSON.stringify({ ...props, ...externalProps, ...groupProps })
  );
} catch (e) {
  console.log(e);
}
