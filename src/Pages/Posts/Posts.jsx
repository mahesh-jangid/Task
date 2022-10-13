import {
  Alert,
  AlertIcon,
  Flex,
  Spinner,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../Redux/Action";

const Posts = () => {
  const dispatch = useDispatch();
  const { Loading, Error, Posts } = useSelector((state) => state.Posts);
  console.log(Posts);
  useEffect(() => {
    dispatch(fetchPosts(`https://jsonplaceholder.typicode.com/posts`));
  }, []);
  if (Loading) {
    return (
      <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />
      </Flex>
    );
  }
  if (Error) {
    return (
      <Stack spacing={3}>
        <Alert status="error" variant="solid">
          <AlertIcon />
          There is a problem fetching the post data - ${Error}
        </Alert>
      </Stack>
    );
  }
  return (
    <>
      <Box m={"6"}>
        <Button colorScheme="pink" variant="outline">
          <Link to={`/posts/add`}>Add Post</Link>
        </Button>
      </Box>

      <TableContainer>
        <Table size="sm">
          <TableCaption>Post Data</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Posts.map((post) => {
              return (
                <Tr maxH={"40%"} key={post.id}>
                  <Td>{post.title}</Td>
                  <Td
                    maxW="md"
                    textAlign={"justify"}
                    overflow="hidden"
                    alignContent={"center"}
                  >
                    {/* <Box
                    bg="tomato"
                 
                   overflow="hidden"
                    alignContent={"center"} 
                  >
                    {post.body}
                  </Box> */}
                    {post.body}
                  </Td>
                  <Td>
                    {" "}
                    <Button colorScheme="teal" variant="outline">
                      <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Posts;
