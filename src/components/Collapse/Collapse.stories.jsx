// @ts-nocheck
import { useState } from "react";
import { Button, Collapse, Prime } from "components";

export default {
  title: "Components/Collapse",
  component: Collapse,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component: "",
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
        <Prime p={3} border rounded mt={3}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </Prime>
      </Collapse>
    </>
  );
}
