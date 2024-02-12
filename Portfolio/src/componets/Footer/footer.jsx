import { Flex, Image, List, ListItem, Text, } from "@chakra-ui/react";
import React from "react";
import email from '../Pages/assists/Email.png'
import github from '../Pages/assists/download.png'
import linked from '../Pages/assists/Linked.png'

const Footer = () => {
    return (//Footer of the page
        <Flex flexDirection='row' background='lightblue' justifyContent='center' borderRadius='5px'>
                <Flex flexDirection='column'background='white' margin='0 100px' >
                    <Image src={email} boxSize='50px' _hover={{boxSize: '80px'}}/>   
                    <Text>Email</Text>
                </Flex>
                <Flex flexDirection='column' background='white' margin='0 100px'>
                    <Image src={github} boxSize='50px'_hover={{boxSize: '80px'}} />
                    <Text>GitHub</Text>
                </Flex>
                <Flex flexDirection='column' background='white' margin='0 100px'>
                    <Image src={linked} boxSize='50px'_hover={{boxSize: '80px'}} />
                    <Text>LinkEd</Text>
                </Flex>
        </Flex>
    )
}

export default Footer