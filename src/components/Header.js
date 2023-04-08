import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/Logo.svg';

const Links = [
    {
        name: 'Home',
        path: '/',
        ariaLabel: 'Navigate to the home page.'
    },
    {
        name: 'About',
        path: '/about',
        ariaLabel: 'Navigate to the about page.'
    },
    {
        name: 'Menu',
        path: '/menu',
        ariaLabel: 'Navigate to the menu page.'
    },
    {
        name: 'Reservations',
        path: '/booking',
        ariaLabel: 'Navigate to the booking page.'
    },
    {
        name: 'Order Online',
        path: '/order-online',
        ariaLabel: 'Navigate to the order online page.'
    },
    {
        name: 'Login',
        path: '/login',
        ariaLabel: 'Navigate to the login page.'
    }
];

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Box as='Header' w='100%' maxW='890px' px={4} data-testid="header">
          <Flex 
              alignItems={'center'} 
              justifyContent={'center'}
              w="100%"
              h="123px"
              columnGap="28px"
          >
            <HStack spacing={8} w='100%' alignItems={'center'} justifyContent={'space-between'}>
              <Box>
                  <div className="img-container">
                      <img src={logo} className="logo" alt="A logo of a lemon with the name of the restaurant Little Lemon." />
                  </div>
              </Box>
              <HStack
                as={'nav'}
                spacing={7}
                alignItems={'center'} 
                justifyContent={'space-between'}
                fontSize={'xl'}
                fontWeight={'medium'}
                whiteSpace={'nowrap'}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link, index) => (
                  <Link 
                      key={index}
                      as={NavLink}
                      exact="true"
                      to={link.path}
                      aria-label={link.ariaLabel}
                      color='var(--color-primary)'
                      _activeLink={{
                        textDecoration: 'none',
                        color: 'var(--color-secondary)',
                      }}
                      _hover={{
                          textDecoration: 'none',
                          color: 'var(--color-secondary)',
                        }}
                  >
                      {link.name}
                  </Link>
                ))}
              </HStack>
            </HStack>
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
                {Links.map((link, index) => (
                  <Link 
                        key={index}
                        as={NavLink}
                        exact="true"
                        to={link.path}
                        aria-label={link.ariaLabel}
                        onClick={onClose}
                        color='var(--color-primary)'
                        fontSize={'2xl'}
                        _activeLink={{
                            textDecoration: 'none',
                            color: 'var(--color-secondary)',
                        }}
                        _hover={{
                            textDecoration: 'none',
                            color: 'var(--color-secondary)',
                            }}
                  >
                      {link.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
}

export default Header;