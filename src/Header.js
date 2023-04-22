import {
    Box,
    Flex,
    Spacer,
    Text,
    Button,
    Image
} from '@chakra-ui/react';
import HeaderImage from "./icons_assets/restauranfood.jpg";

function Header() {
    return (
        <header>
            <Box className="container">
                <Flex>
                    <Box w="300px">
                        <Text fontSize="40pt" color="#F4CE14">Little Lemon</Text>
                        <Text fontSize="20pt" color="white">Chicago</Text>
                        <Text color="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</Text>
                        <Button bg="#F4CE14" borderRadius="4mm">Reserve a Table</Button>
                    </Box>
                    <Spacer />
                    <Box height={1} paddingTop={5}>
                        <Box position="relative" width={300} height={300} borderRadius={20} overflow="hidden">
                            <Image position="absolute" src={HeaderImage} width="300" top="50%" transform="translateY(-50%)"/>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </header>
    )
};

export default Header;