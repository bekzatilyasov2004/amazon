import { Image } from '@chakra-ui/image';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Badge } from 'antd';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import useProduct from '../store/Store';


const Header = () => {

    const cart = useProduct((state)=> state.cart)
    
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'gold' : 'inherit', 
    textDecoration: 'none'
  });

  return (
    <Box p={5} gap={20} color={'white'} w={'100%'} h={'65px'} bg={'#131921'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <Box as={NavLink} to={''} w={200} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Image width={100} src='./logo.png' alt='logo' />
        </Box>
        <Flex w={'100%'}>
            <InputGroup borderRadius={'5px'} w={'100%'} bg={'white'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={5}>
                <Input bg={'white'} color={'black'} outline={'none'} w={'100%'} />
                <InputRightAddon cursor={'pointer'} p={2.5} bg={'#febd68'}>
                    <IoIosSearch size={'25px'} color='black' />
                </InputRightAddon>
            </InputGroup>
        </Flex>
        <Flex alignItems={'center'} flexDirection={'column'} gap={2}>
            <Text fontSize={'12px'}>English</Text>
            <Image w={'30px'} src='./flag.png' alt='english' />
        </Flex>
        <Flex as={NavLink} to={'/login'} w={'150px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} style={linkStyle}>
            <Text fontSize={'12px'}>Hello, Guest</Text>
            <Text fontWeight={700}>Sign In</Text>
        </Flex>
        <Flex as={NavLink} to={'/order'} w={'150px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} style={linkStyle}>
            <Text fontSize={'12px'}>Returns</Text>
            <Text fontWeight={700}>& Orders</Text>
        </Flex>
        <Flex as={NavLink}  to={'/cart'} w={'150px'} justifyContent={'center'} alignItems={'end'} style={linkStyle}>
        <Badge size="small" count={cart.length} >
            <IoCartOutline color='white' size={'45px'} />
        </Badge>
            <Text>Cart</Text>
        </Flex>
    </Box>
  );
};

export default Header;
