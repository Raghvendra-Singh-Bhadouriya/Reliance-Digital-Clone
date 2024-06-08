import { Box, Image, Heading, Text, Button, Flex, Center, Stack, CardBody, Grid, GridItem, Divider, Input } from "@chakra-ui/react"
import {Link , useNavigate} from "react-router-dom"
import React,{useState} from "react"
import {userDetails} from "../backend"



function Login(){

    const [number, setNumber] = useState("")
    const navigate = useNavigate()
     

    function handleClick(){
        
            const mobileNumbers = userDetails.map(user => user.Mob);

            if (mobileNumbers.includes(number)) {
                navigate("/");
            } else {
                navigate("/signup");
            }

}
    return(
        <>
        <Box bg="white" pt="3%" pb="3%" color="black">
            <Flex justifyContent="space-around">
                <Box w="65%">
                    <Image src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"/>
                </Box>
            
                <Box w="30%" pt="2%" pb="5%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    <Stack spacing={8}>
                    <Heading ml="10%" fontSize="18px">Login / Register</Heading>
                    <Divider borderColor="rgb(221,221,221)"/>
                    <Center>
                        <Input
                        value={number}
                        type="number"
                        placeholder="Enter Mobile Number"
                        isRequired
                        onChange={(e) => setNumber(e.target.value)}
                        color="black"
                        border="1px solid rgb(216,226,239)"
                        alignItems="center"
                        w="80%"
                        _placeholder={{ color: 'gray.500' }}
                        /> 
                    </Center>
                    <Center>
                            <Button
                            height='48px'
                            width='80%'
                            colorScheme="red"
                            onClick={handleClick}
                            >
                                PROCEED
                            </Button>
                    </Center>
                    </Stack>
                    
                </Box>
            </Flex>
        </Box>
        </>
    )
}

export default Login;