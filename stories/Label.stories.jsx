import { Control, Label, Prime } from "components";

export default {
  title: "Components/Form/Label",
  component: Label,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays a label associated with a form control.",
      },
    },
  },
};

export function Default() {
  return <Label htmlFor="email">Email address</Label>;
}

export function Custom() {
  return (
    <Label htmlFor="email" className="text-primary fw-bold">
      Email address
    </Label>
  );
}

export function WithControl() {
  return (
    <Prime style={{ maxWidth: "320px" }}>
      <Label htmlFor="email">Email address</Label>
      <Control id="email" type="email" placeholder="name@example.com" />
    </Prime>
  );
}
