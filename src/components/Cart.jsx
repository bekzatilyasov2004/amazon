import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Checkbox, Rate, Empty, Divider } from 'antd';
import React from 'react';
import useProduct from '../store/Store';

const Cart = () => {
  const cart = useProduct((state) => state.cart);
  const clearCart = useProduct((state) => state.clearCart);
  const removeFromCart = useProduct((state) => state.removeFromCart);

  const total = cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0).toFixed(2);

  const allDel = () => {
    clearCart();
  };

  const handleDelete = (index) => {
    removeFromCart(index);
  };

  return (
    <Box w={'100%'} bg={'#eaeded'} display={'flex'} justifyContent={'space-around'} alignItems={'start'} p={'20px'}>
      <Box p={5} w={'70%'} flexDirection={'column'} display={'flex'} justifyContent={'space-around'} alignItems={'start'}>
        <Box>
          <Image w={'100%'} src='https://clone-f50ae.web.app/assets/background/cart-ad.png' alt={'Cart Advertisement'} />
        </Box>
        <Box h={'100px'} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'}>
          <Text fontSize={'30px'} fontWeight={'bold'}>
            Shopping Cart
          </Text>
          <Text onClick={allDel} cursor={'pointer'} textDecoration={'underline'} color={'GrayText'}>
            Deselect all items
          </Text>
        </Box>
        <Box w={'100%'} bg={'white'} flexDirection={'column'} display={'flex'} justifyContent={'space-between'} >
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <>
                <Box gap={20} p={5} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Image src={item.img} alt={item.name} w={'200px'} h={'200px'} />
                  <Box gap={5} display={'flex'} justifyContent={'space-between'} alignItems={'start'} flexDirection={'column'}>
                    <Text fontWeight={'bold'}>{item.name}</Text>
                    <Flex gap={5} alignItems={'center'}>
                      <Checkbox />
                      <Text fontWeight={500}>This is a gif</Text>
                      <Link color={'blue'} textDecoration={'underline'} href='https://github.com/bekzatilyasov2004' target={'_blank'}>Learn More</Link>
                    </Flex>
                    <Rate value={item.star} allowHalf />
                    <Flex gap={5}>
                      <Text onClick={() => handleDelete(index)} fontWeight={600} cursor={'pointer'} color={'red.500'}>
                        Delete
                      </Text>
                      |
                      <Text cursor={'pointer'}>Save for later</Text>
                    </Flex>
                  </Box>
                  <Flex gap={5} justifyContent={'space-around'} alignItems={'start'}>
                    <pre>$</pre>
                    <Text fontWeight={700} fontSize={'20px'}>{item.price}</Text>
                    <pre>99</pre>
                  </Flex>
                </Box>
                <Divider />
              </>
            ))
          ) : (
            <Empty
              description={<span>Your cart is empty</span>}
              imageStyle={{ height: 60 }}
              style={{ marginTop: 50 }}
            />
          )}
        </Box>
      </Box>
      <Box p={10} position={'sticky'} top={10} w={'30%'} h={'100vh'} display={'flex'} justifyContent={'start'} flexDirection={'column'} alignItems={'center'}>
        <Box bg={'white'} p={14}  gap={10} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
          <Flex gap={5} alignItems={'start'}>
            <Text>Subtotle:</Text>
            <Text fontWeight={700}>${total}</Text>
          </Flex>
          <Flex gap={10}>
            <Checkbox />
            <Text>
              This order contains a gift
            </Text>
          </Flex>
          <Button borderRadius={'10px'} w={'100%'} bg={'gold'}>Proceed to checkout</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
