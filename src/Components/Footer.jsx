import { Box, Text, Flex, Divider, Container, Heading, Stack, Icon, Image, Input, Select } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer(){
    return(
        <>
        <Box bg="rgb(0,51,128)" pb="2%">
            <Box w="95%" m="auto" pt="2%">
                <Flex color="white" justifyContent="space-around">
                    <Box>
                        <Stack spacing={2}>
                        <Heading fontSize="medium">PRODUCT CATEGORIES</Heading>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Smartphones</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Laptops</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>DSLR Cameras</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Televisions</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Air Conditioners</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Refrigerators</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Kitchen Appliances</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Accessories</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Personal Care & Grooming</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Smartwatches</Link></Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={2}>
                        <Heading fontSize="medium">SITE INFO</Heading>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>About Reliance Digital</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>resQ Services</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Locate nearest resQ service</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>center</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Site Map</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Gift Cards</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Corporate Enquires</Link></Box>
                        <Box _hover={{color:"rgb(167,191,199)"}}><Link>Contact Us</Link></Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={2}>
                            <Heading fontSize="medium">RESOURCE CENTER</Heading>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Product Reviews</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Buying Guides</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>How Tos</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Featured Stories</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Events & Happenings</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Nearest Store</Link></Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={2}>
                            <Heading fontSize="medium">POLICIES</Heading>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Terms of Use</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>FAQs</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Cancellation and Return Policy</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Pricing and Payments Policy</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Shipping and Delivery Policy</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Privacy Policy</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>E-waste Recycling Policy</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>EMI and Additional Cashback</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>T&C</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>RelianceOne Loyalty Program</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>T&C</Link></Box>
                            <Box _hover={{color:"rgb(167,191,199)"}}><Link>Caution Notice</Link></Box>
                        </Stack>
                    </Box>
                </Flex>
                <Flex color="white" w="60%" justifyContent="space-between">
                    <Box>
                        <Heading size="sm">FOLLOW US</Heading>
                        <Flex justifyContent="space-between" mt="2">
                        <Icon as={FaFacebook} w={6} h={6} color="teal.500" />
                        <Icon as={FaTwitter} w={6} h={6} color="teal.500" />
                        <Icon as={FaYoutube} w={6} h={6} color="teal.500" />
                        </Flex>
                    </Box>
                    <Box w="50%">
                        <Heading fontSize="14px">EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</Heading>
                        <Flex mt="1%" justifyContent="space-between">
                            <Box w="45%">
                                <Image src="https://www.reliancedigital.in/build/client/images/google_play_store.png"/>
                            </Box>
                        
                            <Box w="45%">
                                <Image src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
        <Box bg="rgb(10,36,74)" textAlign="center" pt="2%" pl="1%" pr="1%" color="white">
            <Heading fontSize="14px" textDecoration="underline">Disclaimer</Heading>
            <Text fontSize="14px" mt="2%" mb="2%">Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</Text>
            <Divider/>
            <Text fontSize="14px" mt="2%" pb="2%">© 2024 Reliance Digital. All Rights Reserved.</Text>
        </Box>
        </>
    )
}

export default Footer