import { Modal, Button, Container, Row, Col } from "../src/components";
import { useState } from "react";

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

function useModal() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return { open, toggle };
}

function ModalStory({ open, toggle, children, label = "Show modal" }) {
  return (
    <>
      <Button onClick={toggle}>{label}</Button>
      <Modal open={open} onHide={toggle}>
        {children}
      </Modal>
    </>
  );
}

export function Default() {
  const { open, toggle } = useModal();

  return (
    <ModalStory open={open} toggle={toggle}>
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary" onClick={toggle}>
            Close
          </Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </ModalStory>
  );
}

export function Scrollable() {
  const { open, toggle } = useModal();

  return (
    <ModalStory open={open} toggle={toggle}>
      <Modal scrollable open={open} onHide={toggle}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button tone="secondary" onClick={toggle}>
              Close
            </Button>
            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ModalStory>
  );
}

export function VerticallyCentered() {
  const { open, toggle } = useModal();

  return (
    <ModalStory open={open} toggle={toggle}>
      <Modal centered open={open} onHide={toggle}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body text goes here.</Modal.Body>
          <Modal.Footer>
            <Button tone="secondary" onClick={toggle}>
              Close
            </Button>
            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ModalStory>
  );
}

export function Grid() {
  const { open, toggle } = useModal();

  return (
    <ModalStory open={open} toggle={toggle}>
      <Modal open={open} onHide={toggle}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
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
    </ModalStory>
  );
}

const makeSized = (size, label) => {
  return function SizedModal() {
    const { open, toggle } = useModal();

    return (
      <ModalStory open={open} toggle={toggle} label={label}>
        <Modal size={size} open={open} onHide={toggle}>
          <Modal.Content>
            <Modal.Header closeButton>
              <Modal.Title>{label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body text goes here.</Modal.Body>
            <Modal.Footer>
              <Button tone="secondary" onClick={toggle}>
                Close
              </Button>
              <Button>Save changes</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ModalStory>
    );
  };
};

export const Small = makeSized("sm", "Small modal");
export const Large = makeSized("lg", "Large modal");
export const ExtraLarge = makeSized("xl", "Extra large modal");

export function Fullscreen() {
  const { open, toggle } = useModal();

  return (
    <ModalStory open={open} toggle={toggle}>
      <Modal fullscreen open={open} onHide={toggle}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Fullscreen Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body text goes here.</Modal.Body>
          <Modal.Footer>
            <Button tone="secondary" onClick={toggle}>
              Close
            </Button>
            <Button>Save changes</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ModalStory>
  );
}
