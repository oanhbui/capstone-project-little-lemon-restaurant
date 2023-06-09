import {
    Box,
    Flex,
    Spacer,
    Text,
    Image
} from '@chakra-ui/react';
import HeaderImage from "./icons_assets/restauranfood.jpg";
import ReserveTable from './ReserveTableModal';

function Header({availableTimes, dispatch, setBookingDetails}) {
    return (
        <header>
            <Box className="container">
                <Flex>
                    <Box w="300px">
                        <Text fontSize="40pt" color="#F4CE14" lineHeight="1">Little Lemon</Text>
                        <Text fontSize="20pt" color="white" lineHeight="1">Chicago</Text>
                        <Text color="white" paddingTop="10px" paddingBottom="10px">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</Text>
                        <ReserveTable availableTimes={availableTimes} dispatch={dispatch} setBookingDetails={setBookingDetails}/>
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