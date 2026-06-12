import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "components";

describe("Card (compound component)", () => {
  it("renders root and children", () => {
    render(<Card>Root content</Card>);

    const root = screen.getByText("Root content").closest(".card");
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("card");
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-class">X</Card>);

    expect(container.firstChild).toHaveClass("card");
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies inline style", () => {
    render(<Card style={{ width: "200px" }}>Styled</Card>);

    const el = screen.getByText("Styled").closest(".card");
    expect(el).toHaveStyle({ width: "200px" });
  });

  it("forwards arbitrary props to Prime", () => {
    render(<Card data-testid="card-root">X</Card>);
    expect(screen.getByTestId("card-root")).toBeInTheDocument();
  });

  it("renders Card.Body correctly", () => {
    render(
      <Card>
        <Card.Body>Body content</Card.Body>
      </Card>,
    );

    const body = screen.getByText("Body content");
    expect(body).toBeInTheDocument();
    expect(body.closest(".card-body")).toBeInTheDocument();
  });

  it("renders Card.Header with default element", () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
      </Card>,
    );

    expect(screen.getByText("Header").tagName).toBe("DIV");
    expect(screen.getByText("Header")).toHaveClass("card-header");
  });

  it("renders Card.Header with custom tag via as", () => {
    render(
      <Card>
        <Card.Header as="h2">Header</Card.Header>
      </Card>,
    );

    expect(screen.getByText("Header").tagName).toBe("H2");
  });

  it("renders Card.Footer with default div", () => {
    render(
      <Card>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    );

    expect(screen.getByText("Footer").tagName).toBe("DIV");
    expect(screen.getByText("Footer")).toHaveClass("card-footer");
  });

  it("renders Card.Footer with custom element", () => {
    render(
      <Card>
        <Card.Footer as="h4">Footer</Card.Footer>
      </Card>,
    );

    expect(screen.getByText("Footer").tagName).toBe("H4");
  });

  it("renders Card.Title with default h5", () => {
    render(
      <Card>
        <Card.Title>Title</Card.Title>
      </Card>,
    );

    expect(screen.getByText("Title").tagName).toBe("H5");
    expect(screen.getByText("Title")).toHaveClass("card-title");
  });

  it("supports Card.Title as prop", () => {
    render(
      <Card>
        <Card.Title as="h1">Title</Card.Title>
      </Card>,
    );

    expect(screen.getByText("Title").tagName).toBe("H1");
  });

  it("renders Card.Subtitle with default h6", () => {
    render(
      <Card>
        <Card.Subtitle>Subtitle</Card.Subtitle>
      </Card>,
    );

    expect(screen.getByText("Subtitle").tagName).toBe("H6");
    expect(screen.getByText("Subtitle")).toHaveClass("card-subtitle");
  });

  it("renders Card.Text as paragraph", () => {
    render(
      <Card>
        <Card.Text>Some text</Card.Text>
      </Card>,
    );

    expect(screen.getByText("Some text").tagName).toBe("P");
    expect(screen.getByText("Some text")).toHaveClass("card-text");
  });

  it("renders Card.Image with src and alt", () => {
    render(
      <Card>
        <Card.Image src="img.jpg" alt="image" />
      </Card>,
    );

    const img = screen.getByAltText("image");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "img.jpg");
    expect(img).toHaveAttribute("alt", "image");
  });

  it("applies Card.Image placement class", () => {
    render(
      <Card>
        <Card.Image src="a.jpg" alt="a" placement="bottom" />
      </Card>,
    );

    const img = screen.getByAltText("a");
    expect(img).toHaveClass("card-img-bottom");
  });

  it("renders Card.Link with correct href", () => {
    render(
      <Card>
        <Card.Link to="/test">Go</Card.Link>
      </Card>,
    );

    const link = screen.getByText("Go");

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("Card.Link defaults to #", () => {
    render(
      <Card>
        <Card.Link>Empty</Card.Link>
      </Card>,
    );

    expect(screen.getByText("Empty")).toHaveAttribute("href", "#");
  });

  it("renders Card.Group container", () => {
    const { container } = render(
      <Card.Group>
        <Card>One</Card>
        <Card>Two</Card>
      </Card.Group>,
    );

    expect(container.firstChild).toHaveClass("card-group");
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });
});
