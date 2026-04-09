import React from "react";
import { bs } from "constants";
import { Box, Button } from "components";

export default {
  title: "Components/Box",
  component: Box,
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
    <>
      <Box bgColor="light" p={3} border>
        Box component
      </Box>
      <div className="my-3" />
      <Box
        d={bs.d.flex}
        bgColor={bs.bg.colors.light}
        p={3}
        border
        textColor={bs.text.colors.primary}>
        Box component
      </Box>
    </>
  );
}

export function Width() {
  const examples = [25, 50, 75, 100];
  const bgBorderColors = ["danger", "warning", "warning", "success"];

  return (
    <>
      {examples.map((width, index) => (
        <Box
          w={width}
          m={[0, 0, 2, 0]}
          p={2}
          bg={{ color: bgBorderColors[index], opacity: 75 }}
          text={{ color: 'white', align: 'center' }}
          border={{ color: bgBorderColors[index], width: 1 }}
          rounded
        >
          {width}%
        </Box>
      ))}
    </>
  );
}

export function MaxWidth() {
  return (
    <Box bg={{ color: 'info', opacity: 25 }} style={{ height: '200px' }}>
      <Box
        mw={100}
        p={3}
        bg="info"
        text="dark"
        style={{ height: "100px" }}
      >
        Max-width 100%
      </Box>
    </Box>
  );
}
MaxWidth.storyName = "Max width";

export function Height() {
  const examples = [25, 50, 75, 100];

  return (
    <Box d="flex" style={{ height: "200px" }}>
      {examples.map((height, index) => (
        <Box
          w={25}
          h={height}
          m={[0, 2, 0, 0]}
          p={[1, 2]}
          bg="light"
          text={{ align: 'center' }}
          border
          rounded
        >
          {height}%
        </Box>
      ))}
    </Box>
  );
}

export function MaxHeight() {
  return (
    <Box bg={{ color: 'info', opacity: 25 }} style={{ height: "200px" }}>
      <Box
        mh={100}
        p={3}
        bg="info"
        style={{ width: "150px", height: "200px" }}
      >
        Max-height 100%
      </Box>
    </Box>
  );
}
MaxHeight.storyName = "Max height";

export function Visibility() {
  return (
    <>
      <Box p={2} bg="light" border visible>
        Visible
      </Box>
      <Box p={2} bg="light" border invisible>
        Invisible
      </Box>
    </>
  );
}

export function Visually() {
  return (
    <>
      <Box p={2} bg="light" border>
        Visible
      </Box>
      <Box p={2} bg="light" border visually={false}>
        Visually hidden
      </Box>
      <Box p={2} bg="light" border visually="hidden">
        Visually hidden v2
      </Box>
      <Box p={2} bg="light" border visually="hidden-focusable">
        Visually hidden focusable
      </Box>
    </>
  );
}

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
        <Box bg={bgColor} text={textColor} p={3} m={[0, 0, 2, 0]}>
          .bg-
          {bgColor}
        </Box>
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
        <Box bg={{ color: bgColor, gradient: true }} text={textColor} p={3} m={[0, 0, 2, 0]}>
          .bg-
          {bgColor}
          .bg-gradient
        </Box>
      ))}
    </>
  );
}
BackgroundGradients.storyName = "Background gradients";

export function BackgroundOpacity() {
  const examples = [null, 75, 50, 25, 10];

  return (
    <>
      {examples.map((opacity) => (
        <Box
          p={2}
          bg={{ color: "primary", opacity }}
          text={opacity >= 10 && opacity <= 50 ? "dark" : "white"}
        >
          {opacity === null
            ? "This is default success background"
            : `This is ${opacity}% opacity success background`}
        </Box>
      ))}
    </>
  );
}
BackgroundOpacity.storyName = "Background opacity";

export function BorderAdditives() {
  const aspects = [true, "top", "end", "bottom", "start"];

  return (
    <Box d="flex">
      {aspects.map((aspect) => (
        <Box
          m={[0, 3, 0, 0]}
          bg={{ color: "info", opacity: 10 }}
          border={{ width: 2, color: "info", aspect }}
          style={{ width: "5rem", height: "5rem" }}
        />
      ))}
    </Box>
  );
}
BorderAdditives.storyName = "Border additives";

export function BorderSubtractive() {
  const examples = [0, "top-0", "end-0", "bottom-0", "start-0"];

  return (
    <Box d="flex">
      {examples.map((border) => (
        <Box
          style={{ width: "5rem", height: "5rem" }}
          me={3}
          bgColor="light"
          border={border}
        />
      ))}
    </Box>
  );
}
BorderSubtractive.storyName = "Border subtractive";

export function BorderColors() {
  const examples = [
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
    <Box d="flex">
      {examples.map((borderColor) => (
        <Box
          style={{ width: "5rem", height: "5rem" }}
          me={3}
          bgColor="light"
          border
          borderColor={borderColor}
        />
      ))}
    </Box>
  );
}
BorderColors.storyName = "Border colors";

export function BorderWidth() {
  const examples = [1, 2, 3, 4, 5];

  return (
    <Box d="flex">
      {examples.map((borderWidth) => (
        <Box
          style={{ width: "5rem", height: "5rem" }}
          me={3}
          bgColor="light"
          border
          borderWidth={borderWidth}
        />
      ))}
    </Box>
  );
}
BorderWidth.storyName = "Border width";

export function BorderRadius() {
  const examples = [true, "top", "end", "bottom", "start", "circle", "pill"];

  return (
    <Box d="flex">
      {examples.map((radius) => (
        <Box
          style={{
            width: radius === "pill" ? "10rem" : "5rem",
            height: "5rem",
          }}
          me={3}
          bgColor="secondary"
          borderRadius={radius}
          textColor="light"
        />
      ))}
    </Box>
  );
}
BorderRadius.storyName = "Border radius";

export function BorderSizes() {
  const examples = [0, 1, 2, 3, 4, 5];

  return (
    <Box d="flex">
      {examples.map((size) => (
        <Box
          style={{
            width: "5rem",
            height: "5rem",
          }}
          me={3}
          bgColor="secondary"
          borderRadiusSize={size}
          textColor="light"
        />
      ))}
    </Box>
  );
}
BorderSizes.storyName = "Border sizes";

export function TextColors() {
  const examples = [
    { textColor: "primary", bgColor: null },
    { textColor: "secondary", bgColor: null },
    { textColor: "success", bgColor: null },
    { textColor: "danger", bgColor: null },
    { textColor: "warning", bgColor: "dark" },
    { textColor: "info", bgColor: "dark" },
    { textColor: "light", bgColor: "dark" },
    { textColor: "dark", bgColor: null },
    { textColor: "body", bgColor: null },
    { textColor: "muted", bgColor: null },
    { textColor: "white", bgColor: "dark" },
    { textColor: "black-50", bgColor: null },
    { textColor: "white-50", bgColor: "dark" },
  ];

  return (
    <>
      {examples.map(({ textColor, bgColor }) => (
        <Box textColor={textColor} bgColor={bgColor} mb={3}>
          .text-
          {textColor}
        </Box>
      ))}
    </>
  );
}
TextColors.storyName = "Text colors";

export function Display() {
  return (
    <>
      <Box d="inline" p={2} me={2} bgColor="primary">
        d=inline
      </Box>
      <Box display="inline" p={2} bgColor="dark" textColor="white">
        display=inline
      </Box>
      <Box py={2} />
      <Box d="block" p={2} bgColor="primary" mb={2}>
        d=block
      </Box>
      <Box display="block" p={2} bgColor="dark" textColor="white" mb={2}>
        display=block
      </Box>
      <Box
        d={{ xs: "inline-flex", md: "flex" }}
        p={2}
        bgColor="dark"
        textColor="white">
        xs: inline-flex
        {", "}
        md: flex
      </Box>
    </>
  );
}

export function Float() {
  const examples = ["start", "end", "none"];

  return (
    <Box>
      {examples.map((float) => (
        <>
          <Box float={float}>
            {float === "none" ? "Don`t float" : `Float ${float}`} on all
            viewport sizes
          </Box>
          <br />
        </>
      ))}
    </Box>
  );
}

export function FloatResponsive() {
  return (
    <>
      <Box float={{ sm: "start" }}>
        Float start on viewports sized SM (small) or wider
      </Box>
      <br />
      <Box float={{ md: "start" }}>
        Float start on viewports sized MD (medium) or wider
      </Box>
      <br />
      <Box float={{ lg: "start" }}>
        Float start on viewports sized LG (large) or wider
      </Box>
      <br />
      <Box float={{ xl: "start" }}>
        Float start on viewports sized XL (extra-large) or wider
      </Box>
      <br />
      <Box float={{ xxl: "start" }}>
        Float start on viewports sized XXL (extra-large) or wider
      </Box>
    </>
  );
}
FloatResponsive.storyName = "Float responsive";

export function TextSelections() {
  return (
    <>
      <Box textSelect="all" mb={2}>
        This paragraph will be entirely selected when clicked by the user.
      </Box>
      <Box textSelect="auto" mb={2}>
        This paragraph has default select behavior.
      </Box>
      <Box textSelect="none">
        This paragraph will not be selectable when clicked by the user.
      </Box>
    </>
  );
}
TextSelections.storyName = "Text selections";

export function Opacity() {
  const examples = [100, 75, 50, 25];

  return (
    <>
      {examples.map((opacity) => (
        <Box bgColor="primary" textColor="white" p={3} opacity={opacity}>
          {opacity}%
        </Box>
      ))}
    </>
  );
}

export function Overflow() {
  return (
    <Box d="flex">
      <Box
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="auto"
        bgColor="light">
        This is an example of using .overflow-auto on an element with set width
        and height dimensions. By design, this content will vertically scroll.
      </Box>
      <Box
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="hidden"
        bgColor="light">
        This is an example of using .overflow-hidden on an element with set
        width and height dimensions.
      </Box>
      <Box
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="visible"
        bgColor="light">
        This is an example of using .overflow-visible on an element with set
        width and height dimensions.
      </Box>
      <Box
        style={{ maxWidth: "250px", maxHeight: "100px" }}
        p={3}
        me={3}
        overflow="scroll"
        bgColor="light">
        This is an example of using .overflow-scroll on an element with set
        width and height dimensions.
      </Box>
    </Box>
  );
}

export function Positions() {
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
    <Box
      position="relative"
      bgColor="light"
      border
      borderRadius={3}
      style={{ height: "200px" }}>
      {examples.map(({ top, end, bottom, start }) => (
        <Box
          style={{ width: "2rem", height: "2rem" }}
          position="absolute"
          top={top}
          end={end}
          bottom={bottom}
          start={start}
          bgColor="dark"
          border
          borderRadius={3}
        />
      ))}
    </Box>
  );
}

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
    <Box
      position="relative"
      m={5}
      bgColor="light"
      border
      borderRadius={3}
      style={{ height: "200px" }}>
      {examples.map(({ top, end, bottom, start }) => (
        <Box
          style={{ width: "2rem", height: "2rem" }}
          position="absolute"
          top={top}
          end={end}
          bottom={bottom}
          start={start}
          bgColor="dark"
          border
          borderRadius={3}
          translateMiddle
        />
      ))}
    </Box>
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
    <Box
      position="relative"
      bgColor="light"
      border
      borderRadius={3}
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
          <Box
            style={{ width: "2rem", height: "2rem" }}
            position="absolute"
            top={top}
            end={end}
            bottom={bottom}
            start={start}
            bgColor="dark"
            border
            borderRadius={3}
            translateMiddle={translateMiddle}
            translateMiddleX={translateMiddleX}
            translateMiddleY={translateMiddleY}
          />
        ),
      )}
    </Box>
  );
}
CenterElements2.storyName = "Center elements 2";

export function Shadows() {
  const examples = [
    { shadow: false, label: "No" },
    { shadow: "sm", label: "Small" },
    { shadow: true, label: "Regular" },
    { shadow: "lg", label: "Large" },
  ];

  return (
    <>
      {examples.map(({ shadow, label }) => (
        <Box
          shadow={shadow}
          bgColor={!shadow ? "light" : "body"}
          borderRadius
          p={3}
          mb={5}>
          {label} shadow
        </Box>
      ))}
    </>
  );
}

export function ClearFix() {
  return (
    <Box bgColor="info" clearFix>
      <Button theme="secondary" float="start">
        Example Button floated left
      </Button>
      <Button theme="secondary" float="end">
        Example Button floated right
      </Button>
    </Box>
  );
}
