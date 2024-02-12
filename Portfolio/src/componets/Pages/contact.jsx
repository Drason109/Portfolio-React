import { Box, Flex, FormControl, FormLabel, Heading, Input, Textarea, Divider } from "@chakra-ui/react";
import React, { useState } from "react";




export default function ContactMe() {
    //set up a use state when someone enters a input
    const [comment, setComment] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    //set a value to the input when someone enter the input field
    const handleCommentChange = (e) => {
        let inputComment = e.target.value
        setComment(inputComment)
    }
    const handleEmailChange = (e) => {
        let inputEmail = e.target.value
        setEmail(inputEmail)
    }
    const handleNameChange = (e) => {
        let inputName = e.target.value
        setName(inputName)
    }



    return (//the contact me page
      <Flex justifyContent='center' border='5px groove black' margin='30px 350px'>
        <Box height='640px'>
            <Box textAlign='center' margin='30px auto'>
                <Heading>Contact Me</Heading>
            </Box>
            <Divider orientation="horizontal" />
            <Box marginTop='30px'>
                <form>
                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type="text" placeholder="Name is required" onChange={handleNameChange}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Email is required" onChange={handleEmailChange}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Comment</FormLabel>
                        <Textarea onChange={handleCommentChange} placeholder="Comment Here..." boxSize='md' height='200px'></Textarea>
                    </FormControl>
                </form>
            </Box>
        </Box>
      </Flex>
    )
}