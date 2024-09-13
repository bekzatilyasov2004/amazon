import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Rate } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import useProduct from '../store/Store'

const Card = ({ img, name, star, price }) => {
    const select = useProduct((state) => state.setSelect)
    const add = useProduct((state) => state.addCart)
    const nav = useNavigate()

    const byNow = () => {
        const product = { img, name, star, price }
        select(product)
        nav('/order')
    }

    const addCart = () => {
        const product = { img, name, star, price }
        add(product)
    }

    return (
        <Box bg={'white'} p={10} w={'410px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={'column'}>
            <Image className='img' w={'200px'} src={img} alt={name} />
            <Box w={'100%'} gap={5} display={'flex'} justifyContent={'space-between'} alignItems={'start'} flexDirection={'column'}>
                <Text className='txt' fontWeight={700} fontSize={'20px'}  >{name}</Text>
                <Rate allowHalf defaultValue={star} />
                <Flex gap={5} justifyContent={'space-around'} alignItems={'start'}>
                    <pre className='pr'>$</pre>
                    <Text fontWeight={700} fontSize={'30px'}>{price}</Text>
                    <pre className='pr'>99</pre>
                </Flex>
                <Flex w={'100%'} gap={10} justifyContent={'space-around'} alignItems={'center'}>
                    <Button onClick={byNow} bg={'#ffd814'} borderRadius={'20px'} p={2} w={'150px'}>By Now</Button>
                    <Button onClick={addCart} bg={'#ffd814'} borderRadius={'20px'} p={2} w={'150px'}>Add To Cart</Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default Card
