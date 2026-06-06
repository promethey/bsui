import { useState } from "react";
import { Placeholder, Card, Button, Prime } from "components";

export default {
  title: "Components/Feedback/Placeholder",
  component: Placeholder,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Displays a skeleton placeholder that represents content before it has been loaded.",
      },
    },
  },
};

export function Default() {
  return <Placeholder col={2} />;
}

export function ButtonPlaceholder() {
  return <Placeholder col={2} as={Button} disabled />;
}

export function Width() {
  return (
    <>
      <Placeholder col={6} />
      <Placeholder w={75} />
      <Placeholder style={{ width: "35%" }} />
    </>
  );
}

export function Color() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  return colors.map((color) => <Placeholder bg={color} col={10} />);
}

export function Sizing() {
  const examples = ["xs", "sm", undefined, "lg"];

  return examples.map((example) => <Placeholder size={example} col={8} />);
}

export function CardPlaceholder() {
  const [loading, setLoading] = useState(false);

  return (
    <Prime d="flex">
      <Card style={{ width: "18rem" }} me={3}>
        <Card.Header overflow="hidden" p={0}>
          <Placeholder w={100} style={{ height: "200px" }} />
        </Card.Header>
        <Card.Body>
          <Placeholder.Glow as={Card.Title}>
            <Placeholder col={6} />
          </Placeholder.Glow>
          <Placeholder.Glow as={Card.Text}>
            <Placeholder col={9} me={2} />
            <Placeholder col={2} />
            <Placeholder col={7} me={2} />
            <Placeholder col={4} />
            <Placeholder col={6} />
          </Placeholder.Glow>
          <Placeholder as={Button} disabled col={6} />
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} me={3}>
        <Card.Header overflow="hidden" p={0}>
          <Prime bg="success" w={100} style={{ height: "200px" }} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Prime>
  );
}

export function Animation() {
  return (
    <>
      <Placeholder.Glow>
        <Placeholder col={12} />
      </Placeholder.Glow>
      <Placeholder.Wave>
        <Placeholder col={12} />
      </Placeholder.Wave>
    </>
  );
}
