"use client";
import { Box, ColorModeScript } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "../styles/chakra/theme";
import { useEffect, useState } from "react";
import LandingPage from "../(custom)/landingPage/page";
import HomePage from "../(custom)/home/page";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showHomePage, setShowHomePage] = useState(true);

  const togglePages = (value: boolean): (() => void) => {
    const interval = setInterval(() => {
      setShowHomePage(value);
    }, 300);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY + window.scrollY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    backgroundImage: `radial-gradient(400px at ${cursorPosition.x}px ${
      cursorPosition.y
    }px, ${
      !showHomePage ? theme.colors.brand.quaternary : ""
    } 15%, transparent 90%)`,
    backgroundColor: !showHomePage ? theme.colors.brand.primary : "#000",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <Box style={gradientStyle} display="flex" flexDirection="column">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Head>
          <title>Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Box mx="auto" flex="1">
          {showHomePage ? (
            <HomePage togglePages={togglePages} />
          ) : (
            <LandingPage />
          )}
        </Box>
      </ChakraProvider>
    </Box>
  );
}
