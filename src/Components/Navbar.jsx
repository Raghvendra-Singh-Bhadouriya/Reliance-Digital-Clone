import { Box, Text, Flex, Divider, Image, Input, Select } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import React, { useState } from 'react';

function Navbar(){

    //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const Links =[
        {
            to:"/mobilesandtablets",
            label:"MOBILES & TABLETS"
        },
        {
            to:"/televisions",
            label:"TELEVISIONS"
        },
        {
            to:"/audio",
            label:"AUDIO"
        },
        {
            to:"/homeappliances",
            label:"HOME APPLIANCES"
        },
        {
            to:"/computers",
            label:"COMPUTERS",
        },
        {
            to:"/cameras",
            label:"CAMERAS"
        },
        {
            to:"/kitchen",
            label:"KITCHEN APPLIANCES"
        },
        {
            to:"/personalcare",
            label:"PERSONAL CARE"
        }
    ]

    /*const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };*/

      const dropdownContent = {
        "/mobilesandtablets": ["Phones", "Tablets", "Accessories"],
        "/televisions": ["Smart TVs", "LED TVs", "OLED TVs"],
        "/audio": ["Headphones", "Speakers", "Soundbars"],
        "/homeappliances": ["Refrigerators", "Washing Machines", "Microwaves"],
        "/computers": ["Laptops", "Desktops", "Monitors"],
        "/cameras": ["DSLR", "Mirrorless", "Action Cameras"],
        "/kitchen": ["Mixers", "Blenders", "Toasters"],
        "/personalcare": ["Shavers", "Hair Dryers", "Massagers"],
      };
    
      const handleItemClick = (to) => {
        setActiveDropdown((prev) => (prev === to ? null : to));
      };

    return(
    <>
              <Box bg="rgb(228,37,41)">
                <Flex ml="auto" mr="2%" w="25%" h="25px" color="white">
                    <Link to="/pro">
                        <Text fontFamily="Roboto, system-ui, sans-serif"  fontSize="14" >Find a store</Text>
                    </Link>
                    <Divider m="auto" h="15px" orientation='vertical' border="1px solid white"/>
                    <Link>
                        <Text  fontFamily="Roboto, system-ui, sans-serif" fontSize="14">Buying guides</Text>
                    </Link>
                    <Divider m="auto" h="15px" orientation='vertical' border="1px solid white"/>
                    <Link>
                        <Text fontFamily="Roboto, system-ui, sans-serif" fontSize="14" >Contact us</Text>
                    </Link> 
                </Flex>
              </Box>
        
        <Box as="nav" position="sticky" top="0" zIndex="9999">
            <Box backgroundColor="rgb(228,37,41)">
              <Box>
                <Flex justifyContent="space-around">
                    <Box w="16%">
                      <Link to="/">
                        <Image src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"/>
                      </Link>
                    </Box>
                    <Box w="38%" mt="1%" mb="2%">
                        <Input
                        type="text"
                        placeholder="Find your favorite products"
                        _placeholder={{ color: 'gray.500' }}
                        size="sm"
                        bg="white"
                        color="black"
                        border="none"
                        borderRadius="50px"/>
                    </Box>
                    <Box w="25%" mt="2%">
                        <Flex ml="auto" h="25px" color="white" >
                            <Link to="/pro">
                                <Text fontFamily="Roboto, system-ui, sans-serif" fontSize="14" >Select your Pin Code</Text>
                            </Link>
                            <Divider m="auto" h="15px" orientation='vertical' border="1px solid white"/>
                            <Link>
                                <Text  fontFamily="Roboto, system-ui, sans-serif" fontSize="14">Cart</Text>
                            </Link>
                            <Divider m="auto" h="15px" orientation='vertical' border="1px solid white"/>
                            <Link to="/login">
                                <Text
                                fontFamily="Roboto, system-ui, sans-serif" fontSize="14" >
                                  Login
                                </Text>
                            </Link> 
                        </Flex>
                        
                    </Box>
                </Flex>
              </Box>
            </Box>

            <Box bg="darkblue" pt="1%" pb="1%" color="white">
            <Flex justifyContent="space-around">
            {Links.map((link, index) => (
            <Box key={index} position="relative" mx="4">
            <Text
              fontSize="12px"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => handleItemClick(link.to)}
            >
              {link.label}
            </Text>
            {activeDropdown === link.to && (
              <Box
                position="absolute"
                top="100%"
                left="0"
                backgroundColor="white"
                border="1px solid #ccc"
                boxShadow="md"
                zIndex="1000"
                width="200px"
                mt="2"
              >
                {dropdownContent[link.to].map((item, idx) => (
                  <Text color="black" key={idx} p="2" borderBottom="1px solid #ccc">
                    {item}
                  </Text>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Flex>




            
            </Box>
        </Box>
    </>
    )
}

export default Navbar;






/*<Flex mt="4">
        {Links.map((link, index) => (
          <Box
            key={index}
            position="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            mx="4"
          >
            <Text placeholder="MOBILE & TABLETS" fontSize="12" cursor="pointer">{link.label} </Text>
            {isDropdownOpen && (
              <Box
                position="absolute"
                top="100%"
                left="0"
                backgroundColor="white"
                border="1px solid #ccc"
                boxShadow="md"
                zIndex="1000"
                width="200px"
              >
                <Text p="2" borderBottom="1px solid #ccc">Sub-link 1</Text>
                <Text p="2" borderBottom="1px solid #ccc">Sub-link 2</Text>
                <Text p="2" borderBottom="1px solid #ccc">Sub-link 3</Text>
              </Box>
            )}
          </Box>
        ))}
      </Flex>*/



