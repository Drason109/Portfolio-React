import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import note from './NoteTaker.png'
import schedule from './Scheduler.png'
import social from './SocialNetwork.png'

//[age for the project page
export default function Project() {
    return (
        <Box>
            <Flex direction={{base: 'row', sm: 'column'}}>
                <a href='https://github.com/Drason109/Work-Day-Scheduler'>
                <Card direction={{base: 'column', sm: 'row'}} margin='30px' boxShadow='dark-lg'>
                <CardHeader>
                    <Image src={schedule} height='100px' border='2px groove black'/>
                </CardHeader>
                <CardBody textAlign='left'>
                    <Heading size='30px'>Work-Day-Scheduler</Heading>
                    <Text>The webpage helps people create a schedule depending on the hour of the day.
                        This also helps people set events to do for the days and gray out any ones they have already past. 
                        This has help me with my day planning and remebering what i have for the day.</Text>
                </CardBody>
                </Card>
                </a>
                <a href="https://github.com/Drason109/Note-Taker">
                <Card direction={{base: 'column', sm: 'row'}} margin='30px' boxShadow='dark-lg'>
                <CardHeader>
                    <Image src={note} height='90px' border='2px groove black'/>
                </CardHeader>
                <CardBody textAlign='left'>
                    <Heading size='30px'>Note-Taker</Heading>
                    <Text>Always forgetting what you need at the store or not remembering importanting errands that needs to be paid off.
                         Well, This app can assist on making keys notes throught your day so you dont forget those errands. 
                         Note Taker can save your notes for future use so it makes the perfect groceries list. 
                         This app makes life easier on keeping track on daily life that normally would slip throuh your mind.</Text>
                </CardBody>
                </Card>
                </a>
                <a href="https://github.com/Drason109/Social-Network-API">
                <Card direction={{base: 'column', sm: 'row'}} margin='30px' boxShadow='dark-lg'>
                <CardHeader>
                    <Image src={social} height='80px' border='2px groove black'/>
                </CardHeader>
                <CardBody textAlign='left'>
                    <Heading size='30px'>Social-Network Api</Heading>
                    <Text>This application is a Social network application that utilized packages and databases for users to create their account, thier thought, or react to other peoples thoughts as well. 
                        People are able to save their information to the dasebase from mongoose that the application runs on. Express.js runs on the pack end to add,update or delete information from the dasebase depending on what the user submits on routes. 
                        The routes is set up as crud API so it can update the information of the user depending where he's at on the page.</Text>
                </CardBody>
                </Card>
                </a>
            </Flex>
        </Box>
    )
}