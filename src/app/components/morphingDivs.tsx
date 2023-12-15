// components/MorphingDivs.tsx
import { Box, Flex, chakra, keyframes } from "@chakra-ui/react";
import React from "react";

const wobble = keyframes`
  0% {
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
  }
  25% {
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(15deg);
  }
  50% {
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
  }
  75% {
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(-15deg);
  }
  100% {
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
  }
};`;

const PortalInner = chakra("div", {
  baseStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "20vmin",
    width: "3.5em",
    height: "3.5em",
    borderRadius: "90% 95% 85% 105%",
    background: "#0f0",
    mixBlendMode: "screen",
    filter: "hue-rotate(0deg)",
    animation: `${wobble} linear infinite`,
    transformOrigin: "-var(--y) -var(--x)",
    boxShadow: "inset 0 0 0.5em 0.2em #000, 0 0 0.15em 0 #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    first: {
      "--x": "-53%",
      "--y": "-53%",
      "--t": "37",
    },
    second: {
      "--x": "-47%",
      "--y": "-52%",
      "--t": "58",
    },
    third: {
      "--x": "-42%",
      "--y": "-51%",
      "--t": "79",
    },
    fourth: {
      "--x": "-36%",
      "--y": "-50%",
      "--t": "100",
    },
    fifth: {
      "--x": "-30%",
      "--y": "-49%",
      "--t": "121",
    },
  },
});

const MorphingDivs: React.FC = () => {
  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.900">
      <Box>
        {/* Morphing Divs */}
        <PortalInner
          __css={{ "--x": "-53%", "--y": "-53%", "--t": "37" }}
        ></PortalInner>
        <PortalInner
          __css={{ "--x": "-47%", "--y": "-52%", "--t": "58" }}
        ></PortalInner>
        <PortalInner
          __css={{ "--x": "-42%", "--y": "-51%", "--t": "79" }}
        ></PortalInner>
        <PortalInner
          __css={{ "--x": "-36%", "--y": "-50%", "--t": "100" }}
        ></PortalInner>
        <PortalInner
          __css={{ "--x": "-30%", "--y": "-49%", "--t": "121" }}
        ></PortalInner>
      </Box>
    </Flex>
  );
};

export default MorphingDivs;
