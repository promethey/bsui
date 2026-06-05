// @ts-nocheck
import { Navbar, Container, Prime, Dropdown, Nav } from "components";

export default {
  title: "Components/Navigation/Navbar",
  component: Navbar,
  subcomponents: {
    "Navbar.Brand": Navbar.Brand,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Top-level navigation container for routing and actions.",
      },
    },
  },
};

export function Brand() {
  return (
    <>
      <Navbar tone="light" bg="light" mb={3}>
        <Container fluid>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar tone="light" bg="light">
        <Container fluid>
          <Navbar.Brand as="span" mb={0} fw="bolder">
            Navbar
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export function Tones() {
  const examples = [
    { tone: "dark", bg: "dark" },
    { tone: "dark", bg: "primary" },
    { tone: "light", style: { background: "#e3f2fd;" } },
  ];

  return examples.map((example) => (
    <Navbar {...example} expand="lg" mb={3}>
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Navbar.Nav>
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ));
}

export function NavCollapse() {
  return (
    <Navbar tone="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Navbar.Nav>
            <Nav.Item>
              <Nav.Link to="/home" active>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/features">Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/pricing" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Dropdowns() {
  return (
    <Navbar tone="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Navbar.Nav>
            <Nav.Link to="/home" active>
              Home
            </Nav.Link>
            <Nav.Link to="/features">Features</Nav.Link>
            <Nav.Link to="/pricing">Pricing</Nav.Link>
            <Dropdown nav>
              <Dropdown.Toggle>Dropdown link</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Text() {
  return (
    <Navbar tone="light" bg="light">
      <Container fluid>
        <Navbar.Text>Navbar text with an inline element</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export function FixedTop() {
  return (
    <Navbar tone="light" bg="light" placement="fixed-top">
      <Container fluid>
        <Navbar.Brand>Fixed top</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export function FixedBottom() {
  return (
    <Navbar tone="light" bg="light" placement="fixed-bottom">
      <Container fluid>
        <Navbar.Brand>Fixed bottom</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export function StickyTop() {
  return (
    <Navbar tone="light" bg="light" placement="sticky-top">
      <Container fluid>
        <Navbar.Brand>Sticky top</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export function Scrolling() {
  return (
    <Navbar tone="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Navbar scroll</Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Navbar.Nav scroll scrollHeight="100px">
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <Dropdown nav>
              <Dropdown.Toggle>Link</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link disabled>Link</Nav.Link>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
