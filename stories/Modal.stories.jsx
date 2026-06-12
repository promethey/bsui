import {
  Modal,
  Button,
  CloseButton,
  Container,
  Row,
  Col,
} from "../src/components";
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

export function Default() {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = (event) => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <Button onClick={handleExpanded}>
        {expanded ? "Close" : "Open"} modal
      </Button>
      <Modal open={expanded} onHide={handleExpanded}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button tone="secondary" onClick={handleExpanded}>
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
  return (
    <Modal scrollable d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga, quae dolorem animi id facilis! Quidem numquam
            quaerat impedit labore sit qui nulla, accusamus laboriosam corporis
            perferendis esse at beatae neque. Autem maxime repellat accusamus?
            Ipsa cupiditate excepturi at mollitia beatae amet aliquid aperiam
            in! Praesentium, blanditiis cupiditate minima obcaecati repellendus
            nulla. Aspernatur at laboriosam et placeat incidunt vitae, aliquid
            nostrum! Quibusdam pariatur accusantium adipisci. Praesentium
            facilis ratione id eos asperiores magnam deleniti suscipit inventore
            sed autem vitae molestiae ipsam, earum esse pariatur doloribus ab
            magni sint eaque corporis! Sequi animi quo consequuntur velit
            doloribus laboriosam quibusdam soluta dolores ex debitis. Nisi,
            doloremque. Quaerat nam voluptas ratione eius repellendus ea porro
            consequatur ullam rerum fugit dicta obcaecati, quam explicabo!
            Nostrum dignissimos reiciendis, vel perspiciatis ipsam veritatis
            modi recusandae, dolorem a dolorum nobis id? Iste cum sequi ea
            itaque autem modi iusto repellendus doloribus at? Et itaque
            possimus, consequuntur, commodi voluptatem, maxime sequi doloribus
            dolores vel porro consequatur facilis voluptatum placeat
            perspiciatis accusamus magni! Perferendis omnis inventore veniam
            neque vitae. Voluptate soluta qui saepe esse odio aliquid nisi unde
            optio dolorum perferendis! Et illum eius perferendis iure, neque
            voluptate asperiores blanditiis alias, nesciunt quaerat impedit
            possimus at veniam hic ipsa doloribus tenetur. Sint consequatur
            distinctio laudantium illo. Distinctio aspernatur cupiditate unde
            natus, nemo debitis culpa velit? Quia quasi minus labore laboriosam
            eius deserunt sequi laborum, sapiente nobis ipsum commodi iure autem
            veritatis necessitatibus quis molestias voluptatem praesentium
            obcaecati. Illo magnam tempora quae inventore quibusdam eum cumque
            totam placeat!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export function VerticallyCentered() {
  return (
    <Modal centered d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
VerticallyCentered.storyName = "Vertically centered";

export function Grid() {
  return (
    <Modal d="block">
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
              <Col md={3}>.col-md-4</Col>
              <Col md={2} ms="auto">
                .col-md-4 .ms-auto
              </Col>
            </Row>
            <Row>
              <Col md={6} ms="auto">
                .col-md-6 .ms-auto
              </Col>
            </Row>
            <Row>
              <Col sm={9}>
                Level 1: .col-sm-9
                <Row>
                  <Col xs={8} sm={6}>
                    Level 2: .col-8 .col-sm-6
                  </Col>
                  <Col xs={4} sm={6}>
                    Level 2: .col-4 .col-sm-6
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export function Small() {
  return (
    <Modal size="sm" d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export function Large() {
  return (
    <Modal size="lg" d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export function ExtraLarge() {
  return (
    <Modal size="xl" d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
ExtraLarge.storyName = "Extra large";

export function Fullscreen() {
  return (
    <Modal fullscreen d="block">
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button tone="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
