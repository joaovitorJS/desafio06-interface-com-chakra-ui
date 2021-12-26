import { GetStaticProps } from "next";

import { Flex, Box, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Travel } from "../components/Travel";

import { api } from "../services/api";

export interface ContinentProps {
  id: number;
  name: string;
  slogan: string;
  thumb: string;
  slug: string;
}

interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  
  return (
    <>
      <Header />
      <Banner />
      <Flex
        as="main"
        flexDirection="column"
        maxW={1440}
        mx="auto"
        pt={{
          base: "14", 
          md: "24"
        }}
        pb="24"
      >
        <Travel />
        
        <Box  
          width="90px"
          mx="auto"
          mt="20"
          borderColor="gray.500"
          borderBottom="2px"
        />
        
        <Text 
          textAlign="center"
          fontWeight="medium"
          fontSize={{
            base: "32", 
            sm: "34", 
            md: "36"
          }}
          my={{
            base: "6", 
            md: "52px"
          }}
          padding="6"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <Box
          mx={{
            base: '0',
            sm: '24px',
            md: '50px',
            lg: '50px',
            xl: '100px'
          }}
        >
          <Slider data={continents}/>
        </Box>
      </Flex>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');


  return {
    props: {
      continents: response.data
    }
  }
}
