// @ts-nocheck
import { Card, Button } from "components";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    "Card.Group": Card.Group,
    "Card.Header": Card.Header,
    "Card.Image": Card.Img,
    "Card.Body": Card.Body,
    "Card.Title": Card.Title,
    "Card.Subtitle": Card.Subtitle,
    "Card.Text": Card.Text,
    "Card.Link": Card.Link,
    "Card.Footer": Card.Footer,
  },
  parameters: {
    docs: {
      description: {
        component: `Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.`,
      },
    },
  },
};

function Template(args) {
  return <Card {...args} />;
}

export function Default() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export function Body() {
  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}

export function TitleTextAndLinks() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle text="muted" mb={2}>
          Card subtitle
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Card.Link>Card link</Card.Link>
        <Card.Link>Another link</Card.Link>
      </Card.Body>
    </Card>
  );
}
TitleTextAndLinks.storyName = "Title, text and links";

// export const ListGroups = Template.bind({});
// ListGroups.args = {
//   children: [
//     <ListGroup isFlush>
//       <ListGroup.Item>An item</ListGroup.Item>
//       <ListGroup.Item>A second item</ListGroup.Item>
//       <ListGroup.Item>A third item</ListGroup.Item>
//     </ListGroup>,
//   ],
// };
// ListGroups.storyName = "List groups";

// export const ListGroupsAndHeader = Template.bind({});
// ListGroupsAndHeader.args = {
//   children: [
//     <Card.Header>Featured</Card.Header>,
//     <ListGroup isFlush>
//       <ListGroup.Item>An item</ListGroup.Item>
//       <ListGroup.Item>A second item</ListGroup.Item>
//       <ListGroup.Item>A third item</ListGroup.Item>
//     </ListGroup>,
//   ],
// };
// ListGroupsAndHeader.storyName = "List groups and Header";

// export const ListGroupsAndFooter = Template.bind({});
// ListGroupsAndFooter.args = {
//   children: [
//     <ListGroup isFlush>
//       <ListGroup.Item>An item</ListGroup.Item>
//       <ListGroup.Item>A second item</ListGroup.Item>
//       <ListGroup.Item>A third item</ListGroup.Item>
//     </ListGroup>,
//     <Card.Footer>Featured</Card.Footer>,
//   ],
// };
// ListGroupsAndFooter.storyName = "List groups and Footer";

// export const KitchenSink = Template.bind({});
// KitchenSink.args = {
//   children: [
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk
//         of the card&apos;s content.
//       </Card.Text>
//     </Card.Body>,
//     <ListGroup isFlush>
//       <ListGroup.Item>An item</ListGroup.Item>
//       <ListGroup.Item>A second item</ListGroup.Item>
//       <ListGroup.Item>A third item</ListGroup.Item>
//     </ListGroup>,
//     <Card.Body>
//       <Card.Link>Card link</Card.Link>
//       <Card.Link>Another link</Card.Link>
//     </Card.Body>,
//   ],
// };
// KitchenSink.storyName = "Kitchen sink";

export function Header() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export function CustomHeader() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header fw="bold" fs={3} bg="primary" text="light" lh={1} py={4}>
        Featured
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export const Quote = Template.bind({});
Quote.args = {
  style: null,
  children: [
    <Card.Header>Quote</Card.Header>,
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>,
  ],
};

export function TextCenter() {
  return (
    <Card text={{ align: "center" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
      <Card.Footer textColor="muted">2 days ago</Card.Footer>
    </Card>
  );
}
TextCenter.storyName = "Text center";

export function Width() {
  return (
    <>
      <Card w={75}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
      <Card w={50}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export function TextAlignment() {
  const aligns = [undefined, "center", "end"];

  return (
    <>
      {aligns.map((align) => (
        <Card text={{ align: align }} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button>Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
TextAlignment.storyName = "Text alignment";

export function Backgrounds() {
  const bgColors = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  const textColors = [
    "white",
    "white",
    "white",
    "white",
    "dark",
    "dark",
    "dark",
    "white",
  ];

  return (
    <>
      {bgColors.map((bgColor, index) => (
        <Card
          text={textColors[index]}
          bg={bgColor.toLowerCase()}
          mb={3}
          style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{bgColor} card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export function Borders() {
  const borderColors = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  const textColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    undefined,
    "dark",
  ];

  return (
    <>
      {borderColors.map((borderColor, index) => (
        <Card
          border={{ color: borderColor.toLowerCase() }}
          mb={3}
          style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body text={textColors[index]}>
            <Card.Title>{borderColor} card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export function MixinsUtilities() {
  return (
    <Card border={{ color: "success" }} mb={3} style={{ width: "18rem" }}>
      <Card.Header bg="transparent" border={{ color: "success", bottom: true }}>
        Header
      </Card.Header>
      <Card.Body text="success">
        <Card.Title>Success card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer bg="transparent" border={{ color: "success", top: true }}>
        Footer
      </Card.Footer>
    </Card>
  );
}
MixinsUtilities.storyName = "Mixins utilities";
