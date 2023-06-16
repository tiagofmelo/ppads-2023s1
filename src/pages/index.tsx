import type { NextPage } from "next";
import {
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Input
} from "@chakra-ui/react";

import { AiOutlineGoogle } from "react-icons/ai";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingSplash } from "../components/LoadingSplash";
import Head from "next/head";

const Home: NextPage = () => {
  const { handleLogin, user, isAuthLoading } = useFirebaseAuth();
  const router = useRouter();
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (!isAuthLoading && user) {
      router.push("/transactions");
    }
  }, [user, isAuthLoading]);

  if (isAuthLoading) {
    return <LoadingSplash />;
  }

  return (
    <SimpleGrid columns={[1, 1, 2]} h="100vh" bg="#1B1B1F">
      <Head>
        <title>CoinKeeper | Login</title>
      </Head>
      <Flex
        display={["none", "none", "flex"]}
        bgImage="/myBillsBg.svg"
        bgSize="95%"
        bgRepeat="no-repeat">
      </Flex>
      <Flex
        alignItems={["center", "center", "flex-start"]}
        p={[5, 5, 20]}
        justifyContent="center"
        flexDir="column">
        <Image src="/mybills.png" alt="MyBills" mb={10} />
        <Stack gap={2} alignItems={["center", "center", "flex-start"]}>
          <Text fontWeight="bold" fontSize="1.5rem" color="white">
            Bem-vindo
          </Text>
          <Text color="white">Faça login para começar!</Text>
          {/* <Input placeholder='Login'
            color="white"
            required />
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Senha'
            color={'white'}
            required />
          <Flex>
            <Button
              bg="blue"
              color="white"
              _hover={{
                filter: "brightness(0.8)",
                transition: "0.5s",
              }}
              //onClick={handleLogin}
              size="lg"
              width={"10em"}>
              <Text>Entrar</Text>
            </Button>
            <Button
              bg="blue"
              color="white"
              _hover={{
                filter: "brightness(0.8)",
                transition: "0.5s"}}
              //onClick={handleLogin}
              size="lg"
              width={"10em"}
              marginLeft={"1em"}>
              <Text>Cadastrar</Text>
            </Button>
          </Flex> */}
          <Button
            bg="red.500"
            color="white"
            _hover={{
              filter: "brightness(0.8)",
              transition: "0.5s"}}
            onClick={handleLogin}
            size="lg"
            leftIcon={<Icon as={AiOutlineGoogle} />}>
            <Text>Entre com a sua conta do Google</Text>
          </Button>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
};

export default Home;
