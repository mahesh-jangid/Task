import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { EditPosts } from "../../Redux/Action";
import AlertMessage from "../../Components/AlertMessage";
const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { Loading, Error, IsEdited } = useSelector((state) => state.EditPosts);
  //   const prevValue = useRef("");
  //   console.log(prevValue);
  const [prevpost, setPrevPost] = useState({});

  const handleData = (e) => {
    console.log(e);
    let { name, value } = e.target;
    setPrevPost((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      EditPosts(`https://jsonplaceholder.typicode.com/posts/${id}`, prevpost)
    );
  };

  useEffect(() => {
    const getPrevPost = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(res);
        setPrevPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPrevPost();
  }, [id]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pink" variant="outline" onClick={onOpen} my={4}>
        Edit Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          {Error !== null && (
            <AlertMessage variant={"error"}>
              There was an error processing your request. Error:$
              {Error}
            </AlertMessage>
          )}

          <ModalBody pb={6}>
            <chakra.form onSubmit={handleSubmit}>
              <FormLabel>Title</FormLabel>
              <Input
                value={prevpost.title}
                name="title"
                onChange={handleData}
              />

              <FormLabel>Body</FormLabel>
              <Input
                value={prevpost.body}
                name="body"
                onChange={handleData}
                required
              />

              <FormLabel mt={2}>UserId</FormLabel>

              <Input
                type={"number"}
                value={prevpost.userId}
                onChange={handleData}
                name="userId"
                required
              />

              <Button type="submit" colorScheme="pink" variant="outline" my={4}>
                {/* {Loading ? <Spinner color="white.500" /> : "Add Post"} */}

                {Loading ? <Spinner color="white.500" /> : "Edit Post"}
              </Button>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPost;
