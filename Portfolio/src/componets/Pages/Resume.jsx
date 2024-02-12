import { Box, Flex, Heading, Icon, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import {ArrowForwardIcon} from '@chakra-ui/icons'
export default function Resume() {
    return(
        <Flex flexDirection='column'>
            <Box margin='30px'>
            <Heading as='h1' size='2xl'>Resume</Heading>
            </Box>
            <Flex flexDirection='row'justifyContent='space-around'>
                  <Box  border='10px ridge lightblue' >
                    <Heading as='h3' size='lg'>West-Mec Program</Heading>
                        <List>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                HTML
                            </ListItem>
                            <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                CSS
                            </ListItem>
                            <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                Javascript
                            </ListItem>
                            <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                bootstrap
                            </ListItem>
                            <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                jquery
                            </ListItem>
                            <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                mongoose
                            </ListItem>
                        </List>
                    </Box>
                    <Box margin='20px' border='10px ridge lightblue'>
                        <Heading as='h3' size='lg'>ASU Full stack</Heading>
                        <Box margin='10px'>
                            <Heading as='h3' size='md'>Front End</Heading>
                            <List>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    HTML
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    CSS
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    Javascript
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    web and Third party API
                                </ListItem>
                            </List>
                        </Box>
                        <Box margin='10px'>
                            <Heading as='h3' size='md'>Back End</Heading>
                            <List>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                Object-Oriented Programming OOP
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                Object-Relational Mapping ORM
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                Model-View-Controller MVC
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    Express
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    Node                            
                                </ListItem>
                                <ListItem>
                                <ListIcon as={ArrowForwardIcon} color='black'></ListIcon>
                                    SQL
                                </ListItem>                        
                            </List>
                        </Box>
                    </Box>
                </Flex>
    </Flex>
    )
}