import { useState } from "react";
import { Offcanvas, Button, Prime, Form } from "../src/components";

export default {
  title: "Components/Offcanvas",
  component: Offcanvas,
  subcomponents: {
    "Offcanvas.Header": Offcanvas.Header,
    "Offcanvas.Title": Offcanvas.Title,
    "Offcanvas.Body": Offcanvas.Body,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Sliding overlay panel anchored to the viewport edge for secondary content and actions.",
      },
    },
  },
};

export function Default() {
  const [show, setShow] = useState(false);

  const [placement, setPlacement] = useState("start");

  const handleClick = (event) => {
    event.preventDefault();
    setShow((prev) => !prev);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  };

  const handleChangePlacement = (event) => {
    const value = event.target.value;

    setPlacement(value);
  };

  return (
    <>
      <Button mb={3} onClick={handleClick}>
        Show Offcanvas
      </Button>
      <div>
        <Form.Label htmlFor="placement_select">Select placement:</Form.Label>
        <Form.Select
          id="placement_select"
          value={placement}
          onChange={handleChangePlacement}
          style={{ maxWidth: "150px" }}>
          <Form.Select.Option value="start">Start</Form.Select.Option>
          <Form.Select.Option value="end">End</Form.Select.Option>
          <Form.Select.Option value="top">Top</Form.Select.Option>
          <Form.Select.Option value="bottom">Bottom</Form.Select.Option>
        </Form.Select>
      </div>
      <Offcanvas placement={placement} open={show} onClose={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Content for the offcanvas goes here. You can place just about any
          Bootstrap component or custom elements here.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function WithoutBackdrop() {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShow((prev) => !prev);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  };

  return (
    <>
      <Button mb={3} onClick={handleClick}>
        Show Offcanvas
      </Button>
      <Offcanvas backdrop={false} open={show} onClose={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Content for the offcanvas goes here. You can place just about any
          Bootstrap component or custom elements here.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
WithoutBackdrop.storyName = "Without backdrop";

export function Scrollable() {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShow((prev) => !prev);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  };

  return (
    <div style={{ height: "200vh" }}>
      <Button mb={3} onClick={handleClick}>
        Show Offcanvas
      </Button>
      <Offcanvas scrollable open={show} onClose={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Content for the offcanvas goes here. You can place just about any
          Bootstrap component or custom elements here.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
