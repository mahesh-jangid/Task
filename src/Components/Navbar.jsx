import React from "react";

import { Container, Heading, Spacer, Box, Flex, Icon } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Container
        maxW="8xl"
        bg={"gray.700"}
        p={4}
        position="sticky"
        top="0"
        zIndex="sticky"
      >
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Link to={"/"}>
            <Box p="2">
              <Heading size="md">App</Heading>
            </Box>
          </Link>
          <Spacer />
          <Flex gap="6" fontSize={"18px"}>
            <Link to="/posts">Posts</Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
