import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {sliderone, slidertwo, trendingtabs, aircooler, newrangeacs, secondofferslider, topdealsmobiles, audioaccessories, dealsOnelEtronics, advertiseProduct, brandPromise, bankOffer, smartWatches, exploreProducts} from "../backend"
import { Box, Image, Heading, Text, Button, Flex, Card, CardBody, Center, Grid, GridItem } from "@chakra-ui/react"

function Home(){
    
    const SliderCss ={
        '.slick-slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '.slick-prev, .slick-next': {
            width: '30px',
            height: '30px',
            zIndex: 1,
            color: 'black', // Change the color here
            '&:before': {
                fontSize: '30px',
                color: 'black' // Change the color here
            },
        },
          '.slick-prev': {
            left: '-0px',
          },
          '.slick-next': {
            right: '-0px',

          },
          '.slick-dots': {
            top: '80%',
            'li button:before': {
              color: 'black',
            },
          },
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
    }

    const thirdSlider={
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }


//=====================================================================================//
    return(
        <>
        <Box bg="rgb(233,235,238)" color="black">
          <Box w="100%" m="auto"
          css={SliderCss}>
              <Slider {...settings}>
                    {sliderone.map((specialoffer) => (
                        <Image src={specialoffer.offerimg}/>
                    ))}
              </Slider>
          </Box>

          <Box w="100%" m="auto" mt="0.5%" css={SliderCss}>
            <Slider {...settings}>
              {slidertwo.map((product) => (
                <Image src={product.img}/>
              ))}
            </Slider>
          </Box>

          <Box w="100%" m="auto" mt="0.5%" css={SliderCss} bg="white" pt="2%">
            <Flex>
              <Heading fontSize="15px" ml="2%">Trending Tablets | No Cost EMI Available*</Heading>
              <Button 
              ml="1%" 
              color="white" 
              borderRadius="none" 
              size="sm" 
              h="25px"
              bg="rgb(0,51,128)"
              >view all</Button> 
            </Flex>

            <Box css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {trendingtabs.map((trending) => (
                    <Card key={trending.id} bg="white" color="black" h="350px" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={trending.img} w="60%" m="auto"/>
                        <Text 
                        fontSize="14px" 
                        mt="1%"
                        mb="2%"
                        color="darkblue"
                        _hover={{
                          color: 'red',
                        }}
                        display="-webkit-box"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        sx={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                        >{trending.title}</Text>
                        <Text>{trending.price}</Text>
                        <Text color="rgb(102,102,102)" textDecoration="line-through">{trending.mrp}</Text>
                        <Text>{trending.btn}</Text>
                      </CardBody>
                    </Card>
                ))}
              </Slider>
            </Box>
            </Box>
          </Box>


          <Box w="100%" m="auto" mt="1%" css={SliderCss} bg="white" pt="2%">
            <Flex>
              <Heading fontSize="15px" ml="2%">Best Deals On Air Coolers</Heading>
              <Button 
              ml="1%" 
              color="white" 
              borderRadius="none" 
              size="sm" 
              h="25px"
              bg="rgb(0,51,128)"
              >view all</Button> 
            </Flex>
            <Box css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {aircooler.map((cooler) => (
                    <Card key={cooler.id} bg="white" color="black" h="350px" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={cooler.img} w="60%" m="auto"/>
                        <Text 
                        fontSize="14px" 
                        mt="1%"
                        mb="2%"
                        color="darkblue"
                        _hover={{
                          color: 'red',
                        }}
                        display="-webkit-box"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        sx={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                        >{cooler.title}</Text>
                        <Text>{cooler.price}</Text>
                        <Text color="rgb(102,102,102)" textDecoration="line-through">{cooler.mrp}</Text>
                        <Text>{cooler.btn}</Text>
                      </CardBody>   
                    </Card>
                ))}
              </Slider>
            </Box>
            </Box>
          </Box>


          <Box w="100%" m="auto" mt="1%" bg="white" pt="2%">
            <Flex>
              <Heading fontSize="15px" ml="2%">2024 New Range of ACs from Rs.22990*</Heading>
              <Button 
              ml="1%" 
              color="white" 
              borderRadius="none" 
              size="sm" 
              h="25px"
              bg="rgb(0,51,128)"
              >view all</Button> 
            </Flex>
            <Box css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {newrangeacs.map((ac) => (
                    <Card key={ac.id} bg="white" color="black" h="350px" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={ac.img} w="60%" m="auto"/>
                        <Text 
                        fontSize="14px" 
                        mt="1%"
                        mb="2%"
                        color="darkblue"
                        _hover={{
                          color: 'red',
                        }}
                        display="-webkit-box"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        sx={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                        >{ac.title}</Text>
                        <Text>{ac.price}</Text>
                        <Text color="rgb(102,102,102)" textDecoration="line-through">{ac.mrp}</Text>
                        <Text>{ac.btn}</Text>
                      </CardBody>   
                    </Card>
                ))}
              </Slider>
            </Box>
            </Box>
          </Box>


          <Box bg="rgb(233,235,238)" color="black" mt="1%">
          <Box w="100%" m="auto" css={SliderCss}>
              <Slider {...settings}>
                    {secondofferslider.map((secondoffer) => (
                        <Image src={secondoffer.img}/>
                    ))}
              </Slider>
          </Box>
          </Box>


          <Box bg="white" mt="1%" pt="2%">
            <Heading pb="2%" fontSize="15px" ml="2%">Top Deals on Mobiles</Heading>
            <Flex>
              {topdealsmobiles.map((mob) => (
                <Card key={mob.id} bg="white" boxShadow="none">
                    <CardBody>
                      <Image
                      _hover={{
                        transform:"scale(1.1)",
                        }}
                      src={mob.img}/>
                    </CardBody>
                </Card>
              ))}
            </Flex>
          </Box>


          <Box w="100%" m="auto" mt="1%" bg="white" pt="2%">
            <Flex>
              <Heading fontSize="15px" ml="2%">Best Selling Audio Accessories</Heading>
              <Button 
              ml="1%" 
              color="white" 
              borderRadius="none" 
              size="sm" 
              h="25px"
              bg="rgb(0,51,128)"
              >view all</Button> 
            </Flex>
            <Box css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {audioaccessories.map((audio) => (
                    <Card key={audio.id} bg="white" color="black" h="350px" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={audio.img} w="60%" m="auto"/>
                        <Text 
                        fontSize="14px" 
                        mt="1%"
                        mb="2%"
                        color="darkblue"
                        _hover={{
                          color: 'red',
                        }}
                        display="-webkit-box"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        sx={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                        >{audio.title}</Text>
                        <Text>{audio.price}</Text>
                        <Text color="rgb(102,102,102)" textDecoration="line-through">{audio.mrp}</Text>
                        <Text>{audio.btn}</Text>
                      </CardBody>   
                    </Card>
                ))}
              </Slider>
            </Box>
            </Box>
          </Box>


          <Box mt="1%" bg="white" pt="2%" pb="3%">
            <Heading pb="2%" fontSize="15px" ml="2%">Great Deals on Electronics</Heading>
            <Grid w="95%" m="auto" templateColumns='repeat(4, 1fr)' gap={4}>
              {dealsOnelEtronics.map((electrodeal) => (
                <GridItem key={electrodeal.id}>
                    <Image 
                    _hover={{
                      transform:"scale(1.1)",
                      }}
                    src={electrodeal.img}/>
                </GridItem>
              ))}
            </Grid>
          </Box>


          <Box bg="rgb(233,235,238)" color="black" mt="1%">
          <Box w="100%" m="auto" css={SliderCss}>
              <Slider {...settings}>
                    {advertiseProduct.map((thirdoffer) => (
                        <Image src={thirdoffer.img}/>
                    ))}
              </Slider>
          </Box>
          </Box>


          <Box mt="1%" bg="white" pt="2%" pb="3%">
            <Heading color="darkblue" fontSize="20px" textAlign="center">
              THE RELIANCE DIGITAL BRAND PROMISE
            </Heading>
            <Flex mt="2%" justifyContent="space-around">
              {brandPromise.map((promise) => (
                <Card key={promise.id} bg="rgb(247,247,247)" w="24%" h="100px" boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" >
                    <CardBody>
                      <Image m="auto" src={promise.img}/>
                      <Text textAlign="center" color="darkblue" fontSize="14px" fontWeight="bold">
                        {promise.title}
                      </Text>
                      <Text textAlign="center" color="rgb(102,102,102)" fontSize="11px">
                        {promise.detail}
                      </Text>
                    </CardBody>
                </Card>
              ))}
            </Flex>
          </Box>


          <Box bg="rgb(233,235,238)" color="black" mt="1%" border="5px solid rgb(233,235,238)">
            <Box w="100%" m="auto" css={SliderCss}>
              <Slider {...settings}>
                    {bankOffer.map((bnkoffer) => (
                        <Image src={bnkoffer.img}/>
                    ))}
              </Slider>
            </Box>
          </Box>


          <Box w="100%" m="auto" mt="1%" bg="white" pt="2%">
            <Flex>
              <Heading fontSize="15px" ml="2%">Best Selling Audio Accessories</Heading>
              <Button 
              ml="1%" 
              color="white" 
              borderRadius="none" 
              size="sm" 
              h="25px"
              bg="rgb(0,51,128)"
              >view all</Button> 
            </Flex>
            <Box css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {smartWatches.map((watches) => (
                    <Card key={watches.id} bg="white" color="black" h="350px" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={watches.img} w="60%" m="auto"/>
                        <Text 
                        fontSize="14px" 
                        mt="1%"
                        mb="2%"
                        color="darkblue"
                        _hover={{
                          color: 'red',
                        }}
                        display="-webkit-box"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        sx={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                        >{watches.title}</Text>
                        <Text>{watches.price}</Text>
                        <Text color="rgb(102,102,102)" textDecoration="line-through">{watches.mrp}</Text>
                        <Text>{watches.btn}</Text>
                      </CardBody>   
                    </Card>
                ))}
              </Slider>
            </Box>
            </Box>
          </Box>


          <Box bg="rgb(247,247,247)" w="100%" m="auto" mt="1%" pb="2%">
              <Heading pt="2%" fontSize="20px" textAlign="center">EXPLORE OUR RANGE OF PRODUCTS</Heading>
            <Box  css={SliderCss}>
            <Box w="95%" m="auto" >
              <Slider  {...thirdSlider}>
                {exploreProducts.map((explore) => (
                    <Card key={explore.id} bg="rgb(247,247,247)" color="black" boxShadow="none">
                      <CardBody>
                        <Image
                         _hover={{
                          transform:"scale(1.1)",
                          }}
                        src={explore.img} w="100%" m="auto"/>
                        <Text 
                        textAlign="center"
                        fontSize="15px" 
                        mt="1%"
                        color="rgb(122,122,122)"
                        _hover={{
                          color: 'blue',
                        }}
                        >{explore.name}
                        </Text>
                      </CardBody>   
                    </Card>
                ))}
              </Slider>
                <Center>
                  <Button 
                    bg="rgb(0,51,128)"
                    color="white"
                    borderRadius="50px"
                    size="md" 
                    h="35px"
                  >
                    view all
                </Button>
              </Center>
            </Box>
            </Box>
          </Box>

        </Box>
        </>
    );
}

export default Home;