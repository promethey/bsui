// @ts-nocheck
import { Prime, Button } from "components";

export default {
  title: "Components/Core/Prime",
  component: Prime,
  parameters: {
    docs: {
      description: {
        component: "Utility-based component for layout, spacing and styling",
      },
    },
  },
};

export function Example() {
  return (
    <Prime
      bg={{ color: "primary", gradient: true }}
      text={{ transform: "uppercase", align: "center", color: "light" }}
      fs={4}
      fw="bolder"
      monospace
      p={{ xs: 2 }}
      py={4}
      rounded="pill"
      shadow="lg">
      Prime example
    </Prime>
  );
}

export function PricingCard() {
  return (
    <Prime
      shadow="lg"
      border={{ color: "primary" }}
      overflow="hidden"
      rounded={3}
      style={{ width: "300px" }}>
      <Prime
        as="h4"
        py={3}
        bg="primary"
        text={{ color: "light", align: "center" }}>
        Enterprise
      </Prime>
      <Prime
        d="flex"
        flex={{
          xs: {
            dir: "column",
            justify: "center",
            align: "center",
          },
        }}
        p={3}>
        <Prime d="flex" fs={1} lh={1}>
          <Prime fw="bolder">$29</Prime>
          <Prime fw="light" text="muted">
            /mo
          </Prime>
        </Prime>
        <Prime
          d="flex"
          flex={{
            xs: {
              dir: "row",
            },
          }}
          py={4}
          text={{ align: "center" }}>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
        </Prime>
        <Button w={100} size="lg">
          Contact us
        </Button>
      </Prime>
    </Prime>
  );
}
PricingCard.storyName = "Pricing card";

export function Width() {
  /** @type {Array<25|50|75|100>} */
  const examples = [25, 50, 75, 100];

  /** @type {Array<"danger"|"warning"|"info"|"success">} */
  const bgBorderColors = ["danger", "warning", "info", "success"];

  return (
    <>
      {examples.map((width, index) => (
        <Prime
          w={width}
          mb={2}
          p={2}
          bg={{ color: bgBorderColors[index], opacity: 75 }}
          text={{ color: "white", align: "center" }}
          border={{ color: bgBorderColors[index], width: 1 }}
          rounded={2}>
          {width}%
        </Prime>
      ))}
    </>
  );
}

export function MaxWidth() {
  return (
    <Prime bg={{ color: "info", opacity: 25 }} style={{ height: "200px" }}>
      <Prime mw={100} p={3} bg="info" text="dark" style={{ height: "100px" }}>
        Max-width 100%
      </Prime>
    </Prime>
  );
}
MaxWidth.storyName = "Max width";

export function Height() {
  /** @type {Array<25|50|75|100>} */
  const examples = [25, 50, 75, 100];

  return (
    <Prime d="flex" style={{ height: "200px" }}>
      {examples.map((height) => (
        <Prime
          key={height}
          w={25}
          h={height}
          me={2}
          p={[1, 2]}
          bg="light"
          text={{ align: "center" }}
          border
          rounded>
          {height}%
        </Prime>
      ))}
    </Prime>
  );
}

export function MaxHeight() {
  return (
    <Prime bg={{ color: "info", opacity: 25 }} style={{ height: "200px" }}>
      <Prime
        mh={100}
        p={3}
        bg="info"
        style={{ width: "150px", height: "200px" }}>
        Max-height 100%
      </Prime>
    </Prime>
  );
}
MaxHeight.storyName = "Max height";

export function Shadows() {
  /** @type {Array<"none"|"sm"|true|"lg">} */
  const values = ["none", "sm", true, "lg"];
  const text = ["No shadow", "Small shadow", "Regular shadow", "Larger shadow"];

  return (
    <>
      {values.map((shadowValue, index) => (
        <Prime bg="body" text="dark" p={3} mb={5} shadow={shadowValue} rounded>
          {text[index]}
        </Prime>
      ))}
    </>
  );
}

export function FlexCenter() {
  return (
    <Prime
      d="flex"
      flex="center"
      bg="primary"
      style={{ width: "200px", height: "200px" }}>
      <Prime
        bg="light"
        text="primary"
        border
        style={{ width: "50px", height: "50px" }}
      />
    </Prime>
  );
}
FlexCenter.storyName = "Flex center";

export function FlexResponsive() {
  return (
    <Prime
      d="flex"
      flex={{ xs: "start", sm: "end", md: "center" }}
      bg="primary"
      style={{ width: "200px", height: "200px" }}>
      <Prime
        bg="light"
        text="primary"
        border
        style={{ width: "50px", height: "50px" }}
      />
    </Prime>
  );
}
FlexResponsive.storyName = "Flex responsive";

export function FlexAlignSelf() {
  /** @type {Array<"start"|"end"|"center"|"baseline"|"stretch">} */
  const examples = ["start", "center", "end", "stretch", "baseline"];

  return (
    <Prime d="flex" bg="info" style={{ width: "350px", height: "350px" }}>
      {examples.map((value) => {
        return (
          <Prime
            flex={{ xs: { alignSelf: value } }}
            bg="light"
            text={{ color: "primary", align: "center" }}
            border={{ color: "primary" }}
            style={{ width: "70px", minHeight: "70px" }}>
            {value}
          </Prime>
        );
      })}
    </Prime>
  );
}
FlexAlignSelf.storyName = "Flex align self";

export function FlexFill() {
  return (
    <Prime d="flex" bg="light" style={{ width: "400px", height: "150px" }}>
      <Prime
        flex={{ xs: { fill: true } }}
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item with a lot of content
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 50 }}
        text={{ color: "primary", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 25 }}
        text={{ color: "primary", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
    </Prime>
  );
}
FlexFill.storyName = "Flex fill";

export function FlexGrow() {
  return (
    <Prime d="flex" bg="light" style={{ width: "400px", height: "150px" }}>
      <Prime
        flex={{ xs: { grow: 1 } }}
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 50 }}
        text={{ color: "primary", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 25 }}
        text={{ color: "primary", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Third flex item
      </Prime>
    </Prime>
  );
}
FlexGrow.storyName = "Flex grow";

export function FlexShrink() {
  return (
    <Prime d="flex" bg="light" style={{ width: "400px", height: "150px" }}>
      <Prime
        w={100}
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
      <Prime
        flex={{ xs: { shrink: 1 } }}
        bg={{ color: "primary", opacity: 25 }}
        text={{ color: "primary", align: "center" }}
        style={{ width: "70px", minHeight: "70px" }}>
        Flex item
      </Prime>
    </Prime>
  );
}
FlexShrink.storyName = "Flex shrink";

export function FlexAutoMargins() {
  return (
    <Prime
      d="flex"
      bg={{ color: "secondary", opacity: 25 }}
      style={{ width: "400px" }}>
      <Prime
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        p={1}
        me={1}>
        Flex item
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        p={1}
        me="auto">
        Flex item
      </Prime>
      <Prime
        bg={{ color: "primary", opacity: 75 }}
        text={{ color: "light", align: "center" }}
        p={1}>
        Flex item
      </Prime>
    </Prime>
  );
}
FlexAutoMargins.storyName = "Flex auto margins";

export function FlexNoWrap() {
  return (
    <Prime
      d="flex"
      flex={{ xs: { nowrap: true } }}
      bg={{ color: "secondary", opacity: 50 }}
      style={{ width: "200px" }}>
      {[
        Array(10)
          .keys()
          .map((item) => (
            <Prime
              bg={{ color: "primary", opacity: 75 }}
              text={{ color: "light", align: "center" }}
              m={1}
              p={3}>
              Flex item
            </Prime>
          )),
      ]}
    </Prime>
  );
}
FlexNoWrap.storyName = "Flex nowrap";

export function FlexWrap() {
  return (
    <Prime
      d="flex"
      flex={{ xs: { wrap: true } }}
      bg={{ color: "secondary", opacity: 50 }}
      style={{ width: "500px" }}>
      {[
        Array(10)
          .keys()
          .map((item) => (
            <Prime
              bg={{ color: "primary", opacity: 75 }}
              text={{ color: "light", align: "center" }}
              m={1}
              p={3}>
              Flex item
            </Prime>
          )),
      ]}
    </Prime>
  );
}
FlexWrap.storyName = "Flex wrap";

export function FlexWrapReverse() {
  return (
    <Prime
      d="flex"
      flex={{ xs: { wrapReverse: true } }}
      bg={{ color: "secondary", opacity: 50 }}
      style={{ width: "500px" }}>
      {[
        Array(10)
          .keys()
          .map((item) => (
            <Prime
              bg={{ color: "primary", opacity: 75 }}
              text={{ color: "light", align: "center" }}
              m={1}
              p={3}>
              Flex item
            </Prime>
          )),
      ]}
    </Prime>
  );
}
FlexWrapReverse.storyName = "Flex wrap reverse";

export function FlexOrder() {
  /** @type {Array<0|1|2|3|4|5|6|"first"|"last">} */
  const orders = [0, 1, 2, 3, 4, 5, 6, "first", "last"];

  return (
    <>
      {orders.map((order) => (
        <Prime
          d="flex"
          bg={{ color: "secondary", opacity: 50 }}
          style={{ width: "600px" }}>
          {[
            Array(3)
              .keys()
              .map((item) => (
                <Prime
                  flex={{ xs: { order: order } }}
                  bg={{ color: "primary", opacity: 75 }}
                  text={{ color: "light", align: "center" }}
                  p={3}
                  m={1}>
                  Flex item {item}
                </Prime>
              )),
          ]}
        </Prime>
      ))}
    </>
  );
}
FlexOrder.storyName = "Flex order";

export function FlexAlignContent() {
  /** @type {Array<"start"|"end"|"center"|"between"|"around"|"stretch">} */
  const examples = ["start", "end", "center", "between", "around", "stretch"];

  return (
    <Prime>
      {examples.map((value) => (
        <Prime
          d="flex"
          flex={{ xs: { alignContent: value, wrap: true } }}
          bg={{ color: "secondary", opacity: 25 }}
          style={{ width: "600px", height: "200px" }}
          mb={3}>
          {[
            [0, 1, 2, 3, 4, 5].map(() => (
              <Prime
                bg={{ color: "primary", opacity: 75 }}
                text={{ color: "light", align: "center" }}
                p={3}
                m={1}>
                Flex item
              </Prime>
            )),
          ]}
        </Prime>
      ))}
    </Prime>
  );
}
FlexAlignContent.storyName = "Flex align content";

export function BackgroundColors() {
  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent">} */
  const bgColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "body",
    "white",
    "transparent",
  ];

  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset">} */
  const textColors = [
    "white",
    "white",
    "white",
    "white",
    "dark",
    "dark",
    "dark",
    "white",
    "dark",
    "dark",
    "dark",
  ];

  return (
    <>
      {bgColors.map((bgColor, index) => (
        <Prime bg={bgColor} text={textColors[index]} p={3} mb={2}>
          .bg-
          {bgColor}
        </Prime>
      ))}
    </>
  );
}
BackgroundColors.storyName = "Background colors";

export function BackgroundGradients() {
  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent">} */
  const bgColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "body",
    "white",
    "transparent",
  ];

  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset">} */
  const textColors = [
    "white",
    "white",
    "white",
    "white",
    "dark",
    "dark",
    "dark",
    "white",
    "dark",
    "dark",
    "dark",
  ];

  return (
    <>
      {bgColors.map((bgColor, index) => (
        <Prime
          bg={{ color: bgColor, gradient: true }}
          text={textColors[index]}
          p={3}
          m={[0, 0, 2, 0]}>
          .bg-
          {bgColor}
          .bg-gradient
        </Prime>
      ))}
    </>
  );
}
BackgroundGradients.storyName = "Background gradients";

export function BackgroundOpacity() {
  /** @type {Array<undefined|75|50|25|10>} */
  const examples = [undefined, 75, 50, 25, 10];

  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset">} */
  const textColors = ["white", "white", "dark", "dark", "dark"];

  return (
    <>
      {examples.map((opacity, index) => (
        <Prime
          p={2}
          bg={{ color: "primary", opacity }}
          text={textColors[index]}>
          {opacity === undefined
            ? "This is default success background"
            : `This is ${opacity}% opacity success background`}
        </Prime>
      ))}
    </>
  );
}
BackgroundOpacity.storyName = "Background opacity";

export function BorderAdditives() {
  /** @type {Array<true|"top"|"end"|"bottom"|"start">} */
  const aspects = [true, "top", "end", "bottom", "start"];

  return (
    <Prime d="flex">
      {aspects.map((aspect) => (
        <Prime
          me={3}
          bg={{ color: "info", opacity: 10 }}
          border={aspect}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderAdditives.storyName = "Border additives";

export function BorderSubtractive() {
  return (
    <Prime d="flex">
      <Prime
        me={3}
        bg="light"
        border={{ color: "info", width: 2, top: 0 }}
        style={{ width: "5rem", height: "5rem" }}
      />
      <Prime
        me={3}
        bg="light"
        border={{ color: "info", width: 2, end: 0 }}
        style={{ width: "5rem", height: "5rem" }}
      />
      <Prime
        me={3}
        bg="light"
        border={{ color: "info", width: 2, bottom: 0 }}
        style={{ width: "5rem", height: "5rem" }}
      />
      <Prime
        me={3}
        bg="light"
        border={{ color: "info", width: 2, start: 0 }}
        style={{ width: "5rem", height: "5rem" }}
      />
    </Prime>
  );
}
BorderSubtractive.storyName = "Border subtractive";

export function BorderColors() {
  /** @type {Array<"info"|"light"|"primary"|"secondary"|"success"|"danger"|"warning"|"dark"|"white">} */
  const borderColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "white",
  ];

  return (
    <Prime d="flex">
      {borderColors.map((borderColor) => (
        <Prime
          me={3}
          bg="light"
          border={{ color: borderColor }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderColors.storyName = "Border colors";

export function BorderWidth() {
  /** @type {Array<1|2|3|4|5>} */
  const borderWidth = [1, 2, 3, 4, 5];

  return (
    <Prime d="flex">
      {borderWidth.map((width) => (
        <Prime
          me={3}
          bg="light"
          border={{ width: width }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderWidth.storyName = "Border width";

export function BorderRadius() {
  /** @type {Array<true|"top"|"end"|"bottom"|"start"|"circle"|"pill">}*/
  const examples = [true, "top", "end", "bottom", "start", "circle", "pill"];

  return (
    <Prime d="flex">
      {examples.map((radius) => (
        <Prime
          me={3}
          bg="secondary"
          rounded={radius}
          text="light"
          style={{
            width: radius === "pill" ? "10rem" : "5rem",
            height: "5rem",
          }}
        />
      ))}
    </Prime>
  );
}
BorderRadius.storyName = "Border radius";

export function BorderSizes() {
  /** @type {Array<0|1|2|3>} */
  const examples = [0, 1, 2, 3];

  return (
    <Prime d="flex">
      {examples.map((size) => (
        <Prime
          me={3}
          bg="secondary"
          rounded={size}
          text="light"
          style={{
            width: "5rem",
            height: "5rem",
          }}
        />
      ))}
    </Prime>
  );
}
BorderSizes.storyName = "Border sizes";

export function TextColors() {
  /** @type {Array<undefined|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent">} */
  const bgColors = [
    undefined,
    undefined,
    undefined,
    undefined,
    "dark",
    "dark",
    "dark",
    undefined,
    undefined,
    undefined,
    "dark",
    undefined,
    "dark",
  ];

  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset">} */
  const textColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "body",
    "muted",
    "white",
    "black-50",
    "white-50",
    "reset",
  ];

  return (
    <>
      {textColors.map((color, index) => (
        <Prime text={color} bg={bgColors[index]} mb={3}>
          .text-
          {color}
        </Prime>
      ))}
    </>
  );
}
TextColors.storyName = "Text colors";

export function Display() {
  return (
    <>
      <Prime d="inline" p={2} me={2} bg="primary">
        d=inline
      </Prime>
      <Prime d="inline" p={2} bg="dark" text="white">
        display=inline
      </Prime>
      <Prime py={2} />
      <Prime d="block" p={2} bg="primary" mb={2}>
        d=block
      </Prime>
      <Prime d="block" p={2} bg="dark" text="white" mb={2}>
        display=block
      </Prime>
      <Prime d={{ xs: "inline-flex", md: "flex" }} p={2} bg="dark" text="white">
        xs: inline-flex
        {", "}
        md: flex
      </Prime>
    </>
  );
}

export function Float() {
  /** @type {Array<"start"|"end"|"none">} */
  const examples = ["start", "end", "none"];

  return (
    <Prime>
      {examples.map((float) => (
        <>
          <Prime float={float}>
            {float === "none" ? "Don`t float" : `Float ${float}`} on all
            viewport sizes
          </Prime>
          <br />
        </>
      ))}
    </Prime>
  );
}

export function FloatResponsive() {
  return (
    <>
      <Prime float={{ sm: "start" }}>
        Float start on viewports sized SM (small) or wider
      </Prime>
      <br />
      <Prime float={{ md: "end" }}>
        Float start on viewports sized MD (medium) or wider
      </Prime>
      <br />
      <Prime float={{ lg: "none" }}>
        Float start on viewports sized LG (large) or wider
      </Prime>
      <br />
      <Prime float={{ xl: "end" }}>
        Float start on viewports sized XL (extra-large) or wider
      </Prime>
      <br />
      <Prime float={{ xxl: "none" }}>
        Float start on viewports sized XXL (extra-large) or wider
      </Prime>
    </>
  );
}
FloatResponsive.storyName = "Float responsive";

export function TextSelections() {
  return (
    <>
      <Prime text={{ select: "all" }} mb={2}>
        This paragraph will be entirely selected when clicked by the user.
      </Prime>
      <Prime text={{ select: "auto" }} mb={2}>
        This paragraph has default select behavior.
      </Prime>
      <Prime text={{ select: "none" }}>
        This paragraph will not be selectable when clicked by the user.
      </Prime>
    </>
  );
}
TextSelections.storyName = "Text selections";

export function Opacity() {
  /** @type {Array<100|75|50|25>} */
  const values = [100, 75, 50, 25];

  return (
    <>
      {values.map((opacity) => (
        <Prime bg="primary" text="white" p={3} opacity={opacity}>
          {opacity}%
        </Prime>
      ))}
    </>
  );
}

export function Overflow() {
  return (
    <Prime d="flex">
      <Prime
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="auto"
        bg="light">
        This is an example of using .overflow-auto on an element with set width
        and height dimensions. By design, this content will vertically scroll.
      </Prime>
      <Prime
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="hidden"
        bg="light">
        This is an example of using .overflow-hidden on an element with set
        width and height dimensions.
      </Prime>
      <Prime
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="visible"
        bg="light">
        This is an example of using .overflow-visible on an element with set
        width and height dimensions.
      </Prime>
      <Prime
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="scroll"
        bg="light">
        This is an example of using .overflow-scroll on an element with set
        width and height dimensions.
      </Prime>
    </Prime>
  );
}

export function ArrangeElements() {
  /** @type {Array<0|50|undefined>} */
  const tops = [0, 0, 50, undefined, undefined, undefined];

  /** @type {Array<0|50|undefined>} */
  const ends = [undefined, 0, undefined, 50, undefined, 0];

  /** @type {Array<0|50|undefined>} */
  const bottoms = [undefined, undefined, undefined, 50, 0, 0];

  /** @type {Array<0|50|undefined>} */
  const starts = [0, undefined, 50, undefined, 0, undefined];

  return (
    <Prime
      pos="relative"
      bg="light"
      border
      rounded={3}
      style={{ height: "200px" }}>
      {tops.map((top, index) => (
        <Prime
          style={{ width: "2rem", height: "2rem" }}
          pos="absolute"
          top={top}
          end={ends[index]}
          bottom={bottoms[index]}
          start={starts[index]}
          bg="dark"
          rounded={3}
        />
      ))}
    </Prime>
  );
}
ArrangeElements.storyName = "Arrange elements";

export function PositionProgress() {
  const buttons = [
    { theme: "primary", start: 0 },
    { theme: "primary", start: 50 },
    { theme: "secondary", start: 100 },
  ];

  return (
    <Prime pos="relative" m={4}>
      <Prime d="flex" w={100}>
        <Prime
          w={50}
          bg={{ color: "primary", opacity: 75 }}
          style={{ height: "1px" }}
        />
        <Prime
          w={50}
          bg={{ color: "secondary", opacity: 25 }}
          style={{ height: "1px" }}
        />
      </Prime>
      {buttons.map(({ theme, start }, index) => (
        <Button
          theme={theme}
          size="sm"
          pos="absolute"
          translateMiddle
          top={0}
          start={start}
          rounded="pill"
          style={{ width: "2rem", height: "2rem" }}>
          {index + 1}
        </Button>
      ))}
    </Prime>
  );
}
PositionProgress.storyName = "Position progress";

export function CenterElements() {
  /** @type {Array<0|50|100|undefined>} */
  const tops = [0, 0, 0, 50, 50, 50, 100, 100, 100];

  /** @type {Array<0|50|100|undefined>} */
  const starts = [0, 50, 100, 0, 50, 100, 0, 50, 100];

  return (
    <Prime
      pos="relative"
      m={5}
      bg="light"
      border
      rounded={3}
      style={{ height: "200px" }}>
      {tops.map((top, index) => (
        <Prime
          style={{ width: "2rem", height: "2rem" }}
          pos="absolute"
          top={top}
          start={starts[index]}
          bg="dark"
          border
          rounded={3}
          translateMiddle
        />
      ))}
    </Prime>
  );
}
CenterElements.storyName = "Center elements";
