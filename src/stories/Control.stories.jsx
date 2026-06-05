// @ts-nocheck
import { Control, Prime } from "components";

export default {
  title: "Components/Forms/Control",
  component: Control,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "User input components such as input and textarea fields.",
      },
    },
  },
};

export function Default() {
  return <Control placeholder="Form control" placeholder="name@example.com" />;
}

export function Textarea() {
  return <Control as="textarea" rows={3} />;
}

export function Sizing() {
  const examples = ["lg", false, "sm"];

  return examples.map((example) => (
    <Control size={example} placeholder={`.form-control-${example}`} mb={3} />
  ));
}

export function Disabled() {
  return <Control placeholder="Disabled input" disabled />;
}

export function Readonly() {
  return (
    <Control
      placeholder="Disabled input"
      value="Disabled readonly input"
      disabled
      readOnly
    />
  );
}

export function Plaintext() {
  return <Control plaintext value="email@example.com" readOnly />;
}

export function File() {
  return (
    <>
      <Control type="file" mb={3} />
      <Control type="file" multiple mb={3} />
      <Control type="file" disabled mb={3} />
      <Control type="file" size="sm" mb={3} />
      <Control type="file" size="lg" />
    </>
  );
}

export function Color() {
  return <Control type="color" value="#563d7c" title="Choose your color" />;
}
