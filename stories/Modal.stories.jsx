import { useState, useRef } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Control,
  Prime,
} from "../src/components";

export default {
  title: "Components/Overlay/Modal",
  component: Modal,
  subcomponents: {
    "Modal.Dialog": Modal.Dialog,
    "Modal.Content": Modal.Content,
    "Modal.Header": Modal.Header,
    "Modal.Title": Modal.Title,
    "Modal.Body": Modal.Body,
    "Modal.Footer": Modal.Footer,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Displays content in a layered overlay above the main interface.",
      },
    },
  },
};

export function Default() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Show modal</Button>

      <Modal
        open={expanded}
        onClose={(event, closeType) => {
          handleModalClose();
          console.log(event);
          console.log(closeType);
        }}
        backdrop="static">
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button tone="secondary" onClick={handleModalClose}>
              Close
            </Button>

            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Scrollable() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Show scrollable modal</Button>

      <Modal scrollable open={expanded} onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Scrollable modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button tone="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function VerticallyCentered() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Show centered modal</Button>

      <Modal centered open={expanded} onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Centered modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Modal body text goes here.</Modal.Body>

          <Modal.Footer>
            <Button tone="secondary" onClick={handleModalClose}>
              Close
            </Button>

            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Grid() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Launch grid modal</Button>

      <Modal open={expanded} onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Grid in modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container fluid>
              <Row>
                <Col md={4}>.col-md-4</Col>

                <Col md={4} ms="auto">
                  .col-md-4 .ms-auto
                </Col>
              </Row>

              <Row>
                <Col md={3}>.col-md-3</Col>

                <Col md={2} ms="auto">
                  .col-md-2 .ms-auto
                </Col>
              </Row>

              <Row>
                <Col md={6} ms="auto">
                  .col-md-6 .ms-auto
                </Col>
              </Row>

              <Row>
                <Col sm={9}>
                  Level 1
                  <Row>
                    <Col xs={8} sm={6}>
                      Level 2
                    </Col>

                    <Col xs={4} sm={6}>
                      Level 2
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Small() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Small modal</Button>

      <Modal open={expanded} size="sm" onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Small modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Modal body text goes here.</Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Large() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Large modal</Button>

      <Modal open={expanded} size="lg" onClose={() => setOpen(false)}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Large modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Modal body text goes here.</Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function ExtraLarge() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Extra large modal</Button>

      <Modal open={expanded} size="xl" onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Extra large modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Modal body text goes here.</Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Fullscreen() {
  const [expanded, setExpanded] = useState(false);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Fullscreen modal</Button>

      <Modal fullscreen open={expanded} onClose={handleModalClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Fullscreen modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Modal body text goes here.</Modal.Body>

          <Modal.Footer>
            <Button tone="secondary" onClick={handleModalClose}>
              Close
            </Button>

            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export function Message() {
  const [expanded, setExpanded] = useState(false);

  const messageRef = useRef(null);

  const handleModalOpen = () => {
    setExpanded(true);
  };

  const handleModalClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Send message</Button>
      <Modal
        open={expanded}
        onEntered={() => messageRef.current?.focus()}
        onClose={() => setExpanded(false)}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>New message to @promethey</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Prime mb={3}>
                <label>Recipient:</label>
                <Control type="text" defaultValue="@promethey" disabled />
              </Prime>
              <Prime>
                <label>Message:</label>
                <Control ref={messageRef} as="textarea" rows={3} type="text" />
              </Prime>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button tone="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button>Send message</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
