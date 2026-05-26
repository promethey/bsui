// @ts-nocheck
import { Grid, Container, Row, Col, Prime } from "components";

export default {
  title: "Components/Grid",
  component: Grid,
  subcomponents: { Container, Row, Col, Prime },
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

export function Default() {
  return (
    <Container bg="light" border p={3}>
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

  return examples.map((example, index) => (
    <Container
      key={example.value}
      fluid={example.value}
      mt={index === 0 ? undefined : 3}
      p={3}
      bg="light"
      border>
      100% wide until {example.name} breakpoint
    </Container>
  ));
}

export function Fluid() {
  return (
    <Container p={3} bg="light" border fluid>
      Fluid container
    </Container>
  );
}

export function Alignment() {
  const examples = ["start", "center", "end"];

  return (
    <Container>
      {examples.map((example, index) => (
        <Row
          mt={index === 0 ? undefined : 4}
          bg="light"
          border
          flex={{ xs: { align: example } }}
          style={{ minHeight: "10rem" }}>
          <Col p={2} bg="light" border>
            One of three columns
          </Col>
          <Col p={2} bg="light" border>
            One of three columns
          </Col>
          <Col p={2} bg="light" border>
            One of three columns
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export function EqualWidth() {
  return (
    <Container>
      <Row mb={1}>
        <Col bg="light" border p={2} me={1}>
          1 of 2
        </Col>
        <Col bg="light" border p={2}>
          2 of 2
        </Col>
      </Row>
      <Row>
        <Col bg="light" border p={2}>
          1 of 3
        </Col>
        <Col bg="light" border p={2} mx={1}>
          2 of 3
        </Col>
        <Col bg="light" border p={2}>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
EqualWidth.storyName = "Equal width";

export function OneColumnWidth() {
  return (
    <Container>
      <Row mb={1}>
        <Col bg="light" border p={2}>
          1 of 3
        </Col>
        <Col xs={6} mx={1} bg="light" border p={2}>
          2 of 3
        </Col>
        <Col bg="light" border p={2}>
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col bg="light" border p={2}>
          1 of 3
        </Col>
        <Col xs={5} mx={1} bg="light" border p={2}>
          2 of 3
        </Col>
        <Col bg="light" border p={2}>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
OneColumnWidth.storyName = "One column width";

export function RowColumns() {
  const examples = [2, 3, "auto", 4];

  return (
    <Container>
      {examples.map((example, index) => (
        <Row cols={example} mt={index === 0 ? undefined : 3}>
          <Col bg="light" border p={2}>
            Column
          </Col>
          <Col bg="light" border p={2}>
            Column
          </Col>
          <Col bg="light" border p={2}>
            Column
          </Col>
          <Col bg="light" border p={2}>
            Column
          </Col>
          <Col bg="light" border p={2}>
            Column
          </Col>
        </Row>
      ))}
    </Container>
  );
}
RowColumns.storyName = "Row columns";

export function Nesting() {
  return (
    <Container>
      <Row>
        <Col sm={3} bg="light" border p={2}>
          Level 1
        </Col>
        <Col sm={9} bg="light" border>
          <Row p={2}>
            <Col xs={8} sm={6} bg="light" border p={2}>
              Level 2
            </Col>
            <Col xs={4} sm={6} bg="light" border p={2}>
              Level 2
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
