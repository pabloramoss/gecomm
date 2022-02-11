import React, { useEffect } from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider, Button, Flex, Icon, Container, Badge} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Aside from "../components/ui/Aside";
import Link from "next/link"
import OrderList from "../components/OrderList/OrderList";
import { FaTruck } from 'react-icons/fa';
import parseCurrency from "../components/product/parseCurrency";


const IndexRoute = ({products, handleAddToCart, handleRemoveFromCart, cart})=>{
  console.log(products)
  const productsGrouping = products.reduce((a, { category, title, price, iva, image  }) => {
    const foundCategory = a.find(({ productCategory }) => productCategory === category);
    if (foundCategory) foundCategory.productsGroup.push({ title, price, iva, image});
    else a.push({ productCategory: category, productsGroup: [{ title, price, iva, image }] });
    return a;
  }, []);
  const categories = productsGrouping.map(item=>item.productCategory)

const productsSection = productsGrouping.map(productCat=>(
  <Stack key={productCat.productCategory} pb={10}>
    <Text id={productCat.productCategory} color="gray.400" fontSize={25}>{productCat.productCategory}</Text>
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(260px, 1fr))">
        {productCat.productsGroup.map(product=>(
      <Stack position="relative" key={product.title} bg="white" borderRadius={10} _hover={{boxShadow:"dark-lg"}}>
        <Image alignSelf="center" src={product.image} h={250} w={250} objectFit="scale-down" alt={product.title} />
        <Icon zIndex={10} position="absolute" right="10%" top="53%" color="green.400" h={10} w={10} p={2} bg="white" as={FaTruck} borderRadius="full" />
        <Divider />
        <Stack height="100%" justifyContent="space-between" p={5}>
          <Heading fontSize={22} fontWeight={600}> US{parseCurrency(parseInt(product.price))}<Badge ms={3} borderRadius={5}>+IVA({product.iva}%)</Badge></Heading>
          <Text justifySelf="center" color="gray.600" fontSize={15}>{product.title}</Text>
          <Button justifySelf='end' colorScheme="blue" onClick={()=>handleAddToCart(product)}>Agregar al carrito</Button>
          {console.log(product.description)}
        </Stack>
      </Stack>
          ))
}
      </Grid>
  </Stack>
  ))

  return (
    <Stack direction="row" bg="gray.200">
      <Navbar categories={categories}/>
      <Aside categories={categories} />
      <Container overflow="scroll" maxW="container.xl" maxH="100vh" alignSelf="center" pt={5}>
        {productsSection}
      </Container>
        <Stack display={["none","none","none","flex"]} minW="200px">
          <Text>hola mundo</Text>
        </Stack>
      <Flex position="fixed" zIndex={50}>
        {Boolean(cart.length) && <OrderList cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />}
      </Flex>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
  };
};
export default IndexRoute;