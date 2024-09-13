import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

const Footer = () => {
  return (
    <Box pos={'fixed'} bottom={0} bg={'transparent'} backdropFilter={'blur(10px)'} color={'black'}  w={'100%'} h={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
      <Text>2024 Amazon Clone.</Text>
      <Text>Made by Bekzat Ilyasov</Text>
    </Box>
  )
}

export default Footer
