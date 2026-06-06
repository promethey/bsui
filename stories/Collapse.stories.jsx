// @ts-nocheck
import { useState } from "react";
import { Button, Collapse, Prime } from "components";

export default {
  title: "Components/Content/Collapse",
  component: Collapse,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component:
          "Animates the expansion and collapsing of content visibility.",
      },
    },
  },
};

export function Default() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close" : "Open"}
      </Button>
      <Collapse open={open} duration={350}>
        <Prime p={3} border rounded mt={3} style={{ width: "300px" }}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </Prime>
      </Collapse>
    </>
  );
}

export function Horizontal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close" : "Open"}
      </Button>
      <Collapse open={open} duration={350} horizontal>
        <Prime p={3} border rounded mt={3} style={{ width: "300px" }}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </Prime>
      </Collapse>
    </>
  );
}
