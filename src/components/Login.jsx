import { Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

const Login = () => {
    return (
        <Box p={'50px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} >
            <Box gap={20} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'} w={'500px'}>
                <Image w={'200px'} src='./logo-dark.png' alt='logo' />
                <Box w={'325px'} gap={10} p={20} border={'1px solid gray'}>
                    <Text fontSize={'25px'} fontWeight={700}>Sign In</Text>
                    <Box mt={5} display={'flex'} justifyContent={'space-around'} alignItems={'start'} flexDirection={'column'}>
                    <label>Email address</label>
                    <Input border={'1px solid gray'} bg={'#e7e0fe'} w={'280px'} />
                    </Box>
                    <Box mt={5} display={'flex'} justifyContent={'space-around'} alignItems={'start'} flexDirection={'column'}>
                    <label>Password</label>
                    <Input border={'1px solid gray'} bg={'#e7e0fe'} w={'280px'} />
                    </Box>
                    <Button mt={20} w={'100%'} bg={'#febd68'} >Sign In</Button>
                    <Text mt={20} fontSize={'12px'}>By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
