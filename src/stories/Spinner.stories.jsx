// @ts-nocheck
import { Spinner, Button, Prime } from "components";

export default {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Indicates loading, processing, or background activity.",
      },
    },
  },
};

export function Default() {
  return <Spinner />;
}

export function Colors() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "black-50",
    "white-50",
  ];

  return colors.map((color) => <Spinner text={color} />);
}

export function Grow() {
  return <Spinner view="grow" />;
}

export function GrowColors() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "black-50",
    "white-50",
  ];

  return colors.map((color) => <Spinner view="grow" text={color} />);
}

export function Margin() {
  return <Spinner m={5} />;
}

export function Flex() {
  return (
    <Prime d="flex" flex="center">
      <Spinner />
    </Prime>
  );
}

export function TextAlign() {
  return (
    <Prime text={{ align: "center" }}>
      <Spinner />
    </Prime>
  );
}

export function Small() {
  return (
    <>
      <Spinner size="sm" me={3} />
      <Spinner view="grow" size="sm" />
    </>
  );
}

export function Large() {
  return (
    <>
      <Spinner size="lg" me={3} />
      <Spinner view="grow" size="lg" />
    </>
  );
}

export function Custom() {
  const styles = {
    width: "3rem",
    height: "3rem",
  };

  return (
    <>
      <Spinner me={3} style={styles} />
      <Spinner view="grow" style={styles} />
    </>
  );
}

export function Buttons() {
  return (
    <>
      <Button disabled me={3}>
        <Spinner size="sm" me={2} />
        Loading...
      </Button>
      <Button disabled>
        <Spinner size="sm" view="grow" me={2} />
        Loading...
      </Button>
    </>
  );
}
