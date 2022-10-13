import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  chakra,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormLabel,
  color,
  Spinner,
  Stack,
  Alert,
  AlertIcon,
  useToast,
  Toast,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AddPosts } from "../../Redux/Action";
import { useEffect } from "react";
import AlertMessage from "../../Components/AlertMessage";
const AddPost = () => {
  const { Loading, Error, IsPostAdded } = useSelector(
    (state) => state.AddPosts
  );

  console.log(Error);
  const dispatch = useDispatch();
  // const toast = useToast();

  const [PostData, setPostData] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const handleData = (e) => {
    console.log(e);
    let { name, value } = e.target;
    setPostData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    dispatch(AddPosts("https://jsonplaceholder.typicode.com/posts", PostData));
    e.preventDefault();
    console.log(PostData);

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", userData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(IsPostAdded);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pink" variant="outline" onClick={onOpen} my={4}>
        Add Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Add New Post</ModalHeader>
          <ModalCloseButton />
          {Error !== null && (
            <AlertMessage variant={"error"}>
              There was an error processing your request. Error:$
              {Error}
            </AlertMessage>
          )}

          {IsPostAdded && (
            <AlertMessage variant={"success"}>
              Post Successfully Added
            </AlertMessage>
          )}
          <ModalBody pb={6}>
            <chakra.form onSubmit={handleSubmit}>
              <FormLabel>Title</FormLabel>
              <Input
                value={PostData.title}
                name="title"
                onChange={handleData}
              />
              <FormLabel>Body</FormLabel>
              <Input
                value={PostData.body}
                name="body"
                onChange={handleData}
                required
              />

              <FormLabel mt={2}>UserId</FormLabel>

              <Input
                type={"number"}
                value={PostData.userId}
                onChange={handleData}
                name="userId"
                required
              />

              <Button
                type="submit"
                disabled={Loading}
                colorScheme="pink"
                variant="outline"
                my={4}
              >
                {Loading ? <Spinner color="white.500" /> : "Add Post"}
              </Button>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPost;
