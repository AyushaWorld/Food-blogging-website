
'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// import Image from 'next/image'
import { Box, Button, Card, CardBody, Grid, GridItem, Heading, List, ListItem, SimpleGrid, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
export { Link } from '@chakra-ui/next-js';

export default function Home() {

  return (
    <>
      {/* Home Page------start-------- */}
      <Box className='main-components'>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} display="flex" flexDirection={{ base: 'column-reverse', md: 'row' }}>
          <GridItem w='100%' display='flex' alignItems='center' justifyContent='center'>
            {/* Text Section */}
            <Box className='left-layers'>
              <Box className='head'>
                <Image
                  src='logo.png'
                  alt='logo'
                  borderRadius='lg'
                  position="absolute"
                  top={15}
                />
              </Box>
              <Box className='text-layers' maxW={['full', 'md', 'lg']} textAlign={['center', 'start', 'start']}>
                <Box maxW={{ base: '100%', md: '32rem' }}>
                  <Heading as='h1' fontSize={['30px', '30px', '60px']}>
                    Discover the <Text as="span"> Best </Text>Food and Drinks
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} mt={2}>
                    Naturally made Healthcare Products for the better care & support of your body.
                  </Text>
                  <Button
                    size={['sm', 'md']}
                    height={['46px', '62px']}
                    width={['150px', '172px']}
                    fontSize={['12px', '16px']}
                    borderRadius="50px"
                    mt="20px"
                  >
                    Explore Now!
                  </Button>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem w='100%'>
            {/* Image Section */}
            <Box className='right-layers' pl={{ md: 4 }}>
              <Box position="relative">
                <Button
                  position="absolute"
                  size={['xs', 'md']} 
                  right={[2, 4]} 
                  top={[2, 4]} 
                  height={['42px', '52px']} 
                  width={['100px', '132px']}
                  fontSize={['12px', '14px']}
                  borderRadius="50px"
                >
                  Get In Touch
                </Button>
                <Image
                  objectFit='cover'
                  src="home.png"
                  alt='Dan Abramov'
                  sizes="(max-width: 320px) 320px, 1080px"
                  fallbackSrc='https://via.placeholder.com/1080'
                />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* About Page------start-------- */}
      <Box className='about-us' p={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box
            className='about-img'
            boxSize={{ base: '100%', md: 'md' }}
            height={{ base: 'auto', md: '-webkit-fit-content' }}
          >
            <Image src='about-img.jpg' alt='Dan Abramov' maxWidth='100%' />
          </Box>
          <Box className='about-text' maxW={['full', 'md', 'lg']} textAlign={['center', 'start', 'start']} m={['1px', '60px']} px={['20px', '20px', 0]}>
            <Heading as='h3' fontSize={{ base: 'xl', md: '2xl' }} mt={[4, 4, 0]}>
              About Us
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} as='p' mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>
            <Button
              size='md'
              height='42px'
              width='132px'
              fontSize='14px'
              borderRadius='50px'
              colorScheme='red'
              mt="20px"
            >
              Read More
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Articles Page------start-------- */}
      <Box className='articles'>
        <Box className='article-text' textAlign={['center', 'center', 'start']}>
          <Heading as='h1' fontSize={['36px', '46px', '56px']}>Latest Articles</Heading>
        </Box>
        <Tabs className='card-section' marginBottom={6} variant='enclosed'>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {/* 1st card---------- */}
                <Card maxW={['full', 'md', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='tomato.png'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']} >Grilled Tomatoes at Home</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                    </Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>

                {/* 2nd card---------- */}
                <Card maxW={['full', 'md', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='fruit-salad.png'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']}>Snacks for Travel</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                    </Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >Read More</Button>
                  </CardBody>
                </Card>

                {/* 3rd card---------- */}
                <Card maxW={['full', 'md', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='green-veg.png'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']}>Post-workout Recipes</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...                </Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >Read More</Button>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {/* 4th card---------- */}
                <Card maxW={['full', 'md', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='grilled-tomatoes-1-846x846 1 (1).png'
                      alt='grilled-tomatoes-1-846x846 1 (1)'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']}>How To Grill Corn</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard...</Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >Read More</Button>
                  </CardBody>
                </Card>

                {/* 5th card---------- */}
                <Card maxW={['full', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='meal-prep-ideas-846x846 1 (2).png'
                      alt='meal-prep-ideas-846x846 1 (2)'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']}>Crunchwrap Supreme</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                    </Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>

                {/* 6th card---------- */}
                <Card maxW={['full', 'md', 'lg']} p={['20px', '15px', '10px']} textAlign={['center', 'start', 'start']} borderRadius="30px">
                  <CardBody>
                    <Image
                      src='meal-prep-ideas-846x846 1 (3).png'
                      alt='meal-prep-ideas-846x846 1 (3)'
                      borderRadius='lg'
                    />
                    <Heading as='h6' mt={['15px', '20px']} fontSize={['16px', '18px']}>Broccoli Cheese Soup</Heading>
                    <Text fontSize={['12px', '14px', '15px']} as="p" mt="15px">
                      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                    </Text>
                    <Button
                      size={['sm', 'md']}
                      height={['36px', '42px']}
                      width={['110px', '132px']}
                      fontSize={['12px', '14px']}
                      borderRadius="50px"
                      mt="20px"
                    >Read More</Button>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
          <TabList display='flex' justifyContent='center' alignItems='center' textAlign='center'>
            <Tab>
              <ChevronLeftIcon />
            </Tab>
            <Tab>
              <ChevronRightIcon />
            </Tab>
          </TabList>
        </Tabs>
      </Box>

      {/* Footer Page------start-------- */}
      <Box className='footer' py={8}>
        <Grid templateColumns={{ base: '4fr', md: 'repeat(4, 4fr)' }} gap={4} margin='0 auto' maxW='1200px'>
          <GridItem w='100%' padding="100" display='flex' alignItems='center' justifyContent='center'>
            <Image
              src='logo.png'
              alt='logo'
              borderRadius='lg'
              width="-webkit-fit-content"
            />
          </GridItem>
          <GridItem w='100%'>
            <Box w='100%' p={4} color='white'>
              <List spacing={4} pl={6}>
                <ListItem>
                  <Text as='h1' fontSize='xl' fontWeight='600'>
                    Contact Us
                  </Text>
                </ListItem>
                <ListItem as='li'>
                  Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                </ListItem>
                <ListItem as='li'>example2020@gmail.com</ListItem>
                <ListItem as='li'>(904) 443-0343</ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem w='100%' >
            <Box w='100%' p={4} color='white'>
              <List spacing={4} pl={4}>
                <ListItem>
                  <Text as="h1" fontSize='xl' fontWeight='600'>
                    More
                  </Text>
                </ListItem>
                <ListItem as='li'>
                  Aboute Us
                </ListItem>
                <ListItem as='li'>
                  Products
                </ListItem>
                <ListItem as='li'>Career</ListItem>
                <ListItem as='li'>Contact Us</ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem w='100%' >
            <Box w='100%' p={4} color='white'>
              <List spacing={3} pl={4}>
                <ListItem>
                  <Text as='h1' fontSize='xl' fontWeight='600'>
                    Social Links
                  </Text>
                </ListItem>
                <ListItem>
                  Aboute Us
                </ListItem>
                <ListItem>
                  Products
                </ListItem>
                <ListItem>Career</ListItem>
                <ListItem>Contact Us</ListItem>
              </List>
            </Box>
          </GridItem>
        </Grid>
      </Box>

    </>
  )
}
