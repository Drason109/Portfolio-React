import React from "react";
import { Link as ReactRouterLink } from "react-router-dom"; 
import { Tabs, TabList,Tab, Link as ChakraLink } from "@chakra-ui/react";


const Navbar = () => {
    return (//navbar of the page
      <Tabs>
        <TabList>
            <Tab><ChakraLink as={ReactRouterLink} to='/'>About Me</ChakraLink></Tab>
            <Tab><ChakraLink as={ReactRouterLink} to='/Project'>Project</ChakraLink></Tab>
            <Tab><ChakraLink as={ReactRouterLink} to='/Contact'>Contact Me</ChakraLink></Tab>
            <Tab><ChakraLink as={ReactRouterLink} to='/Resume'>Resume</ChakraLink></Tab>
        </TabList>
      </Tabs>
    )
}

export default Navbar