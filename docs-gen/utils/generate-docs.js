const fs = require("fs");

const OUTPUT_ROOT_DIR = process.env["OUTPUT_ROOT_DIR"];
const COMPONENTS_FILES_DIR = process.env["COMPONENTS_FILES_DIR"];
const COMPONENTS_DOCS_DIR = process.env["COMPONENTS_DOCS_DIR"];
const COMPONENT_INDEX_EXTENSION = process.env["COMPONENT_INDEX_EXT"];
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];
const COMPONENT_DIR = process.env["COMPONENT_DIR"];
const COMPONENTS_SETTINGS_DIR = process.env["COMPONENTS_SETTINGS_DIR"];
const TEMPLATE_DIR = process.env["TEMPLATE_DIR"];
const SHARED_DIR = process.env["SHARED_DIR"];
const README_CHAPTERS_DIR = process.env["README_CHAPTERS_DIR"];

try {
  const CSS_TABLE_HEADER = fs.readFileSync(
    TEMPLATE_DIR + "/css-vars-table-header.md",
    "utf8"
  );

  const CSS_TABLE_ROW = fs.readFileSync(
    TEMPLATE_DIR + "/css-vars-table-row.md",
    "utf8"
  );

  const CSS_TEMPLATE_TABLE_HEADER_MINI = fs.readFileSync(
    TEMPLATE_DIR + "/css-vars-table-header-mini.md",
    "utf8"
  );

  const CSS_TEMPLATE_TABLE_ROW_MINI = fs.readFileSync(
    TEMPLATE_DIR + "/css-vars-table-row-mini.md",
    "utf8"
  );

  const PROPS_TEMPLATE_TABLE_HEADER = fs.readFileSync(
    TEMPLATE_DIR + "/props-table-header.md",
    "utf8"
  );

  const PROPS_TEMPLATE_TABLE_ROW = fs.readFileSync(
    TEMPLATE_DIR + "/props-table-row.md",
    "utf8"
  );

  const PROPS_TEMPLATE_TABLE_HEADER_MINI = fs.readFileSync(
    TEMPLATE_DIR + "/props-table-header-mini.md",
    "utf8"
  );

  const PROPS_TEMPLATE_TABLE_ROW_MINI = fs.readFileSync(
    TEMPLATE_DIR + "/props-table-row-mini.md",
    "utf8"
  );

  const parseCssVars = (componentCssVars) => {
    let outputCssTable = "";
    let outputCssList = "";
    let readmeCssTable = "";

    outputCssTable += `${CSS_TABLE_HEADER}`;
    readmeCssTable += `${CSS_TABLE_HEADER}`;

    Object.keys(componentCssVars).forEach((cssVar) => {
      const propName = `[${cssVar}](#${cssVar.replace("--mbx", "-mbx")})`;
      const readmePropName = `[${cssVar}](https://cianciarusocataldo.github.io/mobrix-ui/docs/${COMPONENT_TYPE}/${COMPONENT_NAME}/#${cssVar.replace("--mbx", "-mbx")})`;

      const fallback = componentCssVars[cssVar].fallback
        ? `[${componentCssVars[cssVar].fallback}](#${componentCssVars[cssVar].fallback.replace("--mbx", "-mbx")})`
        : "/";
      const readmeFallback = componentCssVars[cssVar].fallback
        ? `[${componentCssVars[cssVar].fallback}](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#${componentCssVars[cssVar].fallback.replace("--mbx", "-mbx")})`
        : "/";
      let defaultValue = "/";

      if (componentCssVars[cssVar].defaultInternal) {
        const defaultInternal = componentCssVars[cssVar].defaultInternal;
        defaultValue = `[${defaultInternal}](#${defaultInternal.replace("--mbx", "-mbx")})`;
      } else if (componentCssVars[cssVar].defaultGlobal) {
        const defaultGlobal = componentCssVars[cssVar].defaultGlobal;
        defaultValue = `[${defaultGlobal}](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#${defaultGlobal.replace("--mbx", "-mbx")})`;
      } else if (componentCssVars[cssVar].defaultColor) {
        const defaultColor =
          "<div><div style='text-align:center;margin-auto;'>" +
          componentCssVars[cssVar].defaultColor +
          "</div><div style='text-align:center;margin-auto;'><div style='background:" +
          componentCssVars[cssVar].defaultColor +
          ";margin:auto; width:15px; height:15px;'/></div></div>";
        defaultValue = defaultColor;
      } else if (
        componentCssVars[cssVar].defaultExternal &&
        componentCssVars[cssVar].defaultExternal.component &&
        componentCssVars[cssVar].defaultExternal.prop &&
        componentCssVars[cssVar].defaultExternal.type
      ) {
        const externalComponent =
          componentCssVars[cssVar].defaultExternal.component;
        const propNameIndex = componentCssVars[
          cssVar
        ].defaultExternal.prop.replace("--mbx", "-mbx");
        const propName = componentCssVars[cssVar].defaultExternal.prop;
        defaultValue = `[${propName}](../../${componentCssVars[cssVar].defaultExternal.type}/${externalComponent}/css-vars.md#${propNameIndex})`;
      } else if (componentCssVars[cssVar].default) {
        const defaultInline = componentCssVars[cssVar].default;
        defaultValue = defaultInline;
      }

      outputCssTable += `${CSS_TABLE_ROW.replace("PROP_NAME", propName).replace("FALLBACK", fallback).replace("DEFAULT", defaultValue)}`;
      readmeCssTable += `${CSS_TABLE_ROW.replace("PROP_NAME", readmePropName).replace("FALLBACK", readmeFallback).replace("DEFAULT", defaultValue)}`;
      outputCssList += `\n\n\<br>\n\n### ${cssVar}\n\n`;
      outputCssList += `${CSS_TEMPLATE_TABLE_HEADER_MINI}`;
      outputCssList += `${CSS_TEMPLATE_TABLE_ROW_MINI.replace("FALLBACK", fallback)}\n\n<br>\n\n`;
      outputCssList += `${componentCssVars[cssVar].description}\n\n<br>\n\n`;
    });

    return {
      cssVarsTable: outputCssTable,
      cssVarsList: outputCssList,
      readmeCssTable,
    };
  };

  const parseProps = (componentProps) => {
    let outputPropsTable = "";
    let readmePropsTable = "";
    let outputPropsList = "";

    outputPropsTable += `${PROPS_TEMPLATE_TABLE_HEADER}`;
    readmePropsTable += `${PROPS_TEMPLATE_TABLE_HEADER}`;
    Object.keys(componentProps).forEach((parsedProp) => {
      const propName = `[${parsedProp}](#${parsedProp.toLowerCase()})`;
      const propNameReadme = `[${parsedProp}](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#${parsedProp.toLowerCase()})`;

      const outputType = (componentProps[parsedProp].type || "/")
        .replaceAll("'", "`")
        .replaceAll("|", "&#124;")
        .replaceAll("<DOUBLE_QUOTE>", '"');

      const outputDefault = componentProps[parsedProp].default || "/";

      const outputDescription = componentProps[parsedProp].description || "";

      outputPropsTable += `${PROPS_TEMPLATE_TABLE_ROW.replace("PROP_NAME", propName).replace("PROP_TYPE", outputType).replace("PROP_DEFAULT", outputDefault)}`;
      readmePropsTable += `${PROPS_TEMPLATE_TABLE_ROW.replace("PROP_NAME", propNameReadme).replace("PROP_TYPE", outputType).replace("PROP_DEFAULT", outputDefault)}`;

      outputPropsList += `\n\n\<br>\n\n### ${parsedProp}\n\n`;
      outputPropsList += `${PROPS_TEMPLATE_TABLE_HEADER_MINI}`;
      outputPropsList += `${PROPS_TEMPLATE_TABLE_ROW_MINI.replace("PROP_TYPE", outputType).replace("PROP_DEFAULT", outputDefault)}\n\n<br>\n\n`;
      outputPropsList += `${outputDescription}\n\n<br>\n\n`;
    });

    return {
      propsTable: outputPropsTable,
      propsList: outputPropsList,
      readmePropsTable,
    };
  };

  if (process.env["PARSE_MODE"] === "components") {
    let componentPropsPage = fs.readFileSync(
      COMPONENT_DIR + "/props.md",
      "utf8"
    );
    let componentCssPage = fs.readFileSync(
      COMPONENT_DIR + "/css-vars.md",
      "utf8"
    );

    const componentSettings = require(
      "../../" +
        COMPONENTS_SETTINGS_DIR +
        "/" +
        COMPONENT_TYPE +
        "/" +
        COMPONENT_NAME +
        "/mbx-settings.json"
    );

    const componentCssVars = require(
      "../../" +
        COMPONENTS_SETTINGS_DIR +
        "/" +
        COMPONENT_TYPE +
        "/" +
        COMPONENT_NAME +
        "/css-vars.json"
    );

    const componentProps = require(
      "../../" +
        COMPONENTS_SETTINGS_DIR +
        "/" +
        COMPONENT_TYPE +
        "/" +
        COMPONENT_NAME +
        "/props.json"
    );

    const { propsList, propsTable } = parseProps(componentProps);
    const { cssVarsList, cssVarsTable } = parseCssVars(componentCssVars);

    componentCssPage = componentCssPage
      .replace("COMPONENT_TABLE", cssVarsTable)
      .replace("COMPONENT_LIST", cssVarsList);

    componentPropsPage = componentPropsPage
      .replace("COMPONENT_TABLE", propsTable)
      .replace("COMPONENT_LIST", propsList);
    fs.writeFileSync(COMPONENT_DIR + "/css-vars.md", componentCssPage);
    fs.writeFileSync(COMPONENT_DIR + "/props.md", componentPropsPage);
  } else if (process.env["PARSE_MODE"] === "global") {
    const TEMPLATE_README_CSS_VARS = fs.readFileSync(
      TEMPLATE_DIR + "/building-process-shared-css-vars.md",
      "utf8"
    );

    const TEMPLATE_README_PROPS = fs.readFileSync(
      TEMPLATE_DIR + "/building-process-shared-props.md",
      "utf8"
    );

    const sharedCssVars = require(
      "../../" + COMPONENTS_SETTINGS_DIR + "/global-css-vars.json"
    );
    const sharedProps = require(
      "../../" + COMPONENTS_SETTINGS_DIR + "/shared-props.json"
    );

    let sharedCssVarsPage = fs.readFileSync(
      SHARED_DIR + "/css-vars.md",
      "utf8"
    );

    let sharedPropsPage = fs.readFileSync(SHARED_DIR + "/props.md", "utf8");

    const { propsList, propsTable, readmePropsTable } = parseProps(sharedProps);
    const { cssVarsList, cssVarsTable, readmeCssTable } =
      parseCssVars(sharedCssVars);

    fs.writeFileSync(
      SHARED_DIR + "/props.md",
      sharedPropsPage
        .replace("COMPONENT_TABLE", propsTable)
        .replace("COMPONENT_LIST", propsList)
    );
    fs.writeFileSync(
      SHARED_DIR + "/css-vars.md",
      sharedCssVarsPage
        .replace("COMPONENT_TABLE", cssVarsTable)
        .replace("COMPONENT_LIST", cssVarsList)
    );

    fs.writeFileSync(
      README_CHAPTERS_DIR + "/building-process-shared-props.md",
      TEMPLATE_README_PROPS.replace("SHARED_PROPS", readmePropsTable)
    );

    fs.writeFileSync(
      README_CHAPTERS_DIR + "/building-process-shared-css-vars.md",
      TEMPLATE_README_PROPS.replace("SHARED_PROPS", readmeCssTable)
    );
  }
} catch (e) {
  console.log(e);
}
