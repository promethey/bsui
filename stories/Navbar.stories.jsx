import {
  Navbar,
  Container,
  Prime,
  Dropdown,
  Nav,
  Control,
  Button,
} from "../src/components";

export default {
  title: "Components/Navigation/Navbar",
  component: Navbar,
  subcomponents: {
    "Navbar.Brand": Navbar.Brand,
    "Navbar.Collapse": Navbar.Collapse,
    "Navbar.Nav": Navbar.Nav,
    "Navbar.Text": Navbar.Text,
    "Navbar.Toggler": Navbar.Toggler,
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

export function Default() {
  return (
    <Navbar tone="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Navbar.Nav me="auto" mb={{ xs: 2, lg: 0 }}>
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <Dropdown navbar>
              <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Navbar.Nav>
          <Prime as="form" d="flex">
            <Control placeholder="Search" />
            <Button tone="success" outline ms={2}>
              Search
            </Button>
          </Prime>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

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
              <Dropdown.Toggle as={Nav.Link}>Dropdown link</Dropdown.Toggle>
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
            <Dropdown>
              <Dropdown.Toggle as={Nav.Link}>Link</Dropdown.Toggle>
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

export function Avatar() {
  return (
    <Navbar tone="light" bg="light" expand="sm">
      <Container fluid>
        <Prime
          d="flex"
          flex={{
            xs: {
              align: "center",
            },
          }}>
          <Navbar.Brand>
            <img src="./bsui-logo.png" alt="bsui" width="36" height="36" />
          </Navbar.Brand>
          <Navbar.Nav d={{ xs: "none", md: "flex" }}>
            <Nav.Link active>Overview</Nav.Link>
            <Nav.Link>Inventory</Nav.Link>
            <Nav.Link>Customers</Nav.Link>
            <Nav.Link disabled>Products</Nav.Link>
          </Navbar.Nav>
        </Prime>
        <Prime
          d="flex"
          flex={{
            xs: {
              align: "center",
            },
          }}>
          <Control placeholder="Search..." />
          <Dropdown>
            <Dropdown.Toggle as={Nav.Link} className="link-dark" p={0} ms={3}>
              <img
                src="https://avatars.githubusercontent.com/u/73757404?v=4"
                alt="promethey"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item active>Profile</Dropdown.Item>
              <Dropdown.Item>Messages</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item disabled>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Prime>
      </Container>
    </Navbar>
  );
}

export function Login() {
  return (
    <Navbar tone="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img src="./bsui-logo.png" alt="bsui" width="36" height="36" />
        </Navbar.Brand>
        <Navbar.Toggler />
        <Navbar.Collapse>
          <Prime
            w={100}
            d="flex"
            flex={{
              xs: { dir: "column" },
              lg: { justify: "between", dir: "row" },
            }}>
            <Navbar.Nav>
              <Nav.Link active>Home</Nav.Link>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link>FAQs</Nav.Link>
              <Nav.Link disabled>About</Nav.Link>
            </Navbar.Nav>
            <Prime
              d="flex"
              flex={{
                xs: { dir: "column" },
                lg: { align: "center", dir: "row" },
              }}>
              <Control type="text" placeholder="Search..." />
              <Button
                tone="light"
                outline
                mt={{ xs: 2, lg: 0 }}
                ms={{ xs: 0, lg: 3 }}>
                Login
              </Button>
            </Prime>
          </Prime>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
