// @ts-nocheck
import { useState } from "react";
import { Nav, Prime } from "components";

export default {
  title: "Components/Navigation/Nav",
  component: Nav,
  subcomponents: {
    "Nav.Item": Nav.Item,
    "Nav.Link": Nav.Link,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Navigation component",
      },
    },
  },
};

export function Default() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link to="#" active>
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export function HorizontalAlignment() {
  const examples = ["start", "center", "end"];

  return (
    <>
      {examples.map((justify) => (
        <Nav flex={{ xs: { justify } }}>
          <Nav.Item>
            <Nav.Link to="#" active>
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      ))}
    </>
  );
}
HorizontalAlignment.storyName = "Horizontal alignment";

export function Vertical() {
  return (
    <Nav flex={{ xs: { dir: "column" } }}>
      <Nav.Item>
        <Nav.Link to="#" active>
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export function Tabs() {
  return (
    <Nav view="tabs">
      <Nav.Item>
        <Nav.Link to="#" active>
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export function Pills() {
  return (
    <Nav view="pills">
      <Nav.Item>
        <Nav.Link to="#" active>
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export function FillAndJustify() {
  return (
    <Nav view="pills" justified>
      <Nav.Item>
        <Nav.Link to="#" active>
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Much longer nav link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
FillAndJustify.storyName = "Fill and justify";

export function FlexUtils() {
  return (
    <Nav
      as="nav"
      view="pills"
      flex={{ xs: { dir: "column" }, sm: { dir: "row" } }}>
      <Nav.Link
        to="#"
        active
        flex={{ sm: { fill: true } }}
        text={{ align: { sm: "center" } }}>
        Active
      </Nav.Link>
      <Nav.Link
        to="#"
        flex={{ sm: { fill: true } }}
        text={{ align: { sm: "center" } }}>
        Longer nav link
      </Nav.Link>
      <Nav.Link
        to="#"
        flex={{ sm: { fill: true } }}
        text={{ align: { sm: "center" } }}>
        Link
      </Nav.Link>
      <Nav.Link
        to="#"
        flex={{ sm: { fill: true } }}
        text={{ align: { sm: "center" } }}
        disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}
FlexUtils.storyName = "Flex utils";
