import React from "react";
import {
  TabViewer,
  Drawer,
  DrawerProps,
  Button,
  PackageVersion,
  RadioButtonGroup,
} from "./mobrix-ui-preview";
import AtomsPage from "./pages/atoms";
import MoleculesPage from "./pages/molecules";
import OrganismsPage from "./pages/organisms";

const Atoms = <AtomsPage />;
const Molecules = <MoleculesPage />;
const Organisms = <OrganismsPage />;
const tabs = (
  <TabViewer
    tabClassName="demo-tab"
    tabSelectedClassName="demo-tab-selected"
    tabUnselectedClassName="demo-tab-unselected"
    //dark
    selected={1}
    tabs={[
      {
        label: "Atoms",
        content: Atoms,
        dismissable: true,
      },
      {
        label: "Molecules",
        content: Molecules,
      },
      {
        label: "Organisms",
        content: Organisms,
      },
    ]}
  />
);

const App = () => {
  const position: DrawerProps["position"] = "top-left";

  const [isVisible, setVisible] = React.useState(false);

  return (
    <>
      <Drawer
        //dark
        hide={!isVisible}
        background={false}
        className="test-class2"
        animated
        onClose={() => {
          console.log("drawer close");
          setVisible(false);
        }}
        position={position}
      >
        <div
          style={{
            padding: "1rem",
          }}
        >
          {new Array(18).fill(" ").map((el, index) => (
            <p key={index} style={{ padding: "1rem" }}>
              Element {index}
            </p>
          ))}
        </div>
      </Drawer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          key="drawer-btn"
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          Toggle drawer
        </Button>
        <RadioButtonGroup
          buttons={[
            { text: "textPosition = left", textPosition: "left" },
            { text: "textPosition = top", textPosition: "top" },
            { text: "textPosition = right", textPosition: "right" },
            { text: "textPosition = bottom", textPosition: "bottom" },
          ]}
        />
        <RadioButtonGroup
          dark
          horizontal
          buttons={[
            { text: "textPosition = left", textPosition: "left" },
            { text: "textPosition = top", textPosition: "top" },
            { text: "textPosition = right", textPosition: "right" },
            { text: "textPosition = bottom", textPosition: "bottom" },
          ]}
        />
        <PackageVersion
          name="mobrix-ui"
          user="CianciarusoCataldo"
          source="github-release"
        />
        {tabs}
      </div>
    </>
  );
};

export default App;
