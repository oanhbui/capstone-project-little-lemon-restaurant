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
import footerLogo from "./icons_assets/footerLogo.png";

function Footer() {
    return (
        <footer>
            <SimpleGrid className='container' columns={{base: 1, md: 4}} spacing="10">
                <Box>
                    <Image src={footerLogo} bg="white" px="10px" py="10px" />
                </Box>
                <Box>
                    <Text fontWeight="bold" mb="20px">Doormat Navigation</Text>
                    <Stack lineHeight="1">
                        <Link href='/'>Home</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Menu</Link>
                        <Link href='/'>Reservations</Link>
                        <Link href='/'>Order Online</Link>
                        <Link href='/'>Login</Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" mb="50px">Contact</Text>
                    <Stack lineHeight="1">
                        <Text>Address</Text>
                        <Text>Phone number</Text>
                        <Text>Email</Text>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" mb="50px">Social Media</Text>
                    <Stack lineHeight="1">
                        <Text>Address</Text>
                        <Text>Phone number</Text>
                        <Text>Email</Text>
                    </Stack>
                </Box>
            </SimpleGrid>
        </footer>
    )
};

export default Footer;