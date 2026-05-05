import { Progress, Prime } from "components";

export default {
  title: "Components/Progress",
  component: Progress,
  subcomponents: { "Progress.Bar": Progress.Bar },
  parameters: {
    docs: {
      description: {
        component: `Documentation and examples for using Bootstrap
        custom progress bars featuring support for stacked bars,
        animated backgrounds, and text labels.`,
      },
    },
  },
};

function Template(args) {
  return <Progress {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [<Progress.Bar now={25} max={100} />],
};

export function Examples() {
  const examples = [
    { now: 0, max: 100 },
    { now: 25, max: 100 },
    { now: 50, max: 100 },
    { now: 75, max: 100 },
    { now: 100, max: 100 },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar now={example.now} max={example.max} />
          </Progress>
          {index !== array.length && <Prime mb={3} />}
        </>
      ))}
    </>
  );
}

export function Labels() {
  const examples = [
    { now: 0, max: 100 },
    { now: 25, max: 100 },
    { now: 50, max: 100 },
    { now: 75, max: 100 },
    { now: 100, max: 100 },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              now={example.now}
              max={example.max}
              fw="bolder"
              displayedPercent
            />
          </Progress>
          {index !== array.length && <Prime my={3} />}
        </>
      ))}
    </>
  );
}

export function Heights() {
  return (
    <>
      <Progress style={{ height: "1px" }}>
        <Progress.Bar now={30} max={100} />
      </Progress>
      <Prime my={3} />
      <Progress style={{ height: "20px" }}>
        <Progress.Bar now={30} max={100} />
      </Progress>
    </>
  );
}

export function Backgrounds() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: "success" },
    { now: 50, max: 100, bgColor: "info" },
    { now: 75, max: 100, bgColor: "warning" },
    { now: 100, max: 100, bgColor: "danger" },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bg={example.bgColor}
              now={example.now}
              max={example.max}
            />
          </Progress>
          {index !== array.length && <Prime my={3} />}
        </>
      ))}
    </>
  );
}

export const MultipleBars = Template.bind({});
MultipleBars.args = {
  children: [
    <Progress.Bar now={15} max={100} />,
    <Progress.Bar bg="success" now={30} max={100} />,
    <Progress.Bar bg="info" now={20} max={100} />,
  ],
};
MultipleBars.storyName = "Multiple bars";

export function Striped() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: "success" },
    { now: 50, max: 100, bgColor: "info" },
    { now: 75, max: 100, bgColor: "warning" },
    { now: 100, max: 100, bgColor: "danger" },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bg={example.bgColor}
              now={example.now}
              max={example.max}
              striped
            />
          </Progress>
          {index !== array.length && <Prime my={3} />}
        </>
      ))}
    </>
  );
}

export function AnimatedStripes() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: "success" },
    { now: 50, max: 100, bgColor: "info" },
    { now: 75, max: 100, bgColor: "warning" },
    { now: 100, max: 100, bgColor: "danger" },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bg={example.bgColor}
              now={example.now}
              max={example.max}
              striped
              animated
            />
          </Progress>
          {index !== array.length && <Prime my={3} />}
        </>
      ))}
    </>
  );
}
AnimatedStripes.storyName = "Animated stripes";
