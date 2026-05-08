// @ts-nocheck
import { Container, Prime } from "components";

export default {
  title: "Components/Layout/Container",
  component: Container,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component:
          "Container is a responsive layout wrapper that controls page width and horizontal padding based on Bootstrap breakpoints",
      },
    },
  },
};

function Template(args) {
  return <Container {...args} />;
}

export function Default() {
  return (
    <Container bg="info" p={3}>
      Container
    </Container>
  );
}

export function Responsive() {
  const examples = [
    { value: "sm", name: "small" },
    { value: "md", name: "medium" },
    { value: "lg", name: "large" },
    { value: "xl", name: "extra large" },
    { value: "xxl", name: "extra extra large" },
  ];

  return examples.map((example) => (
    <Container key={example.value} fluid={example.value} mb={3} p={3} bg="info">
      100% wide until {example.name} breakpoint
    </Container>
  ));
}

export function Fluid() {
  return (
    <Container p={3} bg="info" fluid>
      Fluid container
    </Container>
  );
}
