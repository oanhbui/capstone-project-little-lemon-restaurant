import {
    Box,
    Flex,
    Spacer,
    Text,
    Button,
    Image,
    Card,
    Stack,
    CardBody,
    SimpleGrid,
    Link,
    
} from '@chakra-ui/react';
import greekSalad from "./icons_assets/greekSalad.jpg";
import lemonDesert from "./icons_assets/lemonDessert.jpg";
import bruchetta from "./icons_assets/bruchetta.jpg";
import adriAndMariA from "./icons_assets/Mario and Adrian A.jpg";
import adriAndMariB from "./icons_assets/Mario and Adrian b.jpg";

function Main() {
    return (
        <main>
            <Box className="container" marginTop="120px">
                <Flex mb="5">
                    <Box>
                        <Text fontWeight="bold" fontSize="30">This weeks specials!</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button bg="#F4CE14" borderRadius="4mm">Online Menu</Button>
                    </Box>
                </Flex>
                <SimpleGrid columns={{base: 1, md: 3}} spacing="5">
                    <Card borderRadius="2mm">
                        <Image src={greekSalad} width="100%" maxHeight="130px" />
                        <CardBody bg="#EDEFEE">
                            <Stack>
                                <Flex>
                                    <Box>
                                        <Text fontWeight="bold">Greek Salad</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Text fontWeight="bold" color="#EE9972">$12.99</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="12px">
                                    The famous greek salad of crispy lettuce, pepper, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                </Text>
                                <Link fontSize="12px" fontWeight="bold">Order a delivery</Link>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card>
                        <Image src={bruchetta} width="100%" maxHeight="130px"/>
                        <CardBody bg="#EDEFEE">
                            <Stack>
                                <Flex>
                                    <Box>
                                        <Text fontWeight="bold">Bruchetta</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Text fontWeight="bold" color="#EE9972">$5.99</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="12px">
                                    Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                                </Text>
                                <Link fontSize="12px" fontWeight="bold">Order a delivery</Link>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card>
                        <Image src={lemonDesert} width="100%" maxHeight="130px"/>
                        <CardBody bg="#EDEFEE">
                            <Stack>
                                <Flex>
                                    <Box>
                                        <Text fontWeight="bold">Lemon Dessert</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Text fontWeight="bold" color="#EE9972">$5.00</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="12px">
                                    This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                                </Text>
                                <Link fontSize="12px" fontWeight="bold">Order a delivery</Link>
                            </Stack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>

            <Box className='testimonials' mt="50px" bg="#495e57">
                <Stack className='container' py="60px">
                    <Text textAlign="center" color="white" fontWeight="bold" fontSize="25px">Testimonials</Text>
                    <SimpleGrid columns={{base: 1, md: 4}} spacing="4">
                        <Box bg="white">
                            <Stack px="10px" py="10px">
                                <Text>Rating</Text>
                                <SimpleGrid columns={{base: 1, md: 2}} spacing="3">
                                    <Box>
                                        <Image src={greekSalad} />
                                    </Box>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                </SimpleGrid>
                                <Text>Review Text</Text>
                            </Stack>
                        </Box>
                        <Box bg="white">
                            <Stack px="10px" py="10px">
                                <Text>Rating</Text>
                                <SimpleGrid columns={{base: 1, md: 2}} spacing="3">
                                    <Box>
                                        <Image src={greekSalad} />
                                    </Box>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                </SimpleGrid>
                                <Text>Review Text</Text>
                            </Stack>
                        </Box>
                        <Box bg="white">
                            <Stack px="10px" py="10px">
                                <Text>Rating</Text>
                                <SimpleGrid columns={{base: 1, md: 2}} spacing="3">
                                    <Box>
                                        <Image src={greekSalad} />
                                    </Box>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                </SimpleGrid>
                                <Text>Review Text</Text>
                            </Stack>
                        </Box>
                        <Box bg="white">
                            <Stack px="10px" py="10px">
                                <Text>Rating</Text>
                                <SimpleGrid columns={{base: 1, md: 2}} spacing="3">
                                    <Box>
                                        <Image src={greekSalad} />
                                    </Box>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                </SimpleGrid>
                                <Text>Review Text</Text>
                            </Stack>
                        </Box>
                    </SimpleGrid>
                </Stack>
            </Box>

            <Box className='about container' mt="50px" mb="50">
                <SimpleGrid columns={{base: 1, md: 2}} spacing="5">
                    <Box>
                        <Text>Little Lemon</Text>
                        <Text>Chicago</Text>
                        <Text>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                        </Text>
                    </Box>
                    <Box position="relative" height="300px" width="300px">
                        <Image src={adriAndMariA} position="absolute" left="0" bottom="0" width="60%" zIndex="2"/>
                        <Image src={adriAndMariB} position="absolute" top="0" right="0" width="60%" zIndex="1" />
                    </Box>
                </SimpleGrid>
            </Box>
        </main>
    )
};

export default Main;