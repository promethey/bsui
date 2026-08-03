// @ts-nocheck
import { Progress, Prime } from "components";

export default {
  title: "Components/Progress",
  component: Progress,
  subcomponents: { "Progress.Bar": Progress.Bar },
  parameters: {
    docs: {
      description: {
        component: "Visual indicator of progress and completion state",
      },
    },
  },
};

function Template(args) {
  return <Progress {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [<Progress.Bar now={25} />],
};

export function Examples() {
  const examples = [0, 25, 50, 75, 100];

  return (
    <>
      {examples.map((now, index) => (
        <>
          <Progress mt={index !== 0 ? 3 : 0}>
            <Progress.Bar now={now} />
          </Progress>
        </>
      ))}
    </>
  );
}

export function Labels() {
  const examples = [0, 25, 50, 75, 100];

  return (
    <>
      {examples.map((now, index) => (
        <>
          <Progress mt={index !== 0 ? 3 : 0}>
            <Progress.Bar now={now} fw="bolder" displayedPercent />
          </Progress>
        </>
      ))}
    </>
  );
}

export function Heights() {
  return (
    <>
      <Progress style={{ height: "1px" }}>
        <Progress.Bar now={30} />
      </Progress>
      <Prime my={3} />
      <Progress style={{ height: "20px" }}>
        <Progress.Bar now={30} />
      </Progress>
    </>
  );
}

export function Backgrounds() {
  const examples = [0, 25, 50, 75, 100];

  const bgColors = [null, "success", "info", "warning", "danger"];

  return (
    <>
      {examples.map((now, index) => (
        <>
          <Progress>
            <Progress.Bar bg={bgColors[index]} now={now} />
          </Progress>
        </>
      ))}
    </>
  );
}

export const MultipleBars = Template.bind({});
MultipleBars.args = {
  children: [
    <Progress.Bar now={15} />,
    <Progress.Bar bg="success" now={30} />,
    <Progress.Bar bg="info" now={20} />,
  ],
};
MultipleBars.storyName = "Multiple bars";

export function Striped() {
  const examples = [0, 25, 50, 75, 100];

  const bgColors = [null, "success", "info", "warning", "danger"];

  return (
    <>
      {examples.map((now, index) => (
        <>
          <Progress mt={index !== 0 ? 3 : 0}>
            <Progress.Bar bg={bgColors[index]} now={now} striped />
          </Progress>
        </>
      ))}
    </>
  );
}

export function AnimatedStripes() {
  const examples = [0, 25, 50, 75, 100];

  const bgColors = [null, "success", "info", "warning", "danger"];

  return (
    <>
      {examples.map((now, index) => (
        <>
          <Progress mt={index !== 0 ? 3 : 0}>
            <Progress.Bar bg={bgColors[index]} now={now} striped animated />
          </Progress>
        </>
      ))}
    </>
  );
}
AnimatedStripes.storyName = "Animated stripes";
