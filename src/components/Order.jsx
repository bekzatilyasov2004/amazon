import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Divider, Rate } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Card from '../Cards/Card';
import { ProductData } from '../constants/PoductData';
import useProduct from '../store/Store';

const Order = () => {
    const select = useProduct((state) => state.select);
    const add = useProduct((state) => state.addCart);
    const navigate = useNavigate();

    const addCart = () => {
        add(select);
    };

    const goCart = () => {
        navigate('/cart');
    };

    return (
        <Box w={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Box w={'100%'} mt={10} textAlign={'center'}>
                <NavLink to={'/'}>
                    <Text> ← Go Back</Text>
                </NavLink>
            </Box>
            {select ? (
                <Box p={5} maxW={'1290px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={'50px'}>
                    <Box p={5} w={'50%'}>
                        <Image width={400} className='img' src={select.img} alt={select.name} />
                    </Box>
                    <Box p={5} gap={10} display={'flex'} justifyContent={'space-between'} alignItems={'start'} flexDirection={'column'} w={'50%'}>
                        <Text className='txt' fontWeight={700} fontSize={'23px'} >{select.name}</Text>
                        <Rate value={select.star} />
                        <Flex w={'100px'} gap={5} justifyContent={'space-around'} alignItems={'start'}>
                            <pre className='pr'>$</pre>
                            <Text fontWeight={700} fontSize={'30px'}>{select.price}</Text>
                            <pre className='pr'>99</pre>
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'} mt={4}>
                            <Button
                                onClick={addCart}
                                border={'1px solid'}
                                bg={'yellowgreen'}
                                borderRadius={'20px'}
                                p={2}
                                w={'130px'}
                                color={'white'}
                                _hover={{ bg: 'green.400' }}
                            >
                                Add To Cart
                            </Button>
                            <Button
                                onClick={goCart}
                                border={'1px solid'}
                                bg={'yellowgreen'}
                                borderRadius={'20px'}
                                p={2}
                                w={'130px'}
                                color={'white'}
                                _hover={{ bg: 'green.400' }}
                            >
                                Go To Cart
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            ) : (

            <Divider />
            )}
            <Box mt={50} maxW={'1290px'} w={'100%'}>
                <Flex w={'100%'} overflowX={'auto'} pr={50} pl={50} >
                {
                ProductData.map((item, index)=>(
                    <Card key={index} img={item.image} name={item.name} star={item.star} price={item.price} />
                ))
            }
                </Flex>
            </Box>
        </Box>
    );
};

export default Order;
