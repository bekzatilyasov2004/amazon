import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import Card from '../Cards/Card'
import { ProductData } from '../constants/PoductData'

const Home = () => {
  return (
    <Box bg={'#eaeded'} >
        <Image src='./hero.webp' alt='hero' w={'100%'} h={'300px'} />
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <Box maxW={'1290px'} p={10} gap={20}  display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>
            {
                ProductData.map((item, index)=>(
                    <Card key={index} img={item.image} name={item.name} star={item.star} price={item.price} />
                ))
            }
        </Box>
        </Box>
    </Box>
  )
}

export default Home
