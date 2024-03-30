import { HStack, Text, Heading } from "@chakra-ui/react";
import React from "react";
import "../index.css";
const Header = () => {
  return (
    <HStack
      p={3}
      justify="center"
      position="fixed"
      w="100%"
      top={0}
      className="nav-css"
    >
      <Heading>Build Your Resume</Heading>
    </HStack>
  );
};

export default Header;
