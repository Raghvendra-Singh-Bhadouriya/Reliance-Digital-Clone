import { Box, FormControl, FormHelperText, Heading, Text, Button, Stack, Divider, Input, useDisclosure } from "@chakra-ui/react"
import {Link, useNavigate} from "react-router-dom"
import React,{useRef, useState} from "react"
import {userDetails} from "../backend"


function Signup(){
    const [btnColor, setBtnColor] = useState("white")
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const mobRef = useRef(null);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        let formData={
            First_Name : firstNameRef.current.value,
            Second_Name : lastNameRef.current.value,
            Email : emailRef.current.value,
            Mob : mobRef.current.value
        }


        userDetails.push(formData)

        firstNameRef.current.value="",
        lastNameRef.current.value="",
        emailRef.current.value="",
        mobRef.current.value=""
        setBtnColor("white")

       return navigate("/")
    }

    function colorChange(){
        setBtnColor("green")
    }

    return(
        <Box pb="5%">
            <Box w="50%" m="auto" mt="5%" pt="2%" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
                <Heading mb="5%" ml="5%" fontSize="18px" >Register New Account</Heading>
                <Divider mb="5%"/>
            <form onSubmit={handleSubmit}  style={{width:"90%", margin:"auto"}}>
                <Stack spacing={6}>
                <FormControl>
                    <Input
                    ref={firstNameRef}
                    type="text"
                    placeholder="Enter First Name"
                    isRequired
                    />
                </FormControl>
                <FormControl>
                    <Input
                    ref={lastNameRef}
                    type="text"
                    placeholder="Enter Last Name*"
                    isRequired
                    />
                </FormControl>
                <FormControl>
                    <Input
                    id="email"
                    ref={emailRef}
                    type="email"
                    placeholder="Enter Email Address*"
                    isRequired
                    />
                    <FormHelperText fontSize="12px">Your email address will be used to send order invoice, order updates etc.</FormHelperText>
                </FormControl>
                <Button w="30%" colorScheme={btnColor} variant="outline" onClick={colorChange}>
                    VERIFY EMAIL
                </Button>
                <FormControl>
                    <Input
                    type="number"
                    ref={mobRef}
                    placeholder="Enter Mobile Number"
                    isRequired
                    />
                    <FormHelperText fontSize="12px">Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyality Points and receive quick notifications.</FormHelperText>
                </FormControl>
                <Button colorScheme="red" type="submit">PROCEED</Button>
                <Text>Already Registered? <span style={{color:"red"}}><Link to="/login">LOGIN</Link></span></Text>
                </Stack>
            </form>
            </Box>
        </Box>
    )
}

export default Signup;