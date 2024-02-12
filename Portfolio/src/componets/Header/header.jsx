import React from "react";
import Navbar from "../Navbar/navbar";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";



const Header = () => {
    return(//header of the page
        <Flex bg='lightblue' justifyContent='space-between' borderRadius='5px' paddingTop='100px'>
            
            <Center>
                <Heading as='h1' size='2xl' margin='8px 0px'>Edwin Pena Holguin</Heading>
            </Center>
          
            <Center>
                <Navbar />
            </Center>
        </Flex>
    )
}

export default Header