import React from 'react'
import { Image, Text, Stack, Heading, Icon, Grid, GridItem, Input, Button } from '@chakra-ui/react';
import Link from "next/link"
import { FaMapMarkerAlt, FaTruck, FaUniversity, FaArrowLeft } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';
/* import CheckoutList from '../components/Checkout/CheckoutList';
 */
const Checkout: React.FC = ()=> {

  return(
    <Stack alignItems="center">
      <Stack>
        <Heading fontSize={25}>Revisá y confirmá tu compra</Heading>
        <Stack>
          <Heading fontSize={20}>Detalle de entrega</Heading>
          <CheckoutCard 
          icon={FaMapMarkerAlt}
          title="Calle falsa 123"
          text="CP 3000 - Arroyo leyes"
          />
          <CheckoutCard 
          icon={FaTruck}
          title="Acordar con el vendedor"
          text=""
          />
        </Stack>
        <Heading fontSize={20}>Forma de pago</Heading>
        <CheckoutCard 
          icon={FaUniversity}
          title="Transferencia bancaria"
          text=""
          />
          <Stack bg="gray.300"p={5} borderRadius={10}>
            <Grid templateColumns="5fr repeat(4,1fr)">
              <GridItem>Producto</GridItem>
              <GridItem>Cantidad</GridItem>
              <GridItem>Precio</GridItem>
              <GridItem>IVA</GridItem>
              <GridItem>Subtotal</GridItem>
            </Grid>
          </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-around">
        <Link href="/">
          <a>
            <Button colorScheme="blue" px={5} size="lg"><Icon as={FaArrowLeft} me={3}/>Volver</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button colorScheme="green" px={10} size="lg">Confirmar compra</Button>
          </a>
        </Link>
      </Stack>
    </Stack>
  )
}
export default Checkout