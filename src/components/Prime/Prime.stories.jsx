import { Prime, Button } from "components";

export default {
  title: "Components/Prime",
  component: Prime,
  parameters: {
    docs: {
      description: {
        component:
          "Main and basic component for Bootstrap-UI. This component helps provide classname functionality for other components",
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
      p={2}
      py={4}
      rounded="pill"
      shadow="lg">
      Prime example
    </Prime>
  );
}

export function Width() {
  /**
   * @typedef {25|50|75|100} WidthValues
   * @type {Array<WidthValues>}
   */
  const examples = [25, 50, 75, 100];
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
  /**
   * @typedef {25|50|75|100} HeightValues
   * @type {Array<HeightValues>}
   */
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

export function Visibility() {
  return (
    <>
      <Prime p={2} bg="light" border>
        Visible
      </Prime>
      <Prime p={2} bg="light" border>
        Invisible
      </Prime>
    </>
  );
}

export function Shadows() {
  /**
   * @typedef {"none"|"sm"|true|"lg"} ShadowValues
   * @type {Array<ShadowValues>}
   */
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
  const examples = ["Start", "Center", "End", "Stretch", "Baseline"];

  return (
    <Prime d="flex" bg="info" style={{ width: "350px", height: "350px" }}>
      {examples.map((value) => (
        <Prime
          flex={{ xs: { alignSelf: value.toLowerCase() } }}
          bg="light"
          text={{ color: "primary", align: "center" }}
          border={{ color: "primary" }}
          style={{ width: "70px", minHeight: "70px" }}>
          {value}
        </Prime>
      ))}
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
  return (
    <Prime
      d="flex"
      bg={{ color: "secondary", opacity: 50 }}
      style={{ width: "600px" }}>
      {[
        Array(3)
          .keys()
          .map((item) => (
            <Prime
              flex={{ xs: { order: 2 - item } }}
              bg={{ color: "primary", opacity: 75 }}
              text={{ color: "light", align: "center" }}
              p={3}
              m={1}>
              Flex item {item}
            </Prime>
          )),
      ]}
    </Prime>
  );
}
FlexOrder.storyName = "Flex order";

export function FlexAlignContent() {
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
  const examples = [
    { bgColor: "primary", textColor: "white" },
    { bgColor: "secondary", textColor: "white" },
    { bgColor: "success", textColor: "white" },
    { bgColor: "danger", textColor: "white" },
    { bgColor: "warning", textColor: "dark" },
    { bgColor: "info", textColor: "dark" },
    { bgColor: "light", textColor: "dark" },
    { bgColor: "dark", textColor: "white" },
    { bgColor: "body", textColor: "dark" },
    { bgColor: "white", textColor: "dark" },
    { bgColor: "transparent", textColor: "dark" },
  ];

  return (
    <>
      {examples.map(({ bgColor, textColor }) => (
        <Prime bg={bgColor} text={textColor} p={3} m={[0, 0, 2, 0]}>
          .bg-
          {bgColor}
        </Prime>
      ))}
    </>
  );
}
BackgroundColors.storyName = "Background colors";

export function BackgroundGradients() {
  const examples = [
    { bgColor: "primary", textColor: "white" },
    { bgColor: "secondary", textColor: "white" },
    { bgColor: "success", textColor: "white" },
    { bgColor: "danger", textColor: "white" },
    { bgColor: "warning", textColor: "dark" },
    { bgColor: "info", textColor: "dark" },
    { bgColor: "light", textColor: "dark" },
    { bgColor: "dark", textColor: "white" },
  ];

  return (
    <>
      {examples.map(({ bgColor, textColor }) => (
        <Prime
          bg={{ color: bgColor, gradient: true }}
          text={textColor}
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
  /**
   * @typedef {undefined|75|50|25|10} OpacityValues
   * @type {Array<OpacityValues>}
   */
  const examples = [undefined, 75, 50, 25, 10];

  return (
    <>
      {examples.map((opacity) => (
        <Prime
          p={2}
          bg={{ color: "primary", opacity }}
          text={opacity >= 10 && opacity <= 50 ? "dark" : "white"}>
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
  const examples = [{ top: 0 }, { end: 0 }, { bottom: 0 }, { start: 0 }];

  return (
    <Prime d="flex">
      {examples.map((border) => (
        <Prime
          m={[0, 3, 0, 0]}
          bg="light"
          border={{ color: "info", width: 2, ...border }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderSubtractive.storyName = "Border subtractive";

export function BorderColors() {
  const colors = [
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
      {colors.map((bColor) => (
        <Prime
          me={3}
          bg="light"
          border={{ color: bColor }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderColors.storyName = "Border colors";

export function BorderWidth() {
  const examples = [1, 2, 3, 4, 5];

  return (
    <Prime d="flex">
      {examples.map((bWidth) => (
        <Prime
          me={3}
          bg="light"
          border={{ width: bWidth }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Prime>
  );
}
BorderWidth.storyName = "Border width";

export function BorderRadius() {
  /**
   * @typedef {true|"top"|"end"|"bottom"|"start"|"circle"|"pill"} RoundedValues
   * @type {Array<RoundedValues>}
   */
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
  /**
   * @typedef {0|1|2|3} RoundedValues
   * @type {Array<RoundedValues>}
   */
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
  const examples = [
    { text: "primary", bg: null },
    { text: "secondary", bg: null },
    { text: "success", bg: null },
    { text: "danger", bg: null },
    { text: "warning", bg: "dark" },
    { text: "info", bg: "dark" },
    { text: "light", bg: "dark" },
    { text: "dark", bg: null },
    { text: "body", bg: null },
    { text: "muted", bg: null },
    { text: "white", bg: "dark" },
    { text: "black-50", bg: null },
    { text: "white-50", bg: "dark" },
  ];

  return (
    <>
      {examples.map(({ text, bg }) => (
        <Prime text={text} bg={bg} mb={3}>
          .text-
          {text}
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
      <Prime float={{ md: "start" }}>
        Float start on viewports sized MD (medium) or wider
      </Prime>
      <br />
      <Prime float={{ lg: "start" }}>
        Float start on viewports sized LG (large) or wider
      </Prime>
      <br />
      <Prime float={{ xl: "start" }}>
        Float start on viewports sized XL (extra-large) or wider
      </Prime>
      <br />
      <Prime float={{ xxl: "start" }}>
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
  const examples = [
    {
      top: 0,
      end: null,
      bottom: null,
      start: 0,
    },
    {
      top: 0,
      end: 0,
      bottom: null,
      start: null,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 50,
    },
    {
      top: null,
      end: 50,
      bottom: 50,
      start: null,
    },
    {
      top: null,
      end: null,
      bottom: 0,
      start: 0,
    },
    {
      top: null,
      end: 0,
      bottom: 0,
      start: null,
    },
  ];

  return (
    <Prime
      pos="relative"
      bg="light"
      border
      rounded={3}
      style={{ height: "200px" }}>
      {examples.map(({ top, end, bottom, start }) => (
        <Prime
          style={{ width: "2rem", height: "2rem" }}
          pos="absolute"
          top={top}
          end={end}
          bottom={bottom}
          start={start}
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
  const examples = [
    {
      top: 0,
      end: null,
      bottom: null,
      start: 0,
    },
    {
      top: 0,
      end: null,
      bottom: null,
      start: 50,
    },
    {
      top: 0,
      end: null,
      bottom: null,
      start: 100,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 0,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 50,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 100,
    },
    {
      top: 100,
      end: null,
      bottom: null,
      start: 0,
    },
    {
      top: 100,
      end: null,
      bottom: null,
      start: 50,
    },
    {
      top: 100,
      end: null,
      bottom: null,
      start: 100,
    },
  ];

  return (
    <Prime
      pos="relative"
      m={5}
      bg="light"
      border
      rounded={3}
      style={{ height: "200px" }}>
      {examples.map(({ top, end, bottom, start }) => (
        <Prime
          style={{ width: "2rem", height: "2rem" }}
          pos="absolute"
          top={top}
          end={end}
          bottom={bottom}
          start={start}
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

export function CenterElements2() {
  const examples = [
    {
      top: 0,
      end: null,
      bottom: null,
      start: 0,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: false,
    },
    {
      top: 0,
      end: null,
      bottom: null,
      start: 50,
      translateMiddle: false,
      translateMiddleX: true,
      translateMiddleY: false,
    },
    {
      top: 0,
      end: 0,
      bottom: null,
      start: null,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: false,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 0,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: true,
    },
    {
      top: 50,
      end: null,
      bottom: null,
      start: 50,
      translateMiddle: true,
      translateMiddleX: false,
      translateMiddleY: false,
    },
    {
      top: 50,
      end: 0,
      bottom: null,
      start: null,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: true,
    },
    {
      top: null,
      end: null,
      bottom: 0,
      start: 0,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: false,
    },
    {
      top: null,
      end: null,
      bottom: 0,
      start: 50,
      translateMiddle: false,
      translateMiddleX: true,
      translateMiddleY: false,
    },
    {
      top: null,
      end: 0,
      bottom: 0,
      start: null,
      translateMiddle: false,
      translateMiddleX: false,
      translateMiddleY: false,
    },
  ];

  return (
    <Prime
      pos="relative"
      bg="light"
      border
      rounded={3}
      style={{ height: "200px" }}>
      {examples.map(
        ({
          top,
          end,
          bottom,
          start,
          translateMiddle,
          translateMiddleX,
          translateMiddleY,
        }) => (
          <Prime
            style={{ width: "2rem", height: "2rem" }}
            pos="absolute"
            top={top}
            end={end}
            bottom={bottom}
            start={start}
            bg="dark"
            border
            rounded={3}
            translateMiddle={translateMiddle}
            translateMiddleX={translateMiddleX}
            translateMiddleY={translateMiddleY}
          />
        ),
      )}
    </Prime>
  );
}
CenterElements2.storyName = "Center elements 2";

export function ClearFix() {
  return (
    <Prime bg="light" p={3} clearfix>
      <Button theme="secondary" float="start">
        Example Button floated left
      </Button>
      <Button theme="secondary" float="end">
        Example Button floated right
      </Button>
    </Prime>
  );
}
