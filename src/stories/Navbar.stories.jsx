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
    <Navbar tone="dark" bg="dark" expand="lg">
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
            <Dropdown as={Nav.Item}>
              <Dropdown.Button as={Nav.Link} href="#">
                Dropdown link
              </Dropdown.Button>
              <Dropdown.Menu staticMenu>
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
