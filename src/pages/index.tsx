import { Flex, Box, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
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

export default function Home({ continents }:HomeProps) {
  
  return (
    <>
      <Header />
      <Banner />
      <Flex
        as="main"
        flexDirection="column"
        maxW={1440}
        mx="auto"
        pt="24"
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
          fontSize="36" 
          mt="52px"
          mb="52px"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <Box
          mx="24"
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
