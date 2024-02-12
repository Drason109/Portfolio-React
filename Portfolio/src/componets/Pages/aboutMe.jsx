import React from "react";
import photo from './assists/profile.jpg'
import { Box, Flex, Heading, Image, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function AboutMe() {
    return(
        <Box className="about">
             <Heading as='h1' size='lg'  borderRadius='10px' border='1px ridge black' margin='25px 200px 25px 200px'>About Me</Heading>
            <Divider orientation="horizontal" />
            <Flex flexDirection='column' margin='25px 200px 25px 200px'>
                <Image src={photo} alt="placeholder" boxSize='100px' marginLeft='300px' width='220px' height='180' borderRadius='24px' boxShadow='dark-lg' />
                <Text marginTop='50px'>
                Hello my name is Edwin, and I am a Full stack Developer.I love to interact with technology. I learned coding in high school when I signed up for a coding program called West-Mec.
                    I have been fascinated by technology and how it functions in the programming world. My first time learning code was in West-mec, where I learn the basic of web developing like HTML,CSS, and Javascript.
                    Then I also learn some back end development like databases using mongodb. I want to continue to learn programming to increase my skill set in this industry
                </Text>
            </Flex>
        </Box>
    )
}

