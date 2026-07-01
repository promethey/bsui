import { useState } from "react";
import { Offcanvas, Button, Prime, Label, Select } from "../src/components";

export default {
  title: "Components/Overlay/Offcanvas",
  component: Offcanvas,
  subcomponents: {
    "Offcanvas.Header": Offcanvas.Header,
    "Offcanvas.Title": Offcanvas.Title,
    "Offcanvas.Body": Offcanvas.Body,
  },
  parameters: {
    docs: {
      description: {
        component: "Offcanvas component",
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

  return (
    <>
      <Button mb={3} onClick={handleClick}>
        Show Offcanvas
      </Button>
      <div>
        <Label>Select placement:</Label>
        <Select
          defaultValue="start"
          onChange={(event) => setPlacement(event.target.value)}
          style={{ maxWidth: "150px" }}>
          <Select.Option value="start">Start</Select.Option>
          <Select.Option value="end">End</Select.Option>
          <Select.Option value="top">Top</Select.Option>
          <Select.Option value="bottom">Bottom</Select.Option>
        </Select>
      </div>
      <Offcanvas placement={placement} open={show} onHide={handleClose}>
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
      <Offcanvas backdrop={false} open={show} onHide={handleClose}>
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
      <Offcanvas scrollable open={show} onHide={handleClose}>
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
