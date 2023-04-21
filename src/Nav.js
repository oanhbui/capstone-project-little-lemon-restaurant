import Logo from './icons_assets/Logo.svg';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box className="container">
            <Flex h={16} alignItems={'center'} w="full" justifyContent={'space-between'}>
                    <Box marginRight={20}>
                        <img src={Logo} />
                    </Box>
                    <Spacer />
                    <Flex
                        w="full"
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <>
                                <NavLink className='nav-link' key={link}>{link}</NavLink>
                                <Spacer />
                            </>
                        ))}
                    </Flex>

                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
};

export default Nav;